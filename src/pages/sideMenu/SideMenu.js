import styled from "styled-components";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Wrap = styled.div`
  width: 100%;
  max-width: 375px;
  height: 100vh;
  background-color: #fff;
  border: 1px solid #ababab;
  overflow: hidden;
  position: relative;
`;
const Title = styled.div`
  font-size: 40px;
  font-family: "Irish Grover", system-ui;
  font-weight: 400;
  font-style: normal;
  text-align: center;
  margin: 60px 0 100px 0;
`;
const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 26px;
  cursor: pointer;
  p {
    margin-bottom: 60px;
  }
`;
const LogoBg = styled.div`
  img {
    opacity: 0.1;
    margin-left: 50px;
  }
`;

const SideMenu = () => {
  const navigate = useNavigate();

  return (
    <Wrap>
      <IoCloseSharp
        style={{
          position: "absolute",
          right: "5%",
          top: "2%",
          fontSize: "25px",
        }}
      />
      <Title>BOOK PICK</Title>
      <MenuBox>
        <p onClick={() => navigate("/search")}>도서 검색</p>
        <p onClick={() => navigate("/shelf")}>책장 보기</p>
        <a href="https://www.aladin.co.kr/home/welcome.aspx" target="_blank">
          <p>알라딘 바로가기기</p>
        </a>
      </MenuBox>
      <LogoBg>
        <img src="/imgs/book_5606116.png" alt="logo" />
      </LogoBg>
    </Wrap>
  );
};

export default SideMenu;
