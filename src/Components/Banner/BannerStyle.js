import styled from "styled-components";
import cartao from '../../Assets/Image/cartao.png'

export const Section = styled.section`
    width: 100%;
    height: 55vh;
    display: flex;
    overflow: hidden;
    justify-content: center;
    background-color: #ffd32a;
    @media (max-width: 968px){
        height: 48vh;
        width: 100%;
    }
 
`
export const Container = styled.div`
    width: 80%;
    height: 55vh;
    position: relative;
        
    .square_info{
        height: 300px;
        width: 300px;
        border-radius: 50%;
        background-color:#0be881;
        position: absolute;
        top: 5vh;
        left: 15%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        z-index: 2;
        p:nth-child(1){
            font-family: 'Splash', cursive;
            font-size: 3.5em;
            font-weight:bold ;
            margin: 0;
            span{
                font-family: 'Righteous', cursive;
                font-size: .6em;
                text-decoration: underline;
            }
        }
        p:nth-child(2){
            font-family: 'Righteous', cursive;
            font-size: 1.2em;
            margin: 0;
        }
        @media (max-width: 1400px) {
            &{
            top: 0vh;
            left: 60%;
            height: 200px;
            width: 200px;
            }
            p:nth-child(1){
            font-family: 'Righteous', cursive;
            font-size: 3em;
            margin: 0;
             }
            p:nth-child(2){
                font-family: 'Righteous', cursive;
                font-size: 1em;
                width: 140px;
                text-align: center;
                margin: 0;
            }
        
        }
        @media (max-width: 768px) {
            &{
            top: 0vh;
            left: 50%;
            height: 200px;
            width: 200px;
            }
        }
    }
    .square{
        height: 500px;
        width: 500px;
        border-radius: 50%;
        background-color:#0be881;
        position: absolute;
        top: 7vh;
        left: 30%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        
        img{
            height: 450px;
            z-index: 1000;
        }
    }
    .cartao{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        background-image: url(${cartao});
        background-repeat: no-repeat;
        box-shadow: 1px 0px 11px -1px rgba(0,0,0,0.94);
        background-size: cover;
        border-radius: 10px;
        position: absolute;
        height: 180px;
        width:300px;
        right: 10%;
        top: 10vh;
        animation: card .8s alternate infinite ease-in-out ;
        transform: translateY(0);
        p:nth-child(1){
            color: white;
            font-family: 'Righteous', cursive;
            text-align: center;
            font-size: 1.5em;
            width: 250px;
            margin-top: 15px;
            letter-spacing: 2px;
        }
        p:nth-child(2){
            color: white;
            font-family: 'Righteous', cursive;
            text-align: center;
            font-size: 1.1em;
            width: 250px;
            
        }
        img{
            width: 100px;
            position: absolute;
            bottom: 0;
            right: 0;
        }
        @keyframes card {
            from{
                transform: translateY(0);
            }
            to{
                transform: translateY(20px);
            }
        }

        @media (max-width: 1500px){
            &{
                display: none;
            }
        }
    }

    button{
        position: absolute;
        top:40vh ;
        right: 15%;
        padding: 10px 20px;
        border: none;
        font-size: 1.5em;
        background-color: #485460;
        border-radius: 5px;
        color: white;
        cursor: pointer;
        box-shadow: 1px 2px 4px 1px #000000;
        &:hover{
            -webkit-box-shadow: 0px 8px 18px -4px #000000; 
            box-shadow: 0px 8px 10px -4px #000000;
            background-color:#808e9b;
        }
        a{
        color:  white;
        text-decoration: none;
        }  
        @media (max-width: 1500px){
            display: none;
        }
    }
    @media (max-width: 968px){
        width: 100%;
        
        .square{
            height: 400px;
            width: 400px;
            left: 0;
            img{
              height: 350px;
            }
        }
        
        
    }
`