import styled from "styled-components";
import Wrapper from "../../components/Wrapper";
import { Link } from "react-router-dom";
import PageTitle from "../../components/PageTitle";

const InnerWrap = styled.div`
  /* width: 100%; */
  width: calc(100% + 36px);
  height: 100%;
  margin: 0 -18px;
  background: url("/imgs/vintage_book_strore.webp") no-repeat center / cover;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.div`
  font-size: 40px;
  color: #fff;
  font-family: "Irish Grover", system-ui;
  font-weight: 400;
  font-style: normal;
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
  /* font-style: normal; */
  border-radius: 30px;
  text-align: center;
  margin-top: 60px;
  cursor: pointer;
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
