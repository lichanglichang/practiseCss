import React from "react";
import bgStyle from "./background.module.less";
import img from "./img/1.jpg";
const BackGroundDome: React.FC = () => {
  return (
    <div>
      <div
        style={{ background: "#ff0", display: "flex", alignItems: "flex-end" }}
      >
        <span>1</span>{" "}
        <img
          src={img}
          alt=""
          style={{ width: "100px", height: "100px", display: "block" }}
        />
      </div>
      <h2 className={bgStyle.active}>实现按钮</h2>
      <div className={bgStyle.topContent}>
        <button className={bgStyle.active}>
          <p>产地总览产地总览</p>
        </button>
        <button>
          <p>物流运输</p>
        </button>
        <button>
          <p>销售总览</p>
        </button>
      </div>
      <h2>背景透明文字不透明</h2>
      <div className={bgStyle.opacityBg}>
        <div className={bgStyle.wordBox}>这里有文字</div>
      </div>

      <div className={bgStyle.opacityBgImg}>
        <p>
          {" "}
          这里有文字 <br /> 这里有文字
        </p>
        <div className={bgStyle.wordBox}></div>
      </div>

      <h2>vertical-align</h2>
      <div className={bgStyle.verticalImg}>
        图片
        <img src={img} alt="" />
      </div>
    </div>
  );
};
export default BackGroundDome;
