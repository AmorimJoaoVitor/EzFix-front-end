import React from 'react'
import CardServico from './CardServico'

const ServicosOferecidos = () => {
    return (
        <>
            <div className="flex justify-center w-full mt-10">
                <div className="w-4/5 flex flex-col items-center justify-around text-3xl">
                    <span>Serviços Oferecidos</span>
                    <div className="border-b-4 border-blue-dark w-full mt-2"></div>
                    <div className="w-full grid grid-cols-1 mt-10 mb-10 sm:flex sm:justify-around ">
                        <CardServico tipoServico={0} textoServico="Smartphone"/>
                        <CardServico tipoServico={1} textoServico="Tablet"/>
                        <CardServico tipoServico={2} textoServico="Notebook"/>
                        <CardServico tipoServico={3} textoServico="Desktop"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicosOferecidos
