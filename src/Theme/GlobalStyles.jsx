import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
}
.table{
    color: ${(props) => props.theme.text}
  }
.modal {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text}
}
.accordion{
  background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
}
  `