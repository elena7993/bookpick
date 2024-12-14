import styled from "styled-components";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import { Combobox } from "evergreen-ui";
import { useParams, useNavigate } from "react-router-dom";
import mockBooks from "../../mockDatas/mockBook";

const SelectedCategory = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  .c-name {
    font-size: 18px;
    font-weight: 700;
  }
  .combobox {
    width: 100px;
    div[role="combobox"] {
      width: 100px !important;
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

const Category = () => {
  const { categoryName } = useParams();

  const filterBooks = mockBooks.filter((book) =>
    book.categoryName.includes(categoryName)
  );

  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header />

      <SelectedCategory>
        <div className="c-name">{categoryName}</div>
        <Combobox
          className="combobox"
          openOnFocus
          items={["이름순", "최신등록순"]}
          onChange={(selected) => console.log(selected)}
          placeholder="정렬"
        />
      </SelectedCategory>

      <BookList>
        {filterBooks.length > 0 ? (
          filterBooks.map((book) => (
            <div
              className="book-item"
              key={book.id}
              onClick={() => navigate(`/search/detail/${book.id}`)}
            >
              <img src={book.cover} alt={book.title} />
              <h4>{book.title}</h4>
              <p>{book.author}</p>
            </div>
          ))
        ) : (
          <p>해당 카테고리에 책이 없습니다.</p>
        )}
      </BookList>
    </Wrapper>
  );
};

export default Category;

// navigate("search/detail/${book.id}")
// 현재 경로를 기준으로 상대 경로를 계산함! 주소가 중첩되어 요상하기 나옴..

// navigate(/search/detail/${book.id})
// /로 시작하는 경로는 절대 경로로 해석하므로 /를 빼야해

// 경로 잘 확인하자자!
