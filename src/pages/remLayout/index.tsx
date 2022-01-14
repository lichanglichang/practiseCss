import React from "react";
import RemLayoutStyle from "./remLayout.module.less";

const RemLayout: React.FC = () => {
  const computed = () => {
    let width = document.documentElement.clientWidth;
    let w = 750;
    let fontSize = (width / w) * 100;
    console.log(fontSize);

    document.documentElement.style.fontSize = fontSize + "px";
  };
  computed();
  // 节流处理函数
  const Throttle = (fn: () => void) => {
    let timer: NodeJS.Timeout | null = null;
    return () => {
      if (timer) {
        return;
      }
      timer = setTimeout(() => {
        fn();
        timer = null;
      }, 300);
    };
  };
  window.addEventListener("resize", Throttle.bind(null, computed)()); //resize:当浏览器窗口发生变化的时候，重新执行这个函数

  return (
    <div className={RemLayoutStyle.app}>
      <header>
        <div className={RemLayoutStyle.logo}>logo</div>
        <nav className={RemLayoutStyle.nav}>
          <ul>
            <li>首页</li>
            <li>新闻</li>
            <li>娱乐</li>
            <li>关于我们</li>
          </ul>
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
