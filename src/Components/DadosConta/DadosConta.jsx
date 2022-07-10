import { Main } from "./DadosContaStyle";
import { useFetchDados } from "../../Hooks/useFetchDados";
const DadosConta = () => {
  const { dados } = useFetchDados("usuarios");
  return (
    <Main>
      <h1>dados</h1>
      {dados && (
        <>
          <span>{dados.nome}</span>
          <span>{dados.contato}</span>
          <span>{dados.idade}</span>
          <span>{dados.cpf}</span>
        </>
      )}
    </Main>
  );
};

export default DadosConta;
