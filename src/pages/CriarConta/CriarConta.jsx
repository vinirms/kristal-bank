import { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Rodape from "../../Components/Rodape/Rodape";
import { Container_form, Formulario, Main } from "./CriarContaStyle";
import { autenticacao } from "../../Hooks/useAutenticacao";
import { useAddDoc } from "../../Hooks/useAddDoc";
import { useValueAutenticacao } from "../../Context/AutenticacaoContext";
const CriarConta = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [contato, setContato] = useState("");
  const [cpf, setCpf] = useState("");
  const [idade, setIdade] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirmacao, setSenhaConfirmacao] = useState("");
  const [erro, setErro] = useState("");
  const [saldo, setSaldo] = useState("");
  const { criarConta, error: authError } = autenticacao();
  const { inserirDoc } = useAddDoc("usuarios");
  const handleSubmit = async (e) => {
    e.preventDefault();

    setErro(null);

    const usuario = {
      nome,
      email,
      contato,
      cpf,
      idade,
      senha,
      senhaConfirmacao,
      saldo,
    };
    if (senha !== senhaConfirmacao) {
      setErro("As senhas não coincidem.");
      return;
    }

    const res = await criarConta(usuario);
    const conta = {
      nome,
      email,
      contato,
      cpf,
      idade,
      saldo,
    };
    const resp = await inserirDoc(conta);
  };

  useEffect(() => {
    if (authError) {
      setErro(authError);
    }
  }, [authError]);

  return (
    <>
      <NavBar />
      <Main>
        <Container_form className="container_form">
          <Formulario>
            <legend>Abra sua Conta</legend>

            <div className="container_input">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                name="nome"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>
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
              <label htmlFor="contato">Contato</label>
              <input
                type="number"
                name="contato"
                placeholder="(00)00000-0000"
                value={contato}
                onChange={(e) => setContato(e.target.value)}
                required
              />
            </div>
            <div className="container_input">
              <label htmlFor="cpf">CPF</label>
              <input
                type="number"
                name="cpf"
                placeholder="000.000.000-00"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                required
              />
            </div>
            <div className="container_input">
              <label htmlFor="idade">Data de Nascimento</label>
              <input
                type="number"
                name="idade"
                placeholder="Data de Nascimento"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
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
