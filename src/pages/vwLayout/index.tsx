import React from "react";
import RemLayoutStyle from "./index.module.less";

const VwLayout: React.FC = () => {
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
      <svg
        style={{ position: "absolute", top: "-99999px" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="brightness">
          <feComponentTransfer>
            <feFuncR type="linear" slope="[amount]" />
            <feFuncG type="linear" slope="[amount]" />
            <feFuncB type="linear" slope="[amount]" />
          </feComponentTransfer>
        </filter>
      </svg>
    </div>
  );
};
export default VwLayout;
// 响应式方案
// rem：等比例缩放

// 媒体查询

// vw

// 善用百分比
