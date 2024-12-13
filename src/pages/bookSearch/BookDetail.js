import styled from "styled-components";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import { useParams } from "react-router-dom";
import mockBooks from "../../mockDatas/mockBook";

const BookCover = styled.div``;
const Title = styled.div``;
const BookInfo = styled.div``;
const DescBox = styled.div``;
const Button = styled.button``;

const BookDetail = () => {
  const { id } = useParams();
  const book = mockBooks.find((item) => item.id === parseInt(id));
  return (
    <Wrapper>
      <Header />
      <BookCover>
        <img src={book.cover} alt={book.title} />
      </BookCover>
      <Title>{book.title}</Title>

      <BookInfo>
        <div className="author">
          <h4>저자</h4>
          <p>{book.author}</p>
        </div>
        <div className="pubDate">
          <h4>발행</h4>
          <p>{book.pubDate}</p>
        </div>
        <div className="publisher">
          <h4>출판</h4>
          <p>{book.publisher}</p>
        </div>
        <div className="categoryName">
          <h4>분류</h4>
          <p>{book.categoryName}</p>
        </div>
        <div className="priceStandard">
          <h4>정가</h4>
          <p>{book.priceStandard.toLocaleString()}원</p>
        </div>
        <div className="priceSales">
          <h4>판매가</h4>
          <p>{book.priceSales.toLocaleString()}원</p>
        </div>
      </BookInfo>
      <DescBox></DescBox>
      <Button>Add</Button>
    </Wrapper>
  );
};

export default BookDetail;
