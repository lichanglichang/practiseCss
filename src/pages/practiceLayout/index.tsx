import styles from "./index.module.less";
import { RestOutlined, RobotOutlined } from '@ant-design/icons';
//components
import ScoreDemo from "./components/score";
import TextInform from "./components/textInform";
import Comment from "./components/comment";
import RingData from "./components/ringData";
const PracticeLayout = () => {
  return (
    <div className={styles.app}>
      <div className={styles.top}>
        <ScoreDemo />
        <TextInform />
      </div>
      <Comment />
      <RingData />
      <div className={styles.control}>
        <div className={styles.msg}><RestOutlined />店铺信息</div>
        <div className={styles.goods}><RobotOutlined />详情商品</div>
      </div>
    </div>
  );
};

export default PracticeLayout;
