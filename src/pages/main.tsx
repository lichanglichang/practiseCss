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
        <Link to="/vw">Vw响应式布局</Link>
        <br />
        <Link to="/pull">下拉框</Link>
        <br />
        <Link to="/grid">栅格布局</Link>
        <br />
        <Link to="/table">修改表格样式</Link>
        <br />
        <Link to="/font">引入外部字体</Link>
        <br />
        <Link to="/practice">css练习布局</Link>
      </div>
    </>
  );
};
export default MainDemo;
