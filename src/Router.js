import Home from "./pages/home/Home";
import Search from "./pages/bookSearch/Search";
import { HashRouter, Route, Routes } from "react-router-dom";
import BookShelf from "./pages/bookShelf/BookShelf";
import BookDetail from "./pages/bookSearch/BookDetail";
import Category from "./pages/categories/Category";
import Results from "./pages/bookSearch/Results";
import SideMenu from "./pages/sideMenu/SideMenu";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/results" element={<Results />} />
        <Route path="/search/detail/:id" element={<BookDetail />} />
        <Route path="/search/categories/:categoryName" element={<Category />} />
        <Route path="/shelf" element={<BookShelf />} />
        <Route path="/sideMenu" element={<SideMenu />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
