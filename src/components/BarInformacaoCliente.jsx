/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Bola from './Bola'


const BarInformacaoCliente = ({ nome, data, id,status }) => {

  const [etapa, setEtapa] = useState("")
  const [estilo, setEstilo] = useState("")

  useEffect(() => {
    if (status == "aguardando resposta tecnico") {
      setEtapa("novo")
    }else if(status == "concluido"){
      setEtapa("concluido")
      setEstilo("bg-green")
    }else {
      setEtapa("Em andamento")
      setEstilo("bg-amarelo-andamento")
    }
  }, [])
  return (
    <>
      <div className="flex items-center justify-around bg-blue-light_dark rounded-t-2xl mt-7 p-2">

        <p className="font-bold">{nome}</p>

        <div className="flex items-center justify-center">

        <div className={`h-6 w-6 rounded-full ${estilo} mr-4`}></div>

          <span>{etapa}</span>
        </div>
        <div className="w-52 flex items-center justify-around">
          <span>{data}</span>
          <span className="font-bold">#{id}</span>

        </div>
      </div>

    </>
  )
}

export default BarInformacaoCliente