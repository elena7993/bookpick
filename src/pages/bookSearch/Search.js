import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { fetchBestSellers, fetchBooks, fetchCategories } from "../../api";
// import { fetchBooks, fetchCategories } from "../../api";

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  input {
    flex: 1;
    padding: 10px;
    border: 1px solid #f6bf00;
    border-radius: 15px;
  }
`;
const TabMenu = styled.div`
  width: 100%;
  height: 25px;
  /* border: 1px solid #000; */
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;

  .tab {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    h3 {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 5px;
      color: ${(props) => (props.active ? "#000" : "#aaa")};
    }
  }

  .bar {
    width: 40px;
    height: 4px;
    background-color: #f6bf00;
    background-color: ${(props) => (props.active ? "#f6bf00" : "transparent")};
    border-radius: 2px;
    transition: background-color 0.3s ease;
  }
`;
const BestSellers = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  padding: 10px;

  div {
    text-align: center;
    img {
      width: 100%;
      height: auto;
      border-radius: 8px;
      /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);  */
    }
    h3 {
      font-size: 16px;
      margin: 8px 0 4px;
    }
    p {
      font-size: 14px;
      color: #555;
    }
  }
`;
const Categories = styled.div`
  display: flex;
  flex-direction: column;

  button {
    padding: 10px;
    margin: 5px 0;
    border: none;
    background-color: #f6bf00;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const Search = () => {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("bestseller");
  const [books, setBooks] = useState([]);
  // 책 데이터
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (activeTab === "bestseller") {
        const data = await fetchBestSellers();
        setBooks(data);
      }
    };
    fetchData();
  }, [activeTab]);

  // 카테고리 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      if (activeTab === "categories") {
        const data = await fetchCategories();
        setCategories(data);
      }
    };
    fetchData();
  }, [activeTab]);

  // 검색 데이터 가져오기
  const handleSearch = async () => {
    if (!query) return;
    const data = await fetchBooks(query);
    setBooks(data);
  };

  return (
    <Wrapper>
      <Header />
      <SearchBar>
        <input
          type="text"
          placeholder="도서를 입력하세요."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <FaSearch onClick={handleSearch} />
      </SearchBar>

      <TabMenu>
        <div
          className="tab"
          onClick={() => setActiveTab("bestseller")}
          style={{
            color: activeTab === "bestseller" ? "#000" : "#aaa",
          }}
        >
          <h3>베스트셀러</h3>
          <div className="bar" />
        </div>
        <div
          className="tab"
          onClick={() => setActiveTab("categories")}
          style={{
            color: activeTab === "bestseller" ? "#000" : "#aaa",
          }}
        >
          <h3>카테고리</h3>
          <div className="bar" />
        </div>
      </TabMenu>
      {activeTab === "bestseller" && (
        <BestSellers>
          {books.map((book, index) => (
            <div key={index}>
              <img src={book.cover} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
          ))}
        </BestSellers>
      )}

      {activeTab === "categories" && (
        <Categories>
          {categories.map((category, index) => (
            <button key={index}>{category}</button>
          ))}
        </Categories>
      )}
    </Wrapper>
  );
};

export default Search;
