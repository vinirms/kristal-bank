import { doc, getDoc } from "firebase/firestore";
import { useValueAutenticacao } from "../Context/AutenticacaoContext";
import { useEffect, useState } from "react";
import db from "../Firebase/db.config";

export const useFetchDado =()=>{
    const [dado, setDado] = useState("");
    const { user } = useValueAutenticacao();

  useEffect(() => {
    async function dados() {
      try {
        const docRef = await doc(db, "user", user.uid);
        const docSnap = await getDoc(docRef);
        setDado(docSnap.data());
      } catch (error) {
        console.log(error.message);
      }
    }
    dados();
  }, []);
return {dado}
}