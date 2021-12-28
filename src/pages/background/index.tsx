import React from "react";
import bgStyle from "./background.module.less";
const BackGroundDome: React.FC = () => {
  return (
    <div>
      <h2>实现按钮</h2>
      <div className={bgStyle.topContent}>
        <button>
          <p>产地总览</p>
        </button>
        <button>
          <p>物流运输</p>
        </button>
        <button>
          <p>销售总览</p>
        </button>
      </div>
    </div>
  );
};
export default BackGroundDome;
