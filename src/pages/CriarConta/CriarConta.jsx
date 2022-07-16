import { useEffect, useState } from "react";
import { Container_form, Formulario, Main } from "./CriarContaStyle";
////////////COMPONENTES//////////////////////////////
import NavBar from "../../Components/NavBar/NavBar";
import Rodape from "../../Components/Rodape/Rodape";
//////////CUSTOM HOOKS//////////////////////////////
import { CriarUser } from "../../Hooks/useCriarUser";

const CriarConta = () => {
  /////////// DADOS FORM ////////////////
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirmacao, setSenhaConfirmacao] = useState("");
  const [erro, setErro] = useState("");
  /////////// DADOS HOOK //////////////////
  const { User, error } = CriarUser();
  const handleSubmit = async (e) => {
    e.preventDefault();

    setErro(null);

    const user = {
      email,
      senha,
      senhaConfirmacao,
    };
    if (senha !== senhaConfirmacao) {
      setErro("As senhas não coincidem.");
      return;
    }
    const resposta = await User(user);
  };
  useEffect(() => {
    if (error) {
      setErro(error);
      console.log(error);
    }
  }, [error]);
  return (
    <>
      <NavBar />
      <Main>
        <Container_form className="container_form">
          <Formulario>
            <legend>Abra sua Conta</legend>

            <div className="container_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="email@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="container_input">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                name="senha"
                placeholder="Digite uma senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>
            <div className="container_input">
              <label htmlFor="senhaConfirmacao">Confirme a senha</label>
              <input
                type="password"
                name="senhaconfirmacao"
                placeholder="Confirme senha"
                value={senhaConfirmacao}
                onChange={(e) => setSenhaConfirmacao(e.target.value)}
                required
              />
            </div>

            {erro && <p>{erro}</p>}
            <button onClick={handleSubmit}>Criar Conta</button>
          </Formulario>
        </Container_form>
        <div className="forma"></div>
        <div className="bg_forma"></div>
      </Main>
      <Rodape />
    </>
  );
};

export default CriarConta;
