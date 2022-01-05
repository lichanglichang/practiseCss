import { Link } from "react-router-dom";

const MainDemo = () => {
  return (
    <>
      <div>
        <Link to="/tabs">Tabs练习</Link>
        <br />
        <Link to="/box">盒子模型练习</Link>
        <br />
        <Link to="/bg">背景</Link>
        <br />
        <Link to="/flex">flex布局</Link>
        <br />
        <Link to="/rem">rem响应式布局</Link>
        <br />
        <Link to="/pull">下拉框</Link>
      </div>
    </>
  );
};
export default MainDemo;
