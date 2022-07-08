import React from "react";
import {
  Aplicativo,
  Container_pautas,
  Conta_digital,
  Pautas,
} from "./ConteudoStyle";

//imagens
import boleto from "../../Assets/Image/boleto-simbolo.png";
import card from "../../Assets/Image/card.png";
import financiamento from "../../Assets/Image/financ.png";
import investimento from "../../Assets/Image/invest.png";
import emprestimo from "../../Assets/Image/emprestimo.png";
import negociacao from "../../Assets/Image/negociacao.png";
import celular from "../../Assets/Image/celular.png";
import aplicativo from "../../Assets/Image/aplicativo.png";
import apple from "../../Assets/Image/app-store.png";
import play from "../../Assets/Image/play-store.png";

const Conteudo = () => {
  return (
    <Pautas>
      <div className="shadow_container">
        <Container_pautas>
          <h1>Serviços</h1>
          <h2>Diversos recursos na palma da mão sem precisar sair de casa</h2>

          <div className="servicos">
            <div>
              <img src={boleto} alt="" />
              <p>2ª via de boleto</p>
            </div>
            <div>
              <img src={negociacao} alt="" />
              <p>Negocie suas dividas</p>
            </div>
            <div>
              <img src={emprestimo} alt="" />
              <p>Emprestimo</p>
            </div>
            <div>
              <img src={financiamento} alt="" />
              <p>Financiamentos</p>
            </div>
            <div>
              <img src={card} alt="" />
              <p>Peça seu cartão</p>
            </div>
            <div>
              <img src={investimento} alt="" />
              <p>Investimentos</p>
            </div>
          </div>
        </Container_pautas>
      </div>
      <Conta_digital>
        <div className="account">
          <div className="account_info">
            <p>Conta Grátis e 100% digital</p>
            <p>
              Uma conta todinha pensada pra você comandar a sua vida financeira
              pelo celular.
            </p>
            <button>Saiba mais</button>
          </div>
          <img src={celular} alt="" />
          <div className="objeto"></div>
        </div>
      </Conta_digital>
      <Aplicativo>
        <div className="container_app">
          <img src={aplicativo} alt="" />
          <div className="app_info">
            <p>Baixe o App</p>
            <p>Todos os serviços do Benq nas suas mãos</p>
            <div className="app_lojas">
              <img src={apple} alt="" />
              <img src={play} alt="" />
            </div>
          </div>
        </div>
      </Aplicativo>
    </Pautas>
  );
};

export default Conteudo;
