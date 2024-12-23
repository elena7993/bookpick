import styled from "styled-components";
import { mainStyle } from "../GlobalStyled";

const Wrap = styled.div`
  width: 100%;
  max-width: 375px;
  height: 100vh;
  padding: 0 ${mainStyle.Padding_main};
  margin: 0 auto;
  background-color: #fff6ec;
  overflow-y: auto;
  position: relative;
`;

const Wrapper = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};

export default Wrapper;
