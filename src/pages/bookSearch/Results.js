import styled from "styled-components";
import Header from "../../components/Header";
import InputSearch from "../../components/InputSearch";
import Wrapper from "../../components/Wrapper";
import { useEffect, useState } from "react";
import mockBooks from "../../mockDatas/mockBook";
import { useLocation, useNavigate } from "react-router-dom";
import { Combobox } from "evergreen-ui";
import PageTitle from "../../components/PageTitle";

const SearchedResults = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  h3 {
    font-size: 16px;
    font-weight: 600;
  }
  .combobox {
    width: 100px;
  }
`;
const BookList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  gap: 8px;
  margin-top: 20px;
  .book-item {
    cursor: pointer;
    img {
      width: 140px;
      height: 175px;
      object-fit: cover;
      border-radius: 8px;
    }
    h3 {
      font-size: 14px;
      font-weight: 700;
      margin: 8px 0 5px;
    }
    h4 {
      font-size: 12px;
      margin-bottom: 4px;
    }
    .pub {
      display: flex;
      font-size: 12px;
    }
  }
`;

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { searchTerm } = location.state || "";
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    if (searchTerm) {
      handleSearch(searchTerm); // 검색어에 맞는 책 필터링
    }
  }, [searchTerm]);

  const handleSearch = (term) => {
    const results = mockBooks.filter(
      (book) => book.title.includes(term) || book.author.includes(term)
    );
    setFilteredBooks(results);
  };

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    if (sortOrder === "이름순") {
      return a.title.localeCompare(b.title);
    }
    if (sortOrder === "최신등록순") {
      return new Date(b.pubDate) - new Date(a.pubDate);
    }
    return 0;
  });

  return (
    <>
      <PageTitle title={"Search Results"} />
      <Wrapper>
        <Header />
        <InputSearch searchTerm={searchTerm} onSearch={handleSearch} />
        <SearchedResults>
          <h3>
            검색결과<span>({filteredBooks.length})</span>
          </h3>
          <div className="combobox" style={{ width: "100px" }}>
            <Combobox
              className="combobox"
              openOnFocus
              items={["이름순", "최신등록순"]}
              onChange={(selected) => setSortOrder(selected)}
              placeholder="정렬"
            />
          </div>
        </SearchedResults>

        <BookList>
          {sortedBooks.length > 0 ? (
            sortedBooks.map((book) => (
              <div
                className="book-item"
                key={book.id}
                onClick={() => navigate(`/search/detail/${book.id}`)}
              >
                <img src={book.cover} alt={book.title} />
                <h3>{book.title}</h3>
                <h4>{book.author}</h4>
                <p className="pub">
                  <span>{book.publisher}</span>
                  <span>{book.pubDate}</span>
                </p>
              </div>
            ))
          ) : (
            <p>
              이런,
              <br />
              검색 결과가 없습니다.
            </p>
          )}
        </BookList>
      </Wrapper>
    </>
  );
};

export default Results;
