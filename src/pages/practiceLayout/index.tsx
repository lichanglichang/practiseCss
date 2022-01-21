import styles from "./index.module.less";
//components
import ScoreDemo from "./components/score";
import TextInform from "./components/textInform";
import Comment from "./components/comment";
const PracticeLayout = () => {
  return (
    <div className={styles.app}>
      <div className={styles.top}>
        <ScoreDemo />
        <TextInform />
      </div>
      <Comment />
      <div>
        <svg className={styles.circularOne} viewBox="25 25 50 50">
          <circle className={styles.path} cx="50" cy="50" r="20" fill="white" />
        </svg>
        <svg className={styles.circularTow} viewBox="25 25 50 50">
          <circle className={styles.path} cx="50" cy="50" r="20" fill="white" />
        </svg>
        <svg className={styles.circularThree} viewBox="25 25 50 50">
          <circle className={styles.path} cx="50" cy="50" r="20" fill="white" />
        </svg>
      </div>
    </div>
  );
};

export default PracticeLayout;
