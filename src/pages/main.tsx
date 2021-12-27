import { Link } from "react-router-dom";

const MainDemo = () => {
  return (
    <>
      <div>
        <Link to="/tabs">Tabs练习</Link>
        <br />
        <Link to="/box">盒子模型练习</Link>
      </div>
    </>
  );
};
export default MainDemo;
