// import db from "../Firebase/db.config"
// import { doc, getDoc } from "firebase/firestore";
// import { useState, useEffect } from "react";
// export const useFetchDados =(docCollection, nome)=>{
//     const [dados, setDados] = useState("")
    
//     useEffect(() => {
//         async function buscarDados() {
    
//           try {
//             const refDoc = await doc(db, docCollection, nome);
    
//             const snapDoc = await getDoc(refDoc);
    
            
//             setDados(snapDoc.data());
//           } catch (error) {
//             console.log(error.message)
//           }
//         }
//         buscarDados();
//       }, [docCollection, nome]);
    
     
//       return {dados};
    
// }
import { useState, useEffect } from "react";
import  db from "../Firebase/db.config"
import {
  collection,
  query,
  onSnapshot,
  where,
} from "firebase/firestore";

export const useFetchDados = (
  docCollection,
  uid = null
) => {
  const [documentos, setDocumentos] = useState(null);

  useEffect(() => {
    async function carregarDados() {
     

      const refCollection = await collection(db, docCollection);

      try {
        let q;
        q = await query(refCollection)
        await onSnapshot(q, (querySnapshot) => {
          setDocumentos(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        });

      } catch (error) {
        console.log(error);
        
      }
    }
    carregarDados();
  }, [docCollection, uid]);



  return { documentos };
};
