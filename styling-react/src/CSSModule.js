import React from "react";
// import styles from "./CSSModule.module.css";
import styles from "./CSSModule.module.scss";
// classnames 라이브러리
import classNames from "classnames/bind";

const cx = classNames.bind(styles); // 미리 styles에서 클래스를 받아 오도록 설정하고

const CSSModule = () => {
  return (
    // <div className={`${styles.wrapper} ${styles.inverted}`}>
    // 템플릿 리터럴 문법 활용
    // <div className={[styles.wrapper, styles.inverted].join("")}>
    // classnames에 내장된 bind함수 사용
    <div className={cx("wrapper", "inverted")}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
