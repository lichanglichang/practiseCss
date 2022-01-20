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
      <svg className={styles.circular} viewBox="25 25 50 50">
        <circle className={styles.path} cx="50" cy="50" r="20" fill="none" />
      </svg>
      <svg className={styles.circular} viewBox="25 25 50 50">
        <circle className={styles.path} cx="50" cy="50" r="20" fill="none" />
      </svg>
      <svg className={styles.circular} viewBox="25 25 50 50">
        <circle className={styles.path} cx="50" cy="50" r="20" fill="none" />
      </svg>
    </div>
  );
};

export default PracticeLayout;
