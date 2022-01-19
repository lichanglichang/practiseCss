import React, { useState } from "react";
import styles from "./index.module.less";
import fullStart from "../../imgs/组 320@2x.png";
import emptyStart from "../../imgs/组 324@2x.png";
const ScoreDemo: React.FC = () => {
  // 初始化数据
  const dataType: string[] = ["服务", "物流", "商品评价"];

  // 表示三组星星各自状态
  const [countStart, setCountStart] = useState<number[]>([3, 3, 3]);

  // 随机定义长度为5的数组表示五颗星
  const scoreArr: number[] = [1, 2, 3, 4, 5];

  // 点击对应的星星显示不同状态
  const handelStart = (item: number, value: number) => {
    let newArr = [...countStart];
    newArr[item] = value + 1;
    setCountStart(newArr);
  };

  return (
    <div className={styles.wrapScore}>
      {dataType.map((item: string, dataTypeIndex: number) => (
        <div className={styles.item}>
          <p> {item}</p>
          <div className={styles.wrapImg}>
            {scoreArr.map((_, index: number) => (
              <img
                src={index < countStart[dataTypeIndex] ? fullStart : emptyStart}
                alt=""
                key={index}
                onClick={handelStart.bind(null, dataTypeIndex, index)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScoreDemo;
