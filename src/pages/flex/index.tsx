import React from "react";
import flexStyle from "../flex/flex.module.less";
const FlexDemo: React.FC = () => {
  return (
    <div>
      <div>
        <h2>容器--六大属性</h2>
        <hr />
        <h3>align-items: stretch</h3>
        <div className={flexStyle.alignItemsOne}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <hr />
        <h3>align-items与align-content区别？</h3>
        <div className={flexStyle.alignItemsTow}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <br />
        <hr />
        <br />
        <div className={flexStyle.alignContentOne}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className={flexStyle.marginBox}>
        <h2>margin-top</h2>
        <div className={flexStyle.father}>
          <div className={flexStyle.son}></div>
          <div className={flexStyle.son1}></div>
        </div>
      </div>
    </div>
  );
};

export default FlexDemo;
