import styled from "styled-components";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";

const TapBox = styled.div`
  display: flex;
  margin-top: 20px;
  .wishlist {
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

  .booklist {
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
`;
const Books = styled.div``;

const BookShelf = () => {
  return (
    <Wrapper>
      <Header />
      <TapBox>
        <div className="wishlist">
          <h3>위시리스트</h3>
          <div className="bar"></div>
        </div>

        <div className="booklist">
          <h3>완독리스트</h3>
          <div className="bar"></div>
        </div>
      </TapBox>

      <Books></Books>
    </Wrapper>
  );
};

export default BookShelf;
