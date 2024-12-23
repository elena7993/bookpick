import styled from "styled-components";
import Wrapper from "../../components/Wrapper";
import { Link } from "react-router-dom";
import PageTitle from "../../components/PageTitle";

const InnerWrap = styled.div`
  width: calc(100% + 36px);
  height: 100%;
  margin: 0 -18px;
  /* background: url(${`${process.env.PUBLIC_URL}/imgs/vintage_book_strore.webp`})
    no-repeat center / cover;
  filter: brightness(0.7) contrast(1.1); */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: url(${`${process.env.PUBLIC_URL}/imgs/vintage_book_strore.webp`})
      no-repeat center / cover;
    filter: brightness(0.7) contrast(1.1);
    z-index: 0;
  }
`;

const Title = styled.div`
  font-size: 40px;
  color: #fff;
  font-family: "Irish Grover", system-ui;
  font-weight: 400;
  font-style: normal;
  z-index: 2;
`;

const Button = styled.button`
  all: unset;
  width: 240px;
  height: 50px;
  background-color: #f6bf00;
  color: #fff;
  font-size: 30px;
  font-family: "Irish Grover", system-ui;
  font-weight: 400;
  border-radius: 30px;
  text-align: center;
  margin-top: 60px;
  cursor: pointer;
  position: relative;
  z-index: 2;
`;

const Home = () => {
  return (
    <>
      <PageTitle title={"HOME"} />
      <Wrapper>
        <InnerWrap>
          <Title>BOOK PICK</Title>

          <Link to="/search">
            <Button>Entering...</Button>
          </Link>
        </InnerWrap>
      </Wrapper>
    </>
  );
};

export default Home;
