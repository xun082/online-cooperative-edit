import React, { FC, useState, useLayoutEffect, useEffect } from "react";
import { PanelGroup, Panel } from "react-resizable-panels";
import { WebContainer } from "@webcontainer/api";
import { v4 as uuid } from "uuid";

import styles from "./index.module.scss";
import { components, editorAside, ResizeHandle } from "./component";

import { labelType } from "@/types";
import Editor from "@/components/editor";
import { TerminalPanel } from "@/components/terminal";
import { useAppSelector } from "@/store";
import WebContainerContext from "@/context/webContainer";
import {
  WebContainerFileSystemTreeSavePoint,
  saveFileSystemTree,
  writeDirByLocal,
} from "@/utils/webContainer";
import { curDirectory } from "@/utils/getLocalDirectory";
import { LinkData } from "@/types";
import { Preview } from "@/components/preview";

const Edit: FC = () => {
  const [activeIcon, setActiveIcon] = useState<labelType>("file");
  const [linkData, setLinkData] = useState<LinkData>(() => ({
    src: "",
    uuid: "",
  }));
  const { path } = useAppSelector(state => state.code);

  const [webContainerInstance, setWebContainerInstance] =
    useState<WebContainer | null>(null);

  useLayoutEffect(() => {
    const bootWebContainer = async () => {
      const instance = await WebContainer.boot();

      const treeData = localStorage.getItem(
        WebContainerFileSystemTreeSavePoint,
      );

      if (treeData) {
        const fileSystemTree = JSON.parse(treeData);
        await instance.mount(fileSystemTree);
      }

      if (curDirectory) {
        await writeDirByLocal(curDirectory, instance);
      }

      setWebContainerInstance(instance);
    };

    if (webContainerInstance) return;
    bootWebContainer();
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();

      webContainerInstance && saveFileSystemTree(webContainerInstance);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [webContainerInstance]);

  useEffect(() => {
    if (webContainerInstance) {
      webContainerInstance.on("server-ready", (port, host) => {
        setLinkData({
          src: host,
          uuid: uuid(),
        });
      });
    }
  }, [webContainerInstance]);

  const handleIconClick = (label: labelType) => {
    setActiveIcon(label);
  };

  const Component = components[activeIcon];

  return (
    <WebContainerContext.Provider
      value={webContainerInstance && webContainerInstance}
    >
      <main className={styles["root"]}>
        <nav className={styles["edit-nav"]}>
          {editorAside.map(({ icon, label }) => (
            <div
              className={styles["aside-button"]}
              key={label}
              onClick={() => handleIconClick(label)}
            >
              {React.cloneElement(icon, {
                style: {
                  fontSize: "24px",
                  color: activeIcon === label ? "#f0f0f0" : "#828388",
                },
              })}
            </div>
          ))}
        </nav>
        <section className={styles["edit-content"]}>
          <PanelGroup direction="horizontal">
            {/* 文件栏 */}
            <Panel
              style={{ background: "#202327" }}
              minSize={1}
              defaultSize={15}
            >
              <Component />
            </Panel>
            <ResizeHandle />
            {/* 代码编辑栏 */}
            <Panel minSize={1} defaultSize={50}>
              <PanelGroup direction="vertical">
                <Panel collapsible={true}>
                  <div className={styles["edit-header"]}>1</div>
                  <Editor filePath={path} />
                </Panel>
                <ResizeHandle direction="vertical" />
                <Panel
                  defaultSize={30}
                  minSize={2}
                  style={{ background: "#15181E" }}
                >
                  <TerminalPanel />
                </Panel>
              </PanelGroup>
            </Panel>

            <ResizeHandle />
            {/* 效果展示 */}
            <Panel minSize={1} defaultSize={35}>
              <Preview data={linkData} />
            </Panel>
          </PanelGroup>
        </section>
      </main>
    </WebContainerContext.Provider>
  );
};

export default Edit;