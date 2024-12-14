import { IoSearch } from "react-icons/io5";
import styled from "styled-components";

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

const InputSearch = () => {
  return (
    <SearchBox>
      <input type="text" placeholder="도서를 입력하세요." />
      <IoSearch style={{ fontSize: "18px" }} />
    </SearchBox>
  );
};

export default InputSearch;
