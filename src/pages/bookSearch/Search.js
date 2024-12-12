import { IoSearch } from "react-icons/io5";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import styled from "styled-components";
import mockBooks from "../../mockDatas/mockBook";

const SearchBox = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #000;
  border-radius: 15px;
  padding: 0 8px;
  margin-top: 15px;

  input {
    all: unset;
    &::placeholder {
      font-size: 14px;
    }
  }
`;
const TapBox = styled.div`
  display: flex;
  margin-top: 20px;
  .bestseller {
    margin-right: 16px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    h3 {
      font-weight: 700;
      padding: 2px;
    }
    .bar {
      width: 82px;
      height: 3px;
      background-color: #fed36a;
      border-radius: 10px;
    }
  }

  .category {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    h3 {
      font-weight: 700;
      padding: 2px;
    }
    .bar {
      width: 70px;
      height: 3px;
      background-color: #fed36a;
      border-radius: 10px;
    }
  }
`;
const BookList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-top: 20px;

  .book-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

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

const Search = () => {
  return (
    <Wrapper>
      <Header />
      <SearchBox>
        <input type="text" placeholder="도서를 입력하세요." />
        <IoSearch style={{ fontSize: "18px" }} />
      </SearchBox>

      <TapBox>
        <div className="bestseller">
          <h3>베스트셀러</h3>
          <div className="bar"></div>
        </div>

        <div className="category">
          <h3>카테고리</h3>
          <div className="bar"></div>
        </div>
      </TapBox>

      <BookList>
        {mockBooks.map((book) => (
          <div className="book-item" key={book.id}>
            <img src={book.cover} alt={book.title} />
            <h4>{book.title}</h4>
            <p>{book.author}</p>
          </div>
        ))}
      </BookList>
    </Wrapper>
  );
};

export default Search;
