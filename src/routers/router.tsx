import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainDemo from "../pages/main";
import TabsDemo from "../pages/tabs/index";
import BoxDemo from "../pages/boxMode/index";
const AllRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainDemo />}></Route>
        <Route path="/tabs" element={<TabsDemo />}></Route>
        <Route path="/box" element={<BoxDemo />}></Route>
      </Routes>
    </Router>
  );
};
export default AllRoute;
