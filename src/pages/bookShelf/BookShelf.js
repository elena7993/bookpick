import styled from "styled-components";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import { useEffect, useState } from "react";

const TapBox = styled.div`
  display: flex;
  margin-top: 20px;
  .wishlist {
    margin-right: 16px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    h3 {
      color: #ababab;
      font-weight: 700;
      padding: 2px;
    }
    .bar {
      width: 80px;
      height: 3px;
      background-color: transparent;
      border-radius: 10px;
      transition: all 0.3s ease-in-out;
    }

    &.active {
      h3 {
        color: #000;
        font-size: 18px;
      }

      .bar {
        width: 88px;
        background-color: #fed36a;
      }
    }
  }

  .booklist {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    h3 {
      color: #ababab;
      font-weight: 700;
      padding: 2px;
    }
    .bar {
      width: 82px;
      height: 3px;
      background-color: transparent;
      border-radius: 10px;
      transition: all 0.3s ease-in-out;
    }
    &.active {
      h3 {
        color: #000;
        font-size: 18px;
      }

      .bar {
        width: 70px;
        background-color: #fed36a;
      }
    }
  }
`;
const Books = styled.div``;

const BookShelf = () => {
  const [activeTab, setActiveTab] = useState("wishlist");
  const [wishlist, setWishlist] = useState([]);
  const [readlist, setReadlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const storedReadlist = JSON.parse(localStorage.getItem("readlist")) || [];
    setWishlist(storedWishlist);
    setReadlist(storedReadlist);
  }, []);

  const booksToShow = activeTab === "wishlist" ? wishlist : readlist;

  return (
    <Wrapper>
      <Header />
      <TapBox>
        <div
          className={`tab ${activeTab === "wishlist" ? "active" : ""}`}
          onClick={() => setActiveTab("wishlist")}
        >
          <h3>위시리스트</h3>
          <div className="bar"></div>
        </div>

        <div
          className={`tab ${activeTab === "readlist" ? "active" : ""}`}
          onClick={() => setActiveTab("readlist")}
        >
          <h3>완독리스트</h3>
          <div className="bar"></div>
        </div>
      </TapBox>

      <Books>
        {booksToShow.length > 0 ? (
          booksToShow.map((book) => (
            <div className="book-item" key={book.id}>
              <img src={book.cover} alt={book.title} />
              <h4>{book.title}</h4>
              <p>{book.author}</p>
            </div>
          ))
        ) : (
          <p>리스트가 비어있습니다.</p>
        )}
      </Books>
    </Wrapper>
  );
};

export default BookShelf;
