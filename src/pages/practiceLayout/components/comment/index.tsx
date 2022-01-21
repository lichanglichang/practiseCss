import React from "react";
import styles from "./index.module.less";
const Comment: React.FC = () => {
  return (
    <div className={styles.wrapComment}>
      <div className={styles.logo}>
        <div className={styles.bgRadio}>
          <div className={styles.radio}></div>
          <div className={styles.redBar}></div>
          <div className={styles.smallRadio}></div>
        </div>
      </div>
      <div className={styles.score}>
        <div className={styles.top}>POPO 标题</div>
        <div className={styles.middle}>
          {/* <div className={styles.imgBox}></div> */}
          <div className={styles.detail}>
            <p>综合评分</p>
            <p>4.9</p>
          </div>
          {/* <div className={styles.imgBox}></div> */}
        </div>
        <div className={styles.bottom}>
          <span>商品质量</span>
          <span>1,000点</span>
        </div>
      </div>
    </div>
  );
};
export default Comment;
