import Home from "./pages/home/Home";
import Search from "./pages/bookSearch/Search";
import { HashRouter, Route, Routes } from "react-router-dom";
import BookShelf from "./pages/bookShelf/BookShelf";
import BookDetail from "./pages/bookSearch/BookDetail";
import Category from "./pages/categories/Category";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/shelf" element={<BookShelf />} />
        <Route path="/search/detail/:id" element={<BookDetail />} />
        <Route path="/search/categories/:categoryName" element={<Category />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
