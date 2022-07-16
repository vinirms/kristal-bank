import { useFetchDado } from "./useFetchDado";
import {  useState } from "react";
import { arrayUnion, doc,  updateDoc,} from "firebase/firestore";
import db from "../Firebase/db.config";
import { useValueAutenticacao } from "../Context/AutenticacaoContext";
import { useDate } from "./useDate";

export const useOperacao = () => {
    const { dado } = useFetchDado();
    const { date } = useDate();
    const { user } = useValueAutenticacao();
    const [newSaldo, setNewSaldo] = useState("");
    const [ordem, setOrdem] = useState("");
    let saldo = dado.saldo;

        const sacar = async (data) => {
            let saqueNum = Number(data.saque);
            const saldoAtual = saldo - saqueNum;
            setNewSaldo(saldoAtual)
            localStorage.setItem("saques", saqueNum);
            
            const h = localStorage.getItem("saques");
            

            const docRef = doc(db, "user", user.uid);
            await updateDoc(docRef, {
                saldo: saldoAtual,
                historico: arrayUnion(`Você sacou: R$ ${h} - em: ${date}`)
            });
            

        };
        const adicionar = async (data) => {
          let saqueNum = Number(data.saque);
          const saldoAtual = saldo + saqueNum;
          setNewSaldo(saldoAtual)
          localStorage.setItem("add", saqueNum);
          const a = localStorage.getItem("add");

    
          const docRef = doc(db, "user", user.uid);
          await updateDoc(docRef, {
            saldo: saldoAtual,
            historico: arrayUnion(`Você adicionou: R$ ${a} - em : ${date}`)

          });
        };
        




  return {sacar,adicionar, newSaldo}
}
