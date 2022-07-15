import { Btn_toggle, Header, Nav, Nav_Logo, Nav_menu } from "./NavBarStyle";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useValueAutenticacao } from "../../Context/AutenticacaoContext";
import { LoginOut } from "../../Hooks/useLoginLogout";
import { useFetchDado } from "../../Hooks/useFetchDado";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const toggler = () => {
    setOpen(!open);
  };
  const { user } = useValueAutenticacao();
  const { Logout } = LoginOut();
  const { dado } = useFetchDado();

  return (
    <Header>
      <Nav>
        <Link to={"/"}>
          <Nav_Logo>
            K <span>ristal</span>
          </Nav_Logo>
        </Link>

        <Nav_menu open={open}>
          {!user && (
            <>
              {" "}
              <li>
                <a href="#">Para Você</a>
              </li>
              <li>
                <a href="#">Para Empresas</a>
              </li>
              <li>
                <a href="#">Ajuda</a>
              </li>
              <Link to={"/areacliente"}>
                <button>Area do Cliente</button>
              </Link>
            </>
          )}
          {user && (
            <>
              <Link to={"/"}>Home</Link>
              <Link to={"/conta"}>Conta Corrente</Link>
              <Link to={""}>
                <button onClick={Logout}>Sair</button>
              </Link>
              <h1>{dado.nome}</h1>
            </>
          )}
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
