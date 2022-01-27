/* eslint-disable @next/next/no-img-element */
import React from 'react'

const CardEndereco = ({logradouro,numero,cidade,estado,cep,index}) => {
    return (
        <>
            <div className="w-full bg-blue-light p-5 rounded-2xl flex flex-col mb-4">
                <div className="w-full flex justify-between">
                    <span className="text-2xl font-medium">endereço {index}</span>
                    <img src="./Edit.png" alt="editar" width="30px" />
                </div>
                <div className="flex flex-col text-gray-dark">
                    <span>{logradouro}, {numero}</span>
                    <span>{cidade} - {estado}</span>
                    <span>{cep}</span>
                </div>
            </div>
        </>
    )
}

export default CardEndereco
