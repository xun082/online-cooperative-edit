import React, { FC } from "react";

import styles from "./index.module.scss";

import TemplateCard from "@/components/template-card";
import { Template } from "@/common";
import { useBoolean } from "@/hooks";

const Home: FC = () => {
  const moduleShow = useBoolean(false);

  const closeHandle = (event: React.MouseEvent<HTMLDivElement>) => {
    // 点击的是内容区域，不关闭模态框
    if (event.target !== event.currentTarget) return;
    moduleShow.onFalse();
  };
  return (
    <>
      <section className={styles.root}>
        <aside className={styles.sidebar}>
          <button className={styles["new-code-snippet"]}>
            <span onClick={() => moduleShow.onToggle()}>新建代码片段</span>
          </button>
        </aside>
        <main className={styles.content}>=</main>
      </section>
      {moduleShow.value && (
        <div className={styles["dialog"]} onClick={closeHandle}>
          <div className={styles["module"]}>
            <header className={styles["module-header"]}>
              <span>选择模板</span>
              <span
                className={styles["module-close"]}
                onClick={() => moduleShow.onFalse()}
              >
                关闭
              </span>
            </header>
            <section className={styles["module-content"]}>
              <aside className={styles["create-new-snippet-step"]}>1</aside>
              <main className={styles["create-new-snippet-content"]}>
                <div className={styles["create-new-snippet-type"]}>
                  {Template &&
                    Template.map(value => (
                      <TemplateCard
                        src={value.src}
                        alt={value.alt}
                        key={value.index}
                        onClick={value.onClick}
                      />
                    ))}
                </div>
              </main>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
