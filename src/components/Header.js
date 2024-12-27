import { FaArrowLeft } from "react-icons/fa";
import styled from "styled-components";
import { mainStyle } from "../GlobalStyled";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SideMenu from "../pages/sideMenu/SideMenu";

const HeaderContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  padding: 36px 0;
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
  cursor: pointer;
`;

const MenuButton = styled.div`
  color: #333;
  font-size: 24px;
  cursor: pointer;
`;

const Header = ({ showBackBtn = true }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <HeaderContainer>
        <BackButton
          onClick={() => navigate(-1)}
          style={{ visibility: showBackBtn ? "visible" : "hidden" }}
        >
          <FaArrowLeft />
        </BackButton>

        <Logo
          src={`${process.env.PUBLIC_URL}/imgs/book_5606116.png`}
          alt="logo"
          onClick={() => navigate("/search")}
        />

        <MenuButton onClick={openMenu}>
          <FiMenu />
        </MenuButton>
      </HeaderContainer>
      <SideMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
};

export default Header;
