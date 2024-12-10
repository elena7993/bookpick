import { FaArrowLeft } from "react-icons/fa";
import styled from "styled-components";
import { mainStyle } from "../GlobalStyled";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router";

const HeaderContainer = styled.div`
  width: calc(100% + 36px);
  margin: 0 -18px;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffcc93;
  padding: 45px ${mainStyle.Padding_main};
`;
const BackButton = styled.div`
  color: #333;
  font-size: 18px;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 37px;
  height: 37px;
  object-fit: cover;
`;

const MenuButton = styled.div`
  color: #333;
  font-size: 24px;
  cursor: pointer;
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <BackButton onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </BackButton>

      <Logo src="/imgs/book_5606116.png" alt="logo" />

      <MenuButton>
        <FiMenu />
      </MenuButton>
    </HeaderContainer>
  );
};

export default Header;
