import styled from "styled-components";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import { useParams } from "react-router-dom";
import mockBooks from "../../mockDatas/mockBook";

const BookCover = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  img {
    width: 342px;
    height: 443px;
    object-fit: cover;
    border-radius: 8px;
  }
`;
const Title = styled.div`
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  margin: 20px 0 35px 0;
`;
const BookInfo = styled.div`
  .info {
    display: flex;
    margin-bottom: 10px;
    h4 {
      font-weight: 600;
    }
    p {
      margin-left: 40px;
    }
  }
  .priceSales {
    p {
      margin-left: 25px;
    }
  }
`;
const DescBox = styled.div`
  margin: 25px 0;
  opacity: 0.8;
`;
const Button = styled.button`
  all: unset;
  width: 321px;
  height: 42px;
  background-color: #f6bf00;
  color: #fff;
  font-weight: 700;
  border-radius: 25px;
  text-align: center;
  margin-bottom: 30px;
  cursor: pointer;
`;

const BookDetail = () => {
  const { id } = useParams();
  const book = mockBooks.find((item) => item.id === parseInt(id));

  if (!book) {
    return <h2>책 정보를 찾을 수 없습니다.</h2>;
  }

  return (
    <Wrapper>
      <Header />
      <BookCover>
        <img src={book.cover} alt={book.title} />
      </BookCover>
      <Title>{book.title}</Title>

      <BookInfo>
        <div className="info .author">
          <h4>저자</h4>
          <p>{book.author}</p>
        </div>
        <div className="info .pubDate">
          <h4>발행</h4>
          <p>{book.pubDate}</p>
        </div>
        <div className="info .publisher">
          <h4>출판</h4>
          <p>{book.publisher}</p>
        </div>
        <div className="info .categoryName">
          <h4>분류</h4>
          <p>{book.categoryName}</p>
        </div>
        <div className="info .priceStandard">
          <h4>정가</h4>
          <p>{book.priceStandard.toLocaleString()}원</p>
        </div>
        <div className="info priceSales">
          <h4>판매가</h4>
          <p>{book.priceSales.toLocaleString()}원</p>
        </div>
      </BookInfo>
      <DescBox>"{book.description}"</DescBox>
      <Button>Add</Button>
    </Wrapper>
  );
};

export default BookDetail;
