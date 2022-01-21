import React from "react";
import styles from "./index.module.less"
import { ShopOutlined, RestOutlined, RobotOutlined } from '@ant-design/icons';
const RingData: React.FC = () => {
    return (
        <div className={styles.wrapRingData}>
            <div className={styles.wrapItem}>
                <div className={styles.item}>
                    <ShopOutlined />
                    <p>商品</p>
                </div>
                <svg className={styles.circular} viewBox="25 25 50 50">

                    <circle className={styles.pathOne} cx="50" cy="50" r="20" fill="white" />
                </svg>
            </div>
            <div className={styles.wrapItem}>
                <div className={styles.item}>
                    <RestOutlined />
                    <p>服务</p>
                </div>
                <svg className={styles.circular} viewBox="25 25 50 50">
                    <circle className={styles.pathTow} cx="50" cy="50" r="20" fill="white" />
                </svg>
            </div>
            <div className={styles.wrapItem}>
                <div className={styles.item}>
                    <RobotOutlined />
                    <p>物流</p>
                </div>
                <svg className={styles.circular} viewBox="25 25 50 50">
                    <circle className={styles.pathThree} cx="50" cy="50" r="20" fill="white" />
                </svg>
            </div>



        </div>
    )
}
export default RingData;