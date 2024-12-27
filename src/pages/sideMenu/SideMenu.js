import styled from "styled-components";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  width: 100%;
  max-width: 430px;
  height: 100vh;
  min-height: 100vh;
  background-color: #fff;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-250%)"};
  transition: all 0.5s ease-in-out;
  z-index: 999;

  @media screen and (min-width: 440px) {
    left: calc(50% - 215px);
  }
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
  row-gap: 48px;
  font-size: 22px;
  color: #000;
  cursor: pointer;
  a {
    color: #000;
  }
`;
const LogoBg = styled.div`
  img {
    opacity: 0.1;
    margin-left: 50px;
  }
`;

const SideMenu = ({ isOpen, onClose }) => {
  return (
    <Wrap isOpen={isOpen}>
      <IoCloseSharp
        style={{
          position: "absolute",
          right: "5%",
          top: "2%",
          fontSize: "25px",
        }}
        onClick={onClose}
      />
      <Title>BOOK PICK</Title>
      <MenuBox>
        <Link to={"/search"} style={{ color: "#000" }}>
          도서 검색
        </Link>
        <Link to={"/shelf"} style={{ color: "#000" }}>
          책장 보기
        </Link>
        <a
          href="https://www.aladin.co.kr/home/welcome.aspx"
          target="_blank"
          rel="noopener noreferrrer"
        >
          <p>알라딘 바로가기기</p>
        </a>
      </MenuBox>
      <LogoBg>
        <img
          src={`${process.env.PUBLIC_URL}/imgs/book_5606116.png`}
          alt="logo"
        />
      </LogoBg>
    </Wrap>
  );
};

export default SideMenu;
