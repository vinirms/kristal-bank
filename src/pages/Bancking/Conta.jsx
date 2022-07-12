import NavBar from "../../Components/NavBar/NavBar";
import Rodape from "../../Components/Rodape/Rodape";
import { Main } from "./ContaStyle";
// import { dados } from "../../Hooks/useFetchDados";

const Conta = () => {
  // const { post } = dados();
  // const auth = getAuth();
  // const user = auth.currentUser;
  // const [email, setEmail] = useState("");
  // const [contato, setContato] = useState("");
  // const [saldo, setSaldo] = useState("");
  // const [uid, setUid] = useState("");
  // useEffect(() => {
  //   if (user !== null) {
  //     setEmail(user.email);
  //     setContato(user.contato);
  //     setSaldo(user.saldo);
  //     setUid(user.uid);
  //   }
  // }, []);

  return (
    <>
      <NavBar />
      <Main>
        <h1>conta</h1>
      </Main>
      <Rodape />
    </>
  );
};

export default Conta;
