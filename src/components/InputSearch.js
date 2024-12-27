import { useState } from "react";
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
      font-size: 12px;
    }
  }
`;

const InputSearch = ({ searchTerm, setSearchTerm, onSearch }) => {
  const [localTerm, setLocalTerm] = useState(searchTerm);

  const handleInputChange = (e) => {
    setLocalTerm(e.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(localTerm);
      // 부모 컴포넌트로 검색어 전달
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <SearchBox>
      <input
        type="text"
        placeholder="찾으시는 도서를 입력하세요."
        value={localTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <IoSearch
        style={{ fontSize: "18px", cursor: "pointer" }}
        onClick={handleSearch}
      />
    </SearchBox>
  );
};

export default InputSearch;
