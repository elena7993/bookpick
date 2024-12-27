import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import styled from "styled-components";
import mockBooks from "../../mockDatas/mockBook";
import categories from "../../mockDatas/categories";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputSearch from "../../components/InputSearch";
import PageTitle from "../../components/PageTitle";
import { faL } from "@fortawesome/free-solid-svg-icons";

const TabBox = styled.div`
  display: flex;
  margin: 20px 0 30px 0;
  .bestseller {
    margin-right: 16px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    h3 {
      font-size: 16px;
      font-weight: 700;
      padding: 3px;
      margin-bottom: 2px;
      color: #ababab;
    }
    .bar {
      width: 84px;
      height: 3px;
      background-color: transparent;
      border-radius: 10px;
      transition: all 0.3s ease-in-out;
    }

    &.active {
      h3 {
        color: #000;
        font-size: 16px;
      }

      .bar {
        width: 82px;
        background-color: #fed36a;
      }
    }
  }

  .category {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    h3 {
      font-size: 16px;
      font-weight: 700;
      padding: 3px;
      margin-bottom: 2px;
      color: #ababab;
    }
    .bar {
      /* width: 66px; */
      height: 3px;
      background-color: transparent;
      border-radius: 10px;
      transition: all 0.3s ease-in-out;
    }
    &.active {
      h3 {
        color: #000;
        font-size: 16px;
      }

      .bar {
        width: 66px;
        background-color: #fed36a;
      }
    }
  }
`;
const BookList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 25px;
  column-gap: 4px;
  margin-bottom: 40px;

  .book-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    cursor: pointer;

    img {
      width: 100px;
      height: 150px;
      object-fit: cover;
      border-radius: 5px;
    }

    h4 {
      margin: 10px 0 5px;
      font-size: 14px;
      font-weight: 700;
    }

    p {
      font-size: 12px;
      color: #555;
    }
  }
`;

const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
  .category-item {
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    color: #000;
    cursor: pointer;
    /* &:hover {
      background-color: #fed36a;
      transition: all 0.2s ease-in-out;
    } */
  }
`;

const Search = () => {
  const [activeTab, setActiveTab] = useState("bestseller");
  const navigate = useNavigate();

  const onCategoryClick = (categoryName) => {
    navigate(`/search/categories/${categoryName}`);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (term) => {
    navigate("/results", { state: { searchTerm: term } });
  };

  return (
    <>
      <PageTitle title={"Search"} />
      <Wrapper>
        <Header showBackBtn={false} />
        <InputSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearch={handleSearch}
        />

        <TabBox>
          <div
            className={`bestseller ${
              activeTab === "bestseller" ? "active" : ""
            }`}
            onClick={() => setActiveTab("bestseller")}
          >
            <h3>베스트셀러</h3>
            <div className="bar"></div>
          </div>

          <div
            className={`category ${activeTab === "category" ? "active" : ""}`}
            onClick={() => setActiveTab("category")}
          >
            <h3>카테고리</h3>
            <div className="bar"></div>
          </div>
        </TabBox>

        {activeTab === "bestseller" && (
          <BookList>
            {mockBooks.map((book) => (
              <div
                className="book-item"
                key={book.id}
                onClick={() => navigate(`detail/${book.id}`)}
              >
                <img src={book.cover} alt={book.title} />
                <h4>{book.title}</h4>
                <p>{book.author}</p>
              </div>
            ))}
          </BookList>
        )}

        {activeTab === "category" && (
          <CategoryList>
            {categories.map((category, index) => (
              <div
                className="category-item"
                key={index}
                onClick={() => onCategoryClick(category)}
              >
                <h4>{category}</h4>
              </div>
            ))}
          </CategoryList>
        )}
      </Wrapper>
    </>
  );
};

export default Search;
