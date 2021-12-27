import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainDemo from "../pages/main";
import TabsDemo from "../pages/tabs/index";
const AllRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainDemo />}></Route>
        <Route path="/tabs" element={<TabsDemo />}></Route>
      </Routes>
    </Router>
  );
};
export default AllRoute;
