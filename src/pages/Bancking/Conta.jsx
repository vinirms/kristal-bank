import NavBar from "../../Components/NavBar/NavBar";
import Rodape from "../../Components/Rodape/Rodape";
import { Main } from "./ContaStyle";

import { useFetchDado } from "../../Hooks/useFetchDado";
const Conta = () => {
  const { dado } = useFetchDado();
  return (
    <>
      <NavBar />
      <Main>
        <h1>{dado.nome}</h1>
        <h1>{dado.cpf}</h1>
        <h1>{dado.idade}</h1>
        <h1>{dado.contato}</h1>
      </Main>
      <Rodape />
    </>
  );
};

export default Conta;
