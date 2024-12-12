import Home from "./pages/home/Home";
import Search from "./pages/bookSearch/Search";
import { HashRouter, Route, Routes } from "react-router-dom";
import BookShelf from "./pages/bookShelf/BookShelf";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/shelf" element={<BookShelf />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
