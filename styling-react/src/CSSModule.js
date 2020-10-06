import React from "react";
import styles from "./CSSModule.module.css";

const CSSModule = () => {
  return (
    // <div className={`${styles.wrapper} ${styles.inverted}`}>
    // 템플릿 리터럴 문법 활용
    <div className={[styles.wrapper, styles.inverted].join("")}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
