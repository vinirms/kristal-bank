import { useContext, createContext } from "react";

const ContextoAutenticacao = createContext()

export function AutenticacaoProvider({children, value}){
    return(
        <ContextoAutenticacao.Provider value={value}>
            {children}
        </ContextoAutenticacao.Provider>
    )
}

export function useValueAutenticacao(){
    return useContext(ContextoAutenticacao)
}