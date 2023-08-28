import React, { FC, useEffect, useState, useContext } from "react";
import { useSpring, animated } from "react-spring";
import useMeasure from "react-use-measure";
import { Tree } from "antd";
import type { DataNode, AntTreeNodeProps } from "antd/es/tree";
import {
  CaretDownOutlined,
  FileOutlined,
  FolderOutlined,
} from "@ant-design/icons";
import { WebContainer } from "@webcontainer/api";

import FileEditorModal from "../file-modal";

import styles from "./index.module.scss";

import addFile from "@/assets/images/addFile.svg";
import addFolder from "@/assets/images/addFolder.svg";
import editFile from "@/assets/images/editFile.svg";
import deleteFile from "@/assets/images/deleteFile.svg";
import { ActionTypeEnum } from "@/types";
import { readFileSystem, getNodePath, getFileSuffix } from "@/utils";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  changePath,
  changeFileModalStatus,
  changeSelectedKey,
} from "@/store/modules/code";
import useMemoSelectedNode from "@/hooks/useMemoSelectedNode";
import TreeDataContext from "@/context/tree-data";
import WebContainerContext from "@/context/webContainer";
import { fileTypeIconMap } from "@/common";

const Collapse: FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [treeData, setTreeData] = useState<DataNode[]>([]);
  const { selectedKey, formatPath } = useAppSelector(state => state.code);
  const webcontainerInstance = useContext(WebContainerContext) as WebContainer;

  const dispatch = useAppDispatch();

  const [ref, bounds] = useMeasure();

  const togglePanel = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    setIsCollapsed(prevState => !prevState);
  };

  const panelContentAnimatedStyle = useSpring({
    height: isCollapsed ? 0 : bounds.height,
  });

  const toggleWrapperAnimatedStyle = useSpring({
    transform: isCollapsed ? "rotate(0deg)" : "rotate(180deg)",
  });

  const syncFileSystemToUI = async () => {
    const result = await readFileSystem(webcontainerInstance);

    setTreeData(result);
  };

  const selectedNode = useMemoSelectedNode(treeData);

  useEffect(() => {
    async function sync() {
      if (webcontainerInstance) syncFileSystemToUI();
    }

    sync();
  }, [webcontainerInstance]);

  useEffect(() => {
    if (selectedNode) {
      const path = getNodePath(selectedNode.key as string, treeData);
      dispatch(changePath(path));
    } else {
      dispatch(changePath(""));
    }
  }, [selectedNode]);

  const generateTreeNodes = (data: DataNode[]): DataNode[] => {
    return data.map(node => {
      const newNode: DataNode = {
        title: renderTitle(node.title as string, node.isLeaf as boolean),
        key: node.key,
        isLeaf: node.isLeaf,
        icon: (
          <img
            src={
              node.isLeaf
                ? fileTypeIconMap.get(getFileSuffix(node.title))
                : fileTypeIconMap.get(getFileSuffix("dir"))
            }
            className={styles["file-type-icon"]}
          ></img>
        ),
      };

      if (node.children) {
        newNode.children = generateTreeNodes(node.children);
      }
      return newNode;
    });
  };

  const renderTitle = (title: string, isLeaf: boolean): React.ReactNode => {
    return (
      <div className={styles["tree-title"]}>
        <div>{title} </div>
        <div className={styles["tree-title-edit"]}>
          {isLeaf === false && (
            <>
              <img
                className={styles["file-edit-icon"]}
                src={addFile}
                alt=""
                onClick={() =>
                  dispatch(
                    changeFileModalStatus({
                      open: true,
                      type: ActionTypeEnum.Create_File,
                    }),
                  )
                }
              />
              <img
                className={styles["file-edit-icon"]}
                src={addFolder}
                alt=""
                onClick={() =>
                  dispatch(
                    changeFileModalStatus({
                      open: true,
                      type: ActionTypeEnum.Create_Dir,
                    }),
                  )
                }
              />
            </>
          )}
          <img
            className={styles["file-edit-icon"]}
            src={editFile}
            alt=""
            onClick={() =>
              dispatch(
                changeFileModalStatus({
                  open: true,
                  type: ActionTypeEnum.Rename,
                }),
              )
            }
          />
          <img
            className={styles["file-edit-icon"]}
            src={deleteFile}
            alt=""
            onClick={() =>
              dispatch(
                changeFileModalStatus({
                  open: true,
                  type: ActionTypeEnum.Del,
                }),
              )
            }
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={styles.root} onClick={togglePanel}>
        <div className={styles.heading}>
          <div className={styles["header-info"]}>
            <animated.div style={toggleWrapperAnimatedStyle}>
              <CaretDownOutlined rev={undefined} />
            </animated.div>
            <span>FILES</span>
          </div>
          <div className={styles["header-control"]}>
            <img
              className={styles["file-edit-icon"]}
              src={addFile}
              alt=""
              onClick={() =>
                dispatch(
                  changeFileModalStatus({
                    open: true,
                    type: ActionTypeEnum.Create_Root_File,
                  }),
                )
              }
            />
            <img
              className={styles["file-edit-icon"]}
              src={addFolder}
              alt=""
              onClick={() =>
                dispatch(
                  changeFileModalStatus({
                    open: true,
                    type: ActionTypeEnum.Create_Root_Dir,
                  }),
                )
              }
            />
          </div>
        </div>
        <animated.div
          style={panelContentAnimatedStyle}
          className={styles.content}
        >
          <div
            onClick={e => e.stopPropagation()}
            ref={ref}
            className={styles.contentInner}
          >
            <Tree.DirectoryTree
              showIcon
              icon={({ isLeaf }: AntTreeNodeProps) =>
                isLeaf ? (
                  <FileOutlined rev={undefined} />
                ) : (
                  <FolderOutlined rev={undefined} />
                )
              }
              treeData={generateTreeNodes(treeData)}
              selectedKeys={[selectedKey]}
              onSelect={([key]) => {
                dispatch(changeSelectedKey(key as string));
              }}
              className={styles["antd-tree"]}
            />
          </div>
        </animated.div>
      </div>
      <TreeDataContext.Provider
        value={{
          treeData: treeData,
          setTreeData: setTreeData,
        }}
      >
        <FileEditorModal />
      </TreeDataContext.Provider>
    </>
  );
};

export default Collapse;