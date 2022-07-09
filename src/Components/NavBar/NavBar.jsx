import { Btn_toggle, Header, Nav, Nav_Logo, Nav_menu } from "./NavBarStyle";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const toggler = () => {
    setOpen(!open);
  };
  return (
    <Header>
      <Nav>
        <Nav_Logo>
          <Link to={"/"}>
            K <span>ristal</span>
          </Link>
        </Nav_Logo>
        <Nav_menu open={open}>
          <li>
            <a href="#">Para Você</a>
          </li>
          <li>
            <a href="#">Para Empresas</a>
          </li>
          <li>
            <a href="#">Ajuda</a>
          </li>
          <button>
            <Link to={"/areacliente"}>Area do Cliente</Link>
          </button>
        </Nav_menu>
        <Btn_toggle onClick={toggler}>
          <div className="btn_trace"></div>
          <div className="btn_trace"></div>
          <div className="btn_trace"></div>
        </Btn_toggle>
      </Nav>
    </Header>
  );
};

export default NavBar;
