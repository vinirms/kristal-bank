import { useState, useEffect } from "react"
export const useDate = () => {
    let [date, setDate]= useState( '')
    useEffect(()=>{
        const getData =()=>{
            let horario = new Date()
            
            let h = horario.toLocaleString()
            setDate(h)
            
        }
    
        getData()
    },[])


  return { date}
}

