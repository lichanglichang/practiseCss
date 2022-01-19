import styles from "./index.module.less";
//components
import ScoreDemo from "./components/score";
import TextInform from "./components/textInform";
const PracticeLayout = () => {
  return (
    <div className={styles.app}>
      <ScoreDemo />
      <TextInform />
    </div>
  );
};

export default PracticeLayout;
