/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { api } from '../api/api'
import CardComentario from './CardComentario'
import Carregamento from './Carregamento'

const InicioUltimasAvaliacoes = ({id}) => {

    const [carregado, setCarregado] = useState(false)
    const [comentarios,setComentarios] = useState([])

    useEffect(() => {
        api.get(`/comentario/${id}`).then(res => {
            setCarregado(true)
            setComentarios(res.data)
        },err => {

        })
    }, [])

    if (carregado) {
        return (
            <>
                <div className="flex flex-col ml-10 mt-5">

                    <span className="font-semibold">Ultimas Avaliações</span>

                    <div className="flex flex-col bg-blue-light w-auto max-w-2xl rounded-md shadow-lg mt-2 justify-around">

                        {comentarios.map((comentario,i) => 
                        <CardComentario key={i} nome={comentario.nome} img={comentario.cpf} nota={comentario.nota} comentario={comentario.comentario}/>
                        )}

                    </div>

                </div>
            </>
        )
    } else {
        return (<Carregamento />)
    }
}

export default InicioUltimasAvaliacoes