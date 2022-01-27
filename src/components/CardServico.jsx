/* eslint-disable @next/next/no-img-element */
import React from 'react'

const CardServico = ({ tipoServico, textoServico }) => {

    const servico = [
        "./ImgServicos/smartphone.png",
        "./ImgServicos/tablet.png",
        "./ImgServicos/notebook.png",
        "./ImgServicos/desktop.png"
    ]

    return (
        <div className="flex sm:flex-col sm:justify-center sm:items-center bg-blue rounded-2xl mb-4 p-3 sm:w-1/5 h-20 sm:h-40">
            <div className="flex justify-center w-2/12 sm:w-full sm:h-24">
                <img src={servico[tipoServico]} alt={textoServico}/>
            </div>
            <p className=" ml-2 sm:ml-0 text-xl sm:text-xl self-center">{textoServico}</p>
        </div>
    )
}

export default CardServico
//flex flex-col justify-center items-center    mt-5 ml-4 