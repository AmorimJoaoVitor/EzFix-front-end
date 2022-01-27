/* eslint-disable @next/next/no-img-element */
import React from 'react'

const CardComentario = ({img,nome,comentario,nota}) => {
    return (
        <div className="flex flex-row items-center mt-4 mb-4 ml-5">
            <img src={`http://localhost:8080/solicitante/perfil/${img}`} alt="" className="rounded-full w-16 h-16" />

            <div className="h-8 border-l-2 mr-4 ml-4 opacity-30" />

            <div className="flex flex-col ml-3 mr-3">

                <div className="flex flex-row items-center">
                    <span className="font-bold">{nome}</span>
                    <img src="/star.png" alt="" className="w-4 h-4 ml-5 mr-1" />
                    <span className="font-semibold">{nota}</span>
                </div>

                <div className="w-max break-all mt-2 mb-1 p-2 rounded-tl-none bg-white rounded-2xl shadow-lg">
                    <span>&quot;{comentario}&quot;</span>
                </div>


            </div>

        </div>
    )
}

export default CardComentario
