import { signInWithEmailAndPassword , signOut} from "firebase/auth";
import { useState } from "react";
import { auth } from "../Firebase/db.config";

export const LoginOut = ()=>{

    const [error, setError] = useState('')

    const Login = async (data)=>{

        signInWithEmailAndPassword(auth, data.email, data.senha)
        .then((userCredential) => {
        const user = userCredential.user;
        })
        .catch((error) => {
            let msgErro;
            if (error.message.includes("user-not-found")) {
            msgErro = "Usuario nao encontrado";
            } else if (error.message.includes("password")) {
            msgErro = "senha incorreta";
            } else {
            msgErro = "ocorreu um erro";
            }
    
            setError(msgErro);
        });

    }
 ///////////////LOGOUT//////////////////
    const Logout = ()=>{
        signOut(auth)
    }

 return{error,Login,Logout}

}