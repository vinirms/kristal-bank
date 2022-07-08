import styled from "styled-components";

export const Pautas = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    
    .shadow_container{
        z-index: 3;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 1px 0px 5px 1px #000000;
    }
`

export const Container_pautas = styled.div`
    width: 60%;
    min-height: 35vh;
    @media (max-width: 768px) {
        &{
            width: 100%;
            height: 55vh;
            flex-wrap: wrap;
        }
       
    }
    h1{
            width: 30%;
            text-align: center;
            margin-bottom: 50px;
            border-bottom: 2px solid #3c40c6;
        }
    h2{
        width: 100%;
        text-align: center;

    }

    .servicos{
        gap: 20px;
        width: 90%;
        margin: auto;
        display: flex;
        justify-content: center;
        @media (max-width: 1300px) {
            &{
                gap: 5px;
                width: 100%;
                flex-wrap: wrap;
            }
       
        } 
        div:nth-child(1){
            width: 150px;
            display: flex;
            border-radius: 10px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            border: 2px solid black;
            p{
                margin-top:30px;
                
            } 
            img{
                height: 20px;
                margin-top: 20px;
            }  
            @media (max-width: 768px) {
                width: 110px;
                height: 80px;
                margin: 0;
            }
        }
        div:nth-child(2){
            margin: 0;
            padding: 0;
            text-align: center;
            img{
                height: 38px;
            }
            p{
                margin-top: 5px;
            }
            @media (max-width: 768px) {
              img{
                height: 25px;
                
              }  
            }
        }
        div{
            width: 150px;
            display: flex;
            cursor: pointer;
            border-radius: 10px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            border: 2px solid black;
            &:hover{
                border: 2px solid #ff3f34;
            }
            img{
                height: 50px;
                margin-top: 10px;
              
            }
            @media (max-width: 768px) {
                width: 110px;
                height: 80px;
            }
        } 
    }
`

export const Conta_digital = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    background-color: #d2dae2;
    min-height: 64vh;
    @media (max-width: 1300px) {
        &{
            width: 100%; 

        }
    }
    .account{
        width: 60%;
        height:auto;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        @media (max-width: 1300px) {
            &{
                width: 100%;
                
            }
        }
        img{
            position: absolute;
            height: 550px;
            right: 7%;
            top: 5.3vh;
            z-index: 2;
            @media (max-width: 768px) {
                &{
                    height: 250px;
                    top:50%;
                    bottom: 0;
                    right: 25%; 
                }
        }
        }
        .account_info{
            position: absolute;
            letter-spacing: 1px;
            display: flex;
            width: 400px;
            flex-direction: column;
            align-items: center;
            z-index: 2;
            left: 5%;
            top: 30%;
            @media (max-width: 768px) {
              width:350px ;
              top: 20px;
              left: 2.5%;
            }
            
            p:nth-child(1){
                color: #3c40c6;
                font-size: 2.5em;
                font-weight: bold;
                width: 270px;
                text-align: center;
                font-family: 'Righteous', cursive;
                @media (max-width: 1300px) {
                    font-size: 1.5em;
                    margin-top: 15px;
                }
            }
            p{
                color: #3c40c6;
                font-size: .95em;
                font-weight: bold;
                width: 350px;
                text-align: center;
                font-family: 'Righteous', cursive;
                @media (max-width: 1300px) {
                    font-size: 1em;
                    width: 300px;
                    margin-top: 5px;
                    margin-bottom: 5px;
                }
            }
            button{
                padding: 5px 15px;
                background-color: #3c40c6;
                font-size: 1.2em;
                border: none;
                color: white;
                border-radius: 30px;
                cursor: pointer;
                &:hover{
                    -webkit-box-shadow: 0px 8px 18px -4px #000000; 
                    box-shadow: 0px 8px 10px -4px #000000;
                    background-color:#575fcf;
                }
            }
        }
       
    }
    .objeto{
        clip-path: polygon(65% 0, 100% 0%, 100% 100%, 25% 100%, 50% 40%);
        background-color: aqua;
        height: 600px;
        width:1000px ;
        position: absolute;
        right: 0;
        z-index: 1;
        @media (max-width: 1300px) {
            &{
                height: 550px;
            }
        }
    }
`

export const Aplicativo = styled.div`
    z-index: 4;
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    background-color: #d2dae2;
    justify-content: center;
    box-shadow: 0px 4px 0px 0px #000000;

    .container_app{
        width: 60%;
        height: 60vh;
        display: flex;
        justify-content: space-around;
        
    }
    .app_info{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;

        p:nth-child(1){
            font-size: 4em;
            font-family: 'Righteous', cursive;
            color: #3c40c6;
            margin: 0;
        }
        p:nth-child(2){
            font-size: 1.5em;
            color: #7f8c8d;
           
        }
        .app_lojas{
            display: flex;
            gap: 10px;
            img{
            width: 100px;
            cursor: pointer;
        }
        }
        
    }
    @media (max-width: 998px) {
           .container_app{
            width: 100%;
                & > img:nth-child(1){
                    display: none;
                }
            }
            .app_info{
                width: 100%;
                
                p:nth-child(1){
                    margin: 0;
                    font-size: 3em;
                    color: #3c40c6;
                    font-family: 'Righteous', cursive;
                   
                }
                p:nth-child(2){
                    font-size: 1.1em;
                    color: #7f8c8d;
                
                }
                .app_lojas{
                    img{
                        height: 30px;
                    }
                }
            }
            
    }
`