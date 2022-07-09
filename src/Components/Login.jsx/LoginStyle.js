import styled from "styled-components";

export const Main = styled.main`
    height: 100vh;
    border: 2px solid red;
    .forma{
        top: 27%;
        left: 20.5%;
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
        left: 5%;
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
`
export const Container_form = styled.div`
    width: 50%;
    height: 80vh;
    margin: auto;
    position: absolute;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (max-width: 1100px) {
        width: 90%;
        position: static;

    }
`
export const Formulario = styled.form`
    width: 50%;
    z-index: 10;
    display: flex;
    padding: 0 20px;
    position: relative;
    align-items: center;
    flex-direction: column;
    background-color: white;
    justify-content: center;
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
        margin-top: 20px;
        border-radius: 5px;
        margin-bottom: 20px;
        font-family: 'Righteous', cursive;

    }
    a{
        right: 20px;
        bottom: 50px;
        color: #7f8c8d;
        position: absolute;
        margin-bottom: 10px;
        text-decoration: none;
        &:hover{
            color: black;
            text-decoration: underline;
        }
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