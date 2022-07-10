import { collection, addDoc } from "firebase/firestore";
import db from "../Firebase/db.config";

export const useAddDoc = (docCollection)=>{

    const inserirDoc = async(data) =>{
        try {
            const newDoc = {...data}
            const docInserido = await addDoc(
                collection(db, docCollection), newDoc
            )
            return docInserido
                
        } catch (error) {
            console.log(error.message)
        }
    }
    return {inserirDoc}
}