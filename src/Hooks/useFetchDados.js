// import db from "../Firebase/db.config";
// import { useState, useEffect } from "react";
// import { collection, onSnapshot , query,getDocs,where} from "firebase/firestore";
// import { useValueAutenticacao } from "../Context/AutenticacaoContext";
// // import { useValueAutenticacao } from "../Context/AutenticacaoContext";

// export const dados = ()=>{
//   const [post, setPost] = useState([])

//     useEffect(()=> {
//       async function load(){
//       try {
//         let list = []
//         await onSnapshot(collection(db,"usuarios"), (snapshot)=> (snapshot.forEach((doc)=> {
//           list.push({id: doc.id, ...doc.data()})
//         })))
//         setPost(list)
//         console.log(list)
//       } catch (error) {
//         console.log(error.message)
//       }
      
//         // let list = []
//         // try {
//         //   const querySnapshot = await getDocs(collection(db, 'usuarios'))
//         //   querySnapshot.forEach((doc)=>{
//         //     list.push(doc)
//         //   })
//         //   console.log(list)
//         //   setPost(list)
//         // } catch (error) {
//         //   console.log(error.message)
//         // }
//     }
//     load()
//     },[])

//   return{ post}
// }