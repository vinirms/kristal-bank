import {
  Conteudo,
  Footer,
  MobileOne,
  MobileThree,
  MobileTwo,
} from "./RodapeStyle";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutube,
  FaAngleDown,
} from "react-icons/fa";
import { useState } from "react";
const Rodape = () => {
  const [active, setActive] = useState(false);
  const [activeTwo, setActiveTwo] = useState(false);
  const [activeThree, setActiveThree] = useState(false);
  const mobileOne = () => {
    setActive(!active);
  };
  const mobileTwo = () => {
    setActiveTwo(!activeTwo);
  };
  const mobileThree = () => {
    setActiveThree(!activeThree);
  };

  return (
    <Footer>
      <Conteudo>
        <div className="active">
          <h1 onClick={mobileOne}>
            Produtos e Serviços
            <span>
              <FaAngleDown />
            </span>
          </h1>
          <MobileOne active={active}>
            <ul>
              <a href="">Conta corrente</a>
              <a href="">Cartões de crédito</a>
              <a href="">Crédito e Financiamentos</a>
              <a href="">Investimentos</a>
            </ul>
          </MobileOne>
        </div>
        <div>
          <h1 onClick={mobileTwo}>
            Sobre o Benq
            <span>
              <FaAngleDown />
            </span>
          </h1>
          <MobileTwo activeTwo={activeTwo}>
            <ul>
              <a href="#">Sobre nós</a>
              <a href="#">Carreiras</a>
              <a href="#">Imprensa</a>
              <a href="#">sustentabilidade</a>
              <a href="#">Relações com Investidores</a>
            </ul>
          </MobileTwo>
        </div>
        <div>
          <h1 onClick={mobileThree}>
            Ajuda
            <span>
              <FaAngleDown />
            </span>
          </h1>
          <MobileThree activeThree={activeThree}>
            <ul>
              <a href="#">Central de Atendimento</a>
              <a href="#">SAC</a>
              <a href="#">Perguntas Frequentes</a>
              <a href="#">Encontre nossas agências</a>
              <a href="#">Telefones</a>
            </ul>
          </MobileThree>
        </div>
        <div>
          <h1>Redes Socias</h1>
          <span>
            <a href="">
              <FaWhatsapp />
            </a>
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaLinkedin />
            </a>
            <a href="">
              <FaTwitterSquare />
            </a>
            <a href="">
              <FaYoutube />
            </a>
          </span>
        </div>
      </Conteudo>
      <h2>Benq</h2>
      <p>&copy; Todos os direitos reservados - Brasil - 2022 </p>
    </Footer>
  );
};

export default Rodape;
