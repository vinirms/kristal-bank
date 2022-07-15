import Banner from "../../Components/Banner/Banner";
import Conteudo from "../../Components/Conteudo/Conteudo";
import NavBar from "../../Components/NavBar/NavBar";
import Rodape from "../../Components/Rodape/Rodape";

const Home = () => {
  return (
    <>
      <NavBar />
      <Banner />

      <Conteudo />
      <Rodape />
    </>
  );
};

export default Home;
