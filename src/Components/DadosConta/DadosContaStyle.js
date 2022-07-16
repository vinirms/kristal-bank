import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    gap: 20px;
    .forma{
        top: 27%;
        left: 18%;
        z-index: 2;
        width: 450px;
        height: 500px;
        position: absolute;
        background-color: black;
        clip-path: polygon(0 0, 19% 0, 19% 38%, 48% 0, 68% 0, 35% 48%, 72% 100%, 51% 100%, 19% 56%, 18% 100%, 0 100%);
        background: linear-gradient(to right, #00f260, #0575e6);
        @media (max-width: 1100px) {
            display: none;
        }
    }
    .bg_forma{
        top: 10%;
        left: 2%;
        z-index: 1;
        width: 850px;
        height: 800px;
        position: absolute;
        background-color: #2c3e50;
        clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        @media (max-width: 1100px) {
            display: none;
        }
    }
    @media (max-width: 968px) {
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
`
export const Container_form = styled.div`
    width: 50%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
    height:  ${({dado})=> dado ?"0" : "80vh"};
    width: ${({dado})=> dado ?"0" : "80%"};
    }
`

export const Formulario = styled.form`
    width: 50%;
    z-index: 10;
    padding: 0 20px;
    align-items: center;
    flex-direction: column;
    background-color: white;
    justify-content: center;
    display:  ${({dado})=> dado ?"none" : "flex"};
    visibility: ${({dado})=> dado ?"hidden" : "visible"};
    

    box-shadow: 13px 14px 29px 0px #b2bec3;
    legend{
        font-size: 1.5em;
        margin-top: 20px;
        margin-bottom: 20px;
        font-family: 'Righteous', cursive;
    }
    p{
        width: 100%;
        color: black;
        padding: 5px;
        font-size: 1em;
        text-align: center;
        background-color:#ea8685;
        font-family: 'Righteous', cursive;

    }
    button{
        font-size: 1em;
        cursor: pointer;
        border-radius: 5px;
        margin-bottom: 20px;
        font-family: 'Righteous', cursive;

    }
    @media (max-width: 768px) {
        width: 100%;
    }
    .container_input{
        width: 100%;
        display: flex;
        font-size: 1.1em;
        margin-bottom: 20px;
        flex-direction: column;
        
        label{
            font-size: 1.2em;
            margin-bottom: 10px;
        }
        input{

            border: none;
            outline: none;
            font-size: 1.1em;
            padding: 5px 10px;
            border-bottom: 1px solid #7f8c8d ;
        }
    }
`



