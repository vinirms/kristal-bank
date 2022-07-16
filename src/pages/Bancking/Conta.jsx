import NavBar from "../../Components/NavBar/NavBar";
import Rodape from "../../Components/Rodape/Rodape";
import { Historico, Main, Saldo } from "./ContaStyle";
import { useFetchDado } from "../../Hooks/useFetchDado";
import { useEffect, useState } from "react";
import { useOperacao } from "../../Hooks/useOperacao";
import { useDate } from "../../Hooks/useDate";

const Conta = () => {
  const { dado } = useFetchDado();
  const [saque, setSaque] = useState("");
  const { sacar, adicionar, newSaldo } = useOperacao();
  let { date } = useDate();
  const handleSacar = () => {
    let sac = {
      saque,
    };

    let res = sacar(sac);
    setSaque("");
  };

  const handleAdd = () => {
    let sac = {
      saque,
    };
    setSaque("");
    let res = adicionar(sac);
  };

  const h = localStorage.getItem("saques");
  const hi = JSON.parse(h);
  const a = localStorage.getItem("add");
  const ad = JSON.parse(a);

  return (
    <>
      <NavBar />
      <Main>
        <Saldo>
          <h1>
            Você possui: R$: <span>{dado.saldo}</span>
          </h1>
          <h2>Saldo Atualizado: {newSaldo}</h2>
          <input
            type="text"
            onChange={(e) => setSaque(e.target.value)}
            value={saque}
          />
          <div className="btn">
            <button onClick={handleAdd}>Adicionar</button>
            <button onClick={handleSacar}>Sacar</button>
          </div>
          <div className="historico">
            <h1> historico recente</h1>
            {hi && (
              <div className="saque_historico">
                Voce sacou R$: <span>{hi}</span>ás <p>{date}</p>
              </div>
            )}
            {ad && (
              <div className="add_historico">
                Voce adicionou R$: <span>{ad}</span> ás <p>{date}</p>
              </div>
            )}
          </div>
        </Saldo>
        <Historico>
          <h1>Operações Realizadas</h1>
          {dado && dado.historico.map((h) => <p key={h}>{h}</p>)}
        </Historico>
      </Main>
      <Rodape />
    </>
  );
};

export default Conta;
