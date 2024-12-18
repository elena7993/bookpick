import styled from "styled-components";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle";

const TapBox = styled.div`
  display: flex;
  margin-top: 20px;
  .wishlist {
    margin-right: 16px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    h3 {
      font-size: 16px;
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

  .readlist {
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
        width: 88px;
        background-color: #fed36a;
      }
    }
  }
`;
const Books = styled.div`
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
    <>
      <PageTitle title={"Book Shelf"} />
      <Wrapper>
        <Header />
        <TapBox>
          <div
            className={`wishlist ${activeTab === "wishlist" ? "active" : ""}`}
            onClick={() => setActiveTab("wishlist")}
          >
            <h3>위시리스트</h3>
            <div className="bar"></div>
          </div>

          <div
            className={`readlist ${activeTab === "readlist" ? "active" : ""}`}
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
                <h3>{book.title}</h3>
                <h4>{book.author}</h4>
                <p className="pub">
                  <span>{book.publisher}</span>
                  <span>{book.pubDate}</span>
                </p>
              </div>
            ))
          ) : (
            <p
              style={{ marginTop: "10px", fontWeight: "300", color: "#ababab" }}
            >
              리스트가 비어있습니다.
            </p>
          )}
        </Books>
      </Wrapper>
    </>
  );
};

export default BookShelf;
