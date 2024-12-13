import styled from "styled-components";
import { mainStyle } from "../GlobalStyled";
import { CustomScroll } from "react-custom-scroll";

const Wrap = styled.div`
  width: 100%;
  max-width: 375px;
  height: 100vh;
  padding: 0 ${mainStyle.Padding_main};
  margin: 0 auto;
  background-color: #fff6ec;
  overflow-y: auto;
  /* position: relative; */
  /* overflow: hidden; */
`;

const StyledCustomScroll = styled(CustomScroll)`
  /* position: absolute;
  top: 0;
  left: ${mainStyle.Padding_main};
  right: ${mainStyle.Padding_main};
  bottom: 0;
  box-sizing: border-box;
  overflow: hidden; */
  /* .rcs-custom-scrollbar {
    margin: 0;
    padding: 0;
    position: absolute;
  }
  .rcs-inner-handle {
    background-color: #fed36a;
  } */
`;

const Wrapper = ({ children }) => {
  return (
    <Wrap>
      {/* <StyledCustomScroll heightRelativeToParent="100%"> */}
      {children}
      {/* </StyledCustomScroll> */}
    </Wrap>
  );
};

export default Wrapper;
