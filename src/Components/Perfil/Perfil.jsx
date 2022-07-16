import { FaUserCircle } from "react-icons/fa";
import { Dados, Div, Info_mid, Info_top, Info_bottom } from "./PerfilStyle";
import { useFetchDado } from "../../Hooks/useFetchDado";
import { IconContext } from "react-icons/lib";

const Perfil = () => {
  const { dado } = useFetchDado();
  return (
    <Div>
      {!dado && <h1>Preencha os dados ao lado...</h1>}
      {dado && (
        <>
          <IconContext.Provider value={{ className: "icon" }}>
            <FaUserCircle value={{ className: "icon" }} />
          </IconContext.Provider>

          <Dados>
            <Info_top>
              <div>
                <h3>Nome</h3>
                <input type="text" placeholder={dado.nome} disabled />
              </div>
              <div>
                <h3>CPF</h3>
                <input type="text" placeholder={dado.cpf} disabled />
              </div>
            </Info_top>
            <Info_mid>
              <div>
                <h3>Contato</h3>
                <input type="text" placeholder={dado.contato} disabled />
              </div>
              <div>
                <h3>Data de Nascimento</h3>
                <input type="text" placeholder={dado.idade} disabled />
              </div>
            </Info_mid>
            <Info_bottom>
              <div>
                <h3>Email</h3>
                <input type="text" placeholder={dado.email} disabled />
              </div>
              <div>
                <h3>Saldo</h3>
                <input type="text" placeholder={dado.saldo} disabled />
              </div>
            </Info_bottom>
          </Dados>
        </>
      )}
    </Div>
  );
};

export default Perfil;
