import React, { useState } from "react";
// import cs from "classnaoo             llmes";
import styles from "./index.module.less";
const TextInform: React.FC = () => {
  const [textStatus, setTextStatus] = useState(false);
  return (
    <div className={styles.wrapText}>
      <div className={styles.content}>
        DIV CSS text-overflow文本有溢出时显示css省略号clip
        ellipsis样式基础知识与用法实例经验教程篇
        有时为了避免文本文字内容超出一定宽度后溢出，我们想要溢出的部分不显示但用省略号（...）显示，这个时候我们可以使用CSS
        text-overflow文本溢出省略号属性样式实现。 DIV CSS
        text-overflow文本有溢出时显示css省略号clip
        ellipsis样式基础知识与用法实例经验教程篇
        有时为了避免文本文字内容超出一定宽度后溢出，我们想要溢出的部分不显示但用省略号（...）显示，这个时候我们可以使用CSS
        text-overflow文本溢出省略号属性样式实现。
      </div>
      <div className={styles.control}>
        <p
          onClick={() => {
            setTextStatus(!textStatus);
          }}
        >
          查看全部
        </p>
      </div>
    </div>
  );
};

export default TextInform;
