import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    height: 100vh;
`
export const Container_form = styled.div`
    width: 50%;
    height: 80vh;
    margin: auto;
    display: flex;
    
    align-items: center;
    justify-content: center;
    
    @media (max-width: 768px) {
        width: 90%;
    }
`

export const Formulario = styled.form`
    width: 50%;
    z-index: 10;
    display: flex;
    padding: 0 20px;
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