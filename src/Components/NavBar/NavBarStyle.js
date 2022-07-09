import styled, {css} from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1e272e;
    
    @media(max-width: 768px){
        width: 100%;
    }
`
export const Nav = styled.nav`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  

    @media(max-width: 768px){
        width: 100%;
        overflow-x: hidden;
        position: relative;
       
    }
`
export const Nav_Logo = styled.h1`
    color: #2ecc71;
    font-size: 2.5em;
    font-family: 'Splash', cursive;
    letter-spacing: 2px;
    span{
        font-family: 'Righteous', cursive;
        text-decoration: underline;
        font-size: .6em;
        color: white;
    }
    a{
        color:  white;
        text-decoration: none;
    }
`
export const Nav_menu = styled.ul`
    gap: 20px;
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
  
    a{
        color: white;
        text-decoration: none;
    }
    button{
        border: none;
        color: white;
        cursor: pointer;
        font-size: 1.2em;
        padding: 10px 10px;
        border-radius: 5px;
        background-color:#808e9b ;
        font-family: 'Alegreya Sans', sans-serif;
        &:hover{
            color:black;
            background-color: #d2dae2;
        }
    }
    @media(max-width: 768px) {
        top: 5vh;
        right: 0;
        width: 100%;
        z-index: 40;
        position:fixed;
        padding-top: 10%;
        flex-direction: column;
        justify-content: unset;
        background-color:#1e272e ;
        height: calc(100vh - 5vh);
        transition: all 0.4s ease-in-out;
        display:${({open})=> open && "flex" } ;
        visibility: ${({open})=> open ?"visible" : "hidden"};
        transform: ${({open})=> open ?"translateX(0%)" : "translateX(100%)"};
    }
`

export const Btn_toggle = styled.div`
    display: none;
    cursor: pointer;
    .btn_trace{
        width: 2em;
        margin: .5em;
        height: .25em;
        border-radius: .2em;
        background-color: white;
    }
    @media(max-width: 768px){
        display: block;
    }
`

