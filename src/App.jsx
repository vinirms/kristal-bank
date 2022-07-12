import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// paginas
import AreaCliente from "./pages/AreaCliente/AreaCliente";
import CriarConta from "./pages/CriarConta/CriarConta";
import Conta from "./pages/Bancking/Conta";
import Home from "./pages/Home/Home";
import DadosConta from "./Components/DadosConta/DadosConta";
//hooks
import { useState, useEffect } from "react";
import { auth } from "./Firebase/db.config";
import { onAuthStateChanged } from "firebase/auth";
import { AutenticacaoProvider } from "./Context/AutenticacaoContext";
function App() {
  const [user, setUser] = useState(undefined);
  const carregando = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (carregando) {
    return <h1>Carregando...</h1>;
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
            <Route
              path="/dados"
              element={user ? <DadosConta /> : <Navigate to="/criarconta" />}
            />
          </Routes>
        </BrowserRouter>
      </AutenticacaoProvider>
    </>
  );
}

export default App;
