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
                let q
                if(error.message.includes("Password")){
                    q = ("senha invalida")
                }else if(error.message.includes("auth")){
                    q = ("Este email já está cadastrado")
                }
                setError(q)
            });
            
        }

    return {error, User}
}