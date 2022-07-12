import { Main, Container_form, Formulario } from "./LoginStyle";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LoginOut } from "../../Hooks/useLoginLogout";
// import { auth } from "../../Firebase/db.config";
// import { signInWithEmailAndPassword } from "firebase/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  //////////LOGIN///////////////////
  const { Login, error } = LoginOut();

  const handleLogin = async (e) => {
    e.preventDefault();

    const userLogin = {
      email,
      senha,
    };

    const resp = await Login(userLogin);
    console.log(resp);
  };
  useEffect(() => {
    if (error) {
      setErro(error);
    }
  }, []);

  return (
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
          <Link to={""}>Esqueceu a senha ?</Link>
          {erro && <p>{erro}</p>}
          <button onClick={handleLogin}>Entrar</button>
        </Formulario>
      </Container_form>
      <div className="forma"></div>
      <div className="bg_forma"></div>
    </Main>
  );
};

export default Login;
