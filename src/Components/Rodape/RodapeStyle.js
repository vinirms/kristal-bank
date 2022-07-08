import styled from "styled-components";

export const Footer = styled.footer`
 width: 100%;
 display: flex;
 min-height: 70vh;
 align-items: center;
 flex-direction: column;
 justify-content: center;
 background-color:#1e272e;
 h2{
     margin: 0;
    color:  white;
    margin-top: 20px;
    letter-spacing: 3px;
    font-family: 'Righteous', cursive;
 }
 p{
    color: white;
 }
`
export const Conteudo = styled.div`
    width: 90%;
    display: flex;
    height: auto;
    justify-content: space-around;
    border-bottom: 2px solid white;
    @media (max-width: 968px) {
            &{
                height: auto;
                overflow-y: hidden;
                align-items: center;
                flex-direction: column;
                
            }
        }
    a{
        color: white;
        padding: 10px 0px;
        text-decoration: none;
        &:hover{
            text-decoration: underline;
        }
    }
    h1{
        gap: 5px;
        margin: 0;
        display: flex;
        margin-top: 10px;
        margin-bottom: 20px;
        align-items: center;
        @media (max-width: 968px) {
            font-size: 1.2em;
        }
        span{
            display: none;
            font-size: .8em;
        }
        @media (max-width: 968px) {
            span{
                display: block;
                cursor: pointer;
            }
        }
    }
    div{
        margin :0 ;
        width: 300px;
        color: white; 
        height: 400PX;
        display: flex;
        align-items: center;
        flex-direction: column;
        @media  (max-width: 968px){
            height: auto;
            margin-bottom: 5px;
        }
    }
    span{
        gap: 10px;
        display: flex;
        font-size: 1.5em;
    }

`
export const MobileOne = styled.div`
    ul:nth-child(1){
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    @media (max-width: 968px) {
        &{
            padding: 0;
            overflow-y: hidden;
            align-items: center;
            justify-content: center;
            border-bottom: 2px solid #7f8c8d;
            transition: all 0.4s ease-in-out;
            display: ${({active}) => active && "flex"} ;
            visibility: ${({active}) => active ? "visible" : "hidden"};
            width: ${({active}) => active ? "200px" : "200px"};
            height: ${({active}) => active ? "180px" : "0px"} ;
            transform: ${({active})=> active ? "translateY(0%)" : "translateY(-100%)"};

        }
    }
    }
    
`
export const MobileTwo = styled.div`
    ul:nth-child(1){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    @media (max-width: 968px) {
        &{
            padding: 0;
            overflow-y: hidden;
            align-items: center;
            justify-content: center;
            transition: all 0.4s ease-in-out;
            border-bottom: 2px solid #7f8c8d;
            display: ${({activeTwo}) => activeTwo && "flex"} ;
            height: ${({activeTwo}) => activeTwo ? "180px" : "0px"} ;
            width: ${({activeTwo}) => activeTwo ? "200px" : "200px"};
            visibility: ${({activeTwo}) =>activeTwo ? "visible" : "hidden"};
            transform: ${({activeTwo})=> activeTwo ? "translateY(0%)" : "translateY(-100%)"};

        }
    }
    }
    
`

export const MobileThree = styled.div`
    ul:nth-child(1){
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    @media (max-width: 968px) {
        &{
            overflow-y: hidden;
            align-items: center;
            justify-content: center;
            transition: all 0.4s ease-in-out;
            border-bottom: 2px solid #7f8c8d;
            display: ${({activeThree}) => activeThree && "flex"} ;
            width: ${({activeThree}) => activeThree ? "200px" : "200px"};
            height: ${({activeThree}) => activeThree ? "180px" : "0px"} ;
            transform: ${({activeThree})=> activeThree ? "translateY(0%)" : "translateY(-100%)"};
            visibility: ${({activeThree}) =>activeThree ? "visible" : "hidden"};

        }
    }
    }
    
`


