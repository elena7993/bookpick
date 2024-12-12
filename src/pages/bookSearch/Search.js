import { IoSearch } from "react-icons/io5";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import styled from "styled-components";
import { searchBooks } from "../../api";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

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
const BookList = styled.div``;

const Search = () => {
  // const [books, setBooks] = useState();

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const a = await searchBooks();
  //       console.log(a);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // });

  const a = useQuery({ queryKey: ["_"], queryFn: searchBooks });
  console.log(a);

  return (
    <Wrapper>
      <Header />
      <SearchBox>
        <input type="text" placeholder="도서를 입력하세요." />
        {/* <IoSearch style={{ fontSize: "18px" }} /> */}
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

      <BookList></BookList>
    </Wrapper>
  );
};

export default Search;
