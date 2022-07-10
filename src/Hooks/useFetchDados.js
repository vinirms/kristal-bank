import db from "../Firebase/db.config"
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";

export const useFetchDados =(docCollection, id)=>{
    const [dados, setDados] = useState("")
    
    
    useEffect(() => {
        async function buscarDados() {
    
          try {
            const refDoc = await doc(db, docCollection, id);
    
            const snapDoc = await getDoc(refDoc);
    
            setDados(snapDoc.data());
    
          } catch (error) {
            console.log(error.message)
          }
        }
        buscarDados();
      }, [docCollection, id]);
    
     
      return {dados};
    
}