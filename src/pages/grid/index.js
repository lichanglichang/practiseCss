import React from "react";
import styles from "./index.module.less";
const GridDome = ()=>{
return (
<div>栅格
<dl class={styles.container}>
  <dd class={styles.item1}>item1</dd>
  <dd class={styles.item2}>item2</dd>
  <dd class={styles.item3}>item3</dd>
  <dd class={styles.item4}>item4</dd>
  <dd class={styles.item5}>item5</dd>
  <dd class={styles.item6}>item6</dd>
</dl>
</div>
)
}
export default GridDome;