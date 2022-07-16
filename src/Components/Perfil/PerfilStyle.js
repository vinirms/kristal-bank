import styled from "styled-components";

export const Div = styled.div`
    width: 35%;
    height: 70vh;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (max-width: 968px) {
    margin-bottom: 50px;
    width: ${({dado})=>dado ? "35%" : '90%'};
    height:${({dado})=>dado ? "70vh" : '80vh'} ;
    position: absolute;
    top: 10%;
    h1{
        display: none;
    }
    }
    .icon{
        color: gray;
        font-size: 150px;
        margin-top: 20px;
    }
    h1{
        color: #636e72;
    }
input{
    font-size: 20px;
}
input::placeholder{
    color: #636e72;
}
`
export const Dados = styled.div`
    margin-top: 50px;
    display: flex;
    width: 100%;
    flex-direction: column;
    flex-wrap: wrap;
    z-index: 3;
    background-color: white;

    @media (max-width: 968px) {
      width: 90%;
      display: flex;
      margin: 0;
      flex-direction: column;
      align-items: center;
    }
`
export const Info_top= styled.div`
    gap: 30px;
    width: 100%;
    display: flex;
    margin-bottom: 10px;
    justify-content: center;
    flex-wrap: wrap;
    @media (max-width: 968px) {
      flex-direction: column;
      align-items: center;
    }
    h3{
        margin: 0;
        padding: 0;
    }
`
export const Info_mid= styled.div`
    gap: 30px;
    width: 100%;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;

    margin-bottom: 10px;
    @media (max-width: 968px) {
      flex-direction: column;
      align-items: center;
    }
    h3{
        margin: 0;
        padding: 0;
    }
`
export const Info_bottom= styled.div`
    gap: 30px;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    display: flex;
    @media (max-width: 968px) {
      flex-direction: column;
      align-items: center;

    }
    h3{
        margin: 0;
        padding: 0;
    }
`