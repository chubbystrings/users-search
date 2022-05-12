import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import User from "../pages/User";
import Repo from "../pages/Repo";
import NotFound from "../pages/NotFound";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:login" element={<User />} />
        <Route path="/repos/:owner/:name" element={<Repo />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Routers;
