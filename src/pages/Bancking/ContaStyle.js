import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    @media (max-width: 968px) {
      flex-direction:column ;
      width: 100%;
      align-items: center;
    }
`
export const Saldo = styled.div`
    width: 40%;
    height: 50vh;
    margin-left: 10%;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    background-color: #95a5a6;
    color: black;
    align-items: center;
    @media (max-width: 968px) {
      width: 80%;
      margin-left: unset;
      padding: 10px;
    }
    h1{
        margin: 0;
        padding: 0;
    }
    span{
        font-size: 1.2em;
        font-style: italic;
        
    }
    input{
        height: 50px;
        width: 150px;
        font-size: 2em;
        margin-top: 10px;
        border: none;
        border-radius: 5px;
        outline: none;
        padding-left: 15px;
    }
    .btn{
        margin-top: 10px;
        display: flex;
        gap: 20px;
        button:nth-child(1){
            background-color: #27ae60;
            color: white;
            border: none;
            cursor: pointer;
            font-size: 1.2em ;
            padding: 5px;
            border-radius: 5px;
        }
        button:nth-child(2){
            background-color:#e74c3c;
            color: white;
            border: none;
            cursor: pointer;
            font-size: 1.2em ;
            padding: 5px;
            border-radius: 5px;
        }
        
    }
    .historico{
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        h1{
            font-family: 'Righteous', cursive;
            letter-spacing: 1px;
            margin: 0;
            text-transform: uppercase;
            @media (max-width: 968px) {
                font-size: 1.5em;
            }
        }
        .saque_historico{
            width: 100%;
            display: flex;
            align-items: center;
            border: 2px solid red;
            margin: 0;
            p{
                margin-left: 5px;
            }
            span{
                background-color: #e74c3c;
                font-weight: bold;
                margin-right: 10px;
                margin-left: 5px;
                padding: 0px 5px;

            }
          }  
          .add_historico{
            width: 100%;
            display: flex;
            align-items: center;
            margin: 0;
            p{
                margin-left: 5px;
            }
            span{
                background-color: green;
                font-weight: bold;
                margin-right: 10px;
                margin-left: 5px;
                padding: 0px 5px;

            }
          }  
     }
`

export const Historico = styled.div` 
    width: 30%;
    min-height: 50vh;
    margin-top: 5%;
    margin-left: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    @media (max-width: 968px) {
      width: 100%;
      margin-left: unset;
    }
    h1{
        font-family: 'Righteous', cursive;
        letter-spacing: 1px;
        margin: 0;
        text-transform: uppercase;
        font-size: 1.3em;
    }
    p{
        margin: 0;
        width: 70%;
        text-align: center;
        border-bottom: 2px solid #95a5a6;
    }
`