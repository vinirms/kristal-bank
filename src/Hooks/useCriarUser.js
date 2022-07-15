import { createUserWithEmailAndPassword } from "firebase/auth";
import {  useState } from "react";
import db from '../Firebase/db.config'
import { auth } from "../Firebase/db.config";


export const CriarUser = ()=>{

    const [error, setError] = useState('')
        const User = async(data) =>{
        const usuario = await createUserWithEmailAndPassword(auth, data.email, data.senha)
            .then((userCredential) => {
                const user = userCredential.user;
               
            })
            .catch((error) => {
                let erroMessage
                   if(error.message.includes("Password")){
                    erroMessage= "Senha deve conter 6 caracteres"
                   } else if(error.message.includes("email-already")){
                    erroMessage= "Email já cadastrado"
                   }
                   setError(erroMessage)
            });
            console.log(`log do hook ${usuario}`)
        }

    return {error, User}
}