import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  Padding_main: "18px",
};

export const GlobalStyled = createGlobalStyle`
${reset}

*{box-sizing: border-box;
}

body{
  color: #000;
  background-color: #fff;
  /* letter-spacing: 0.1px;  */
  font-family: "Noto Sans KR", serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  ::-webkit-scrollbar {
    width: 10px;
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #fed36a;
    border-radius: 10px;
    border: 2px solid #f1f1f1;
  }
}

img{
  width: 100%;
  display: block;
}

a{
  text-decoration: none;
}

ul, li{
  list-style: none;
}
`;
