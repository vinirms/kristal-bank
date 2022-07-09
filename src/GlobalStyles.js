import  { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Alegreya Sans', sans-serif;
}
input::placeholder{
    font-size: .8em;
}
`


export default GlobalStyle;