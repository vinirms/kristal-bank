import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// paginas
import AreaCliente from "./pages/AreaCliente/AreaCliente";
import CriarConta from "./pages/CriarConta/CriarConta";
import Home from "./pages/Home/Home";
//hooks
import { useState, useEffect } from "react";
import { autenticacao } from "./Hooks/useAutenticacao";
import { onAuthStateChanged } from "firebase/auth";
import { AutenticacaoProvider } from "./Context/AutenticacaoContext";
import Conta from "./pages/Bancking/Conta";
function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = autenticacao();
  const carregando = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (carregando) {
    return <p>Carregando...</p>;
  }
  return (
    <>
      <AutenticacaoProvider value={{ user }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/criarconta"
              element={user ? <Navigate to="/conta" /> : <CriarConta />}
            />

            <Route
              path="/areacliente"
              element={user ? <Navigate to="/conta" /> : <AreaCliente />}
            />
            <Route
              path="/conta"
              element={user ? <Conta /> : <Navigate to="/criarconta" />}
            />
          </Routes>
        </BrowserRouter>
      </AutenticacaoProvider>
    </>
  );
}

export default App;
