import React from "react";
import RemLayoutStyle from "./remLayout.module.less";

const RemLayout: React.FC = () => {
  //   const computed = () => {
  //     let width = document.documentElement.clientWidth;
  //     let w = 750;
  //     let fontSize = (width / w) * 100;
  //     document.documentElement.style.fontSize = fontSize + "px";
  //   };
  //   computed();
  //   window.addEventListener("resize", computed); //resize:当浏览器窗口发生变化的时候，重新执行这个函数

  return (
    <div className={RemLayoutStyle.app}>
      <header>
        <div className={RemLayoutStyle.logo}>logo</div>
        <nav className={RemLayoutStyle.nav}>
          <a href="#">1</a>
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
        </nav>
      </header>
      <nav></nav>
      <footer>尾部</footer>
    </div>
  );
};
export default RemLayout;
// 响应式方案
// rem：等比例缩放

// 媒体查询

// vw

// 善用百分比
