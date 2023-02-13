import { createGlobalStyle } from "styled-components";
import reset from "styles-reset";

export const lightTheme = {
  fontColor: "black",
  boxColor: "#ffffff",
  inputColor: "#fcfcfc",
  bgColor: "#fafafa",
};

export const darkTheme = {
  fontColor: "white",
  boxColor: "#111111",
  inputColor: "#333333",
  bgColor: "#333333",
};

export const GlobalStyles = createGlobalStyle`
    ${reset} 
    * {
        box-sizing: border-box;
    }
    input {
        all:unset;
    }
    body {
        font-size: 14px;
        font-family: 'Open Sans', sans-serif;
        color: ${(props) => props.theme.fontColor};
        background-color: ${(props) => props.theme.bgColor};
    }
`;
