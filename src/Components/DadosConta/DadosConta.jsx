import { Main } from "./DadosContaStyle";
import { useFetchDados } from "../../Hooks/useFetchDados";
// import { useValueAutenticacao } from "../../Context/AutenticacaoContext";
const DadosConta = () => {
  // const { user } = useValueAutenticacao();
  const { documentos: dados } = useFetchDados("usuarios");

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
