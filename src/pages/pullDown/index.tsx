import React from "react";
import pullDownStyle from "./pullDown.module.less";
const PullDown: React.FC = () => {
  return (
    <div className={pullDownStyle.navList}>
      <div>购物车</div>
      <div>
        收藏夹
        <div className={pullDownStyle.triangle}></div>
        <div className={pullDownStyle.pullList}>
          <ul>
            <li>收藏的宝贝</li>
            <li>收藏的店铺</li>
          </ul>
        </div>
      </div>
      <div>商品分类</div>
    </div>
  );
};
export default PullDown;
