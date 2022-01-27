/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { api } from '../api/api'
import Carregamento from './Carregamento'

const InicioAcompanhamento = ({id}) => {

    const [carregado, setCarregado] = useState(false)
    const [orcamentos,setOrcamentos] = useState()
    const [comentarios,setComentarios] = useState()

    useEffect(() => {
        
        api.get(`/orcamentos/count/${id}`).then(res => {
            setCarregado(true)
            setOrcamentos(res.data[0])
            setComentarios(res.data[1])
        },err => {

        })

    }, [])


    if (carregado) {
        return (

            <>
                <div className="w-full flex flex-col ml-10 mt-10">
                    <h1 className="text-blue-dark_light text-4xl font-bold mb-10">Início:</h1>

                    <span><span className="font-semibold">Acompanhamento</span> (Hoje)</span>

                    <div className="flex flex-row bg-blue-light w-9/12 rounded-md shadow-lg mt-2 justify-around items-center">

                        <pedidos className="flex flex-col items-center mt-4 mb-4 ml-3 mr-7  m-auto">
                            <span className="font-bold">{orcamentos}</span>
                            <span>Pedidos Criados Hoje</span>
                        </pedidos>

                        <div className="h-10 border-l-2 opacity-30" />

                        <avaliacao className="flex flex-col items-center mt-4 mb-4 ml-2 mr-2 m-auto">
                            <span className="font-bold">{comentarios}</span>
                            <span>Avaliaçoes Feitas Hoje</span>
                        </avaliacao>

                    </div>

                    <hr className="w-2/3 box mt-5 mb-2" />

                </div>
            </>
        )
    } else {
        return (<Carregamento />)
    }
}

export default InicioAcompanhamento