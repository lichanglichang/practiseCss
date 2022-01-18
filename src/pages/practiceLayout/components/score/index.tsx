import React, { useState } from "react"
import styles from "./index.module.less";
import fullStart from "../../imgs/组 320@2x.png"
import emptyStart from "../../imgs/组 324@2x.png"
const ScoreDemo: React.FC = () => {
  const [countStart, setCountStart] = useState<number>(3)
  const scoreArr: number[] = new Array(1, 2, 3, 4, 5);
  return <div className={styles.wrapScore}>
    <div>服务： {scoreArr.map((value: number, index: number) => (
      < img src={index < countStart ? fullStart : emptyStart} alt="" key={index} onClick={() => { setCountStart(index + 1) }} />
    )
    )}</div>
    <div>物流： {scoreArr.map((value: number, index: number) => (
      < img src={index < countStart ? fullStart : emptyStart} alt="" key={index} onClick={() => { setCountStart(index + 1) }} />

    )
    )}</div>
    <div>商品： {scoreArr.map((value: number, index: number) => (
      < img src={index < countStart ? fullStart : emptyStart} alt="" key={index} onClick={() => { setCountStart(index + 1) }} />

    )
    )}</div>
  </div>;
};

export default ScoreDemo;
