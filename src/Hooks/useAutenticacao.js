import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, doc, Firestore, addDoc } from "firebase/firestore";
import { useState } from "react";
import db from '../Firebase/db.config'

export const autenticacao = ()=>{
    const auth = getAuth()
    const [error, setError] = useState('')
    const criarConta = async(data) =>{

        try {
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.senha
            )
            console.log(user.uid)
        return {user}
        } catch (error) {
            let erroMessage
           if(error.message.includes("Password")){
            erroMessage= "Senha deve conter 6 caracteres"
           } else if(error.message.includes("email-already")){
            erroMessage= "Email já cadastrado"
           }
           setError(erroMessage)
        }
    }
    const inserirDoc = async(data) =>{
    
        try {
            const newDoc = {...data}
            const docIn = await addDoc(collection( db, docCollection), newDoc)
            console.log(docIn)
            return docIn
        } catch (error) {
            console.log(error.message)
        }
    }
    const login = async (data)=>{
        try {
            await signInWithEmailAndPassword(auth, data.email, data.senha)
            
        } catch (error) {
            let erroMessage
           if(error.message.includes("user-not-found")){
            erroMessage= "Usuário ou senha incorretos"
           } else if(error.message.includes("wrong-password")){
            erroMessage= "Usuário ou senha incorretos"
           } else{
            erroMessage = "Ocorreu um erro"
           }
           setError(erroMessage)
        }
    }
    const logout =()=>{
        signOut(auth)
    }
    return{
        auth,
        criarConta,
        error,
        login,
        logout,
        inserirDoc
    }
}