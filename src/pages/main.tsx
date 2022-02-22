import {Space} from "antd";
import {Link} from "react-router-dom";

const MainDemo = () => {
  return (
    <>
      <div style={{padding: "20px"}}>
        <Space direction="vertical">
          <Link to="/tabs">Tabs练习</Link>
          <Link to="/box">盒子模型练习</Link>
          <Link to="/bg">背景</Link>
          <Link to="/flex">flex布局</Link>
          <Link to="/rem">rem响应式布局</Link>
          <Link to="/vw">Vw响应式布局</Link>
          <Link to="/pull">下拉框</Link>
          <Link to="/grid">栅格布局</Link>
          <Link to="/table">修改表格样式</Link>
          <Link to="/font">引入外部字体</Link>
          <Link to="/practice">css练习布局</Link>
          <Link to="/head">head练习</Link>
          <Link to="/lianxi">练习antd</Link>
        </Space>
      </div>
    </>
  );
};
export default MainDemo;
