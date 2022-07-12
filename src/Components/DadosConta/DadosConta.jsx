import { Main, Formulario, Container_form } from "./DadosContaStyle";
import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Rodape from "../Rodape/Rodape";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import db from "../../Firebase/db.config";
const DadosConta = () => {
  const [nome, setNome] = useState("");
  const [contato, setContato] = useState("");
  const [cpf, setCpf] = useState("");
  const [idade, setIdade] = useState("");
  const [saldo, setSaldo] = useState("");
  const [erro, setErro] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await addDoc(collection(db, "user"), {
      nome,
      contato,
      cpf,
      saldo,
      idade,
      time: serverTimestamp(),
    });
    console.log(res.id);
  };
  return (
    <>
      <NavBar />
      <Main>
        <Container_form className="container_form">
          <Formulario>
            <legend>Complete seu Cadastro</legend>

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
              <label htmlFor="saldo">Saldo</label>
              <input
                type="number"
                name="saldo"
                placeholder="Saldo"
                value={saldo}
                onChange={(e) => setSaldo(e.target.value)}
                required
              />
            </div>

            {erro && <p>{erro}</p>}
            <button onClick={handleSubmit}>Criar Conta</button>
          </Formulario>
        </Container_form>
      </Main>
      <Rodape />
    </>
  );
};

export default DadosConta;
