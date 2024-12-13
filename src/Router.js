import Home from "./pages/home/Home";
import Search from "./pages/bookSearch/Search";
import { HashRouter, Route, Routes } from "react-router-dom";
import BookShelf from "./pages/bookShelf/BookShelf";
import BookDetail from "./pages/bookSearch/BookDetail";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/shelf" element={<BookShelf />} />
        <Route path="/search/detail/:id" element={<BookDetail />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
