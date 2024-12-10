import { HashRouter, Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import Search from "./pages/bookSearch/Search";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
