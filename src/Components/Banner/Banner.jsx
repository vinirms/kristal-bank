import React from "react";
import { Container, Section } from "./BannerStyle";
import img from "../../Assets/Image/img.png";
import master from "../../Assets/Image/mastercard.png";

const Banner = () => {
  return (
    <Section>
      <Container>
        <div className="square_info">
          <p>Benq</p>
          <p>O banco para toda família</p>
        </div>
        <div className="square">
          <img src={img} alt="" />
        </div>
        <div className="cartao">
          <p>O banco que facilita a sua vida</p>
          <p>Cartao de crédito Internacinal e Anuidade zero</p>
          <img src={master} alt="" />
        </div>
        <button>Abrir Conta</button>
      </Container>
    </Section>
  );
};

export default Banner;
