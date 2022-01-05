import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainDemo from "../pages/main";
import TabsDemo from "../pages/tabs/index";
import BoxDemo from "../pages/boxMode/index";
import BackGroundDome from "../pages/background/index";
import FlexDemo from "../pages/flex/index";
import RemLayout from "../pages/remLayout/index";
import PullDown from "../pages/pullDown/index";
const AllRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainDemo />}></Route>
        <Route path="/tabs" element={<TabsDemo />}></Route>
        <Route path="/box" element={<BoxDemo />}></Route>
        <Route path="/bg" element={<BackGroundDome />}></Route>
        <Route path="/flex" element={<FlexDemo />}></Route>
        <Route path="/rem" element={<RemLayout />}></Route>
        <Route path="/pull" element={<PullDown />}></Route>
      </Routes>
    </Router>
  );
};
export default AllRoute;
