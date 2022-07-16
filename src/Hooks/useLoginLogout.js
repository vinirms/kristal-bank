import { signInWithEmailAndPassword , signOut} from "firebase/auth";
import { useState } from "react";
import { auth } from "../Firebase/db.config";
import { useNavigate } from "react-router-dom";
export const LoginOut = ()=>{
    const navigate= useNavigate()
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
        navigate("/")
        localStorage.clear()
    }

 return{error,Login,Logout}

}