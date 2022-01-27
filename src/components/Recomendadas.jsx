import React from 'react'
import CardAssistencia from './CardAssistencia'

const Recomendadas = () => {
    return (
        <div className="pt-24 flex justify-around">
            <div className="w-4/5 flex flex-col items-center mt-16">
                <div className="w-4/6 mb-4">
                    <p className="text-center lg:text-right text-base sm:text-xl flex justify-around font-bold">Selecionamos as melhores assistências para você</p>
                    <hr className="text-black text-opacity-25 my-2" />
                </div>
                <div className="w-full  grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  grid-rows-1 gap-8">
                    <CardAssistencia nome="wcl phones" avaliacao="4,5" endereco="Grajau - são paulo" categorias="Celular" />
                    <CardAssistencia nome="wcl phones" avaliacao="4,5" endereco="Grajau - são paulo" categorias="Celular" />
                    <CardAssistencia nome="wcl phones" avaliacao="4,5" endereco="Grajau - são paulo" categorias="Celular" />
                    <CardAssistencia nome="wcl phones" avaliacao="4,5" endereco="Grajau - são paulo" categorias="Celular" />
                    <CardAssistencia nome="wcl phones" avaliacao="4,5" endereco="Grajau - são paulo" categorias="Celular" />
                    <CardAssistencia nome="wcl phones" avaliacao="4,5" endereco="Grajau - são paulo" categorias="Celular" />
                </div>
            </div>
        </div>
    )
}

export default Recomendadas
