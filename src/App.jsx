// css global
import GlobalStyle from "./GlobalStyles";

//componentes
import NavBar from "./Components/NavBar/NavBar";
import Rodape from "./Components/Rodape/Rodape";
// paginas
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Home />
      <Rodape />
    </>
  );
}

export default App;
