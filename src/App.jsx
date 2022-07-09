// css global

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AreaCliente from "./pages/AreaCliente/AreaCliente";
import CriarConta from "./pages/CriarConta/CriarConta";
import Home from "./pages/Home/Home";
//componentes

// paginas

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/criarconta" element={<CriarConta />} />
          <Route path="/areacliente" element={<AreaCliente />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
