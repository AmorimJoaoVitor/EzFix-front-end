/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Botao from './Botao'

const ModalOrcamentoEnv = ({setModalEnv}) => {
    return (
        <>
            <div className="bg-gray-opacity w-full h-screen z-10 top-0 left-0 right-0 bottom-0 fixed">
                <div className="w-full h-screen flex justify-center items-center">
                    <div className="bg-white p-20 rounded-xl flex flex-col justify-center items-center">
                        <img src="./confirmed.png" alt="imgConfirmed" width="100px" />
                        <p className="mt-5 text-2xl font-semibold">Solicitação de orçamento enviada</p>
                        <p className="mb-16">Aguarde a resposta da assistência</p>
                        <Botao text="OK!" estilo={8} onClick={() => setModalEnv(false) } />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalOrcamentoEnv
