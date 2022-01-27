import React, { useState } from 'react'

const BoxProdOrcamento = ({ tipo, marca, modelo, problema, descricao, id, somaTotal }) => {

    const [valor,setValor] = useState(0);

    return (
        <div className="bg-blue-light_dark rounded-2xl p-4 flex w-full justify-between my-3 shadow-lg">
            <div className="w-45">

                <div className="flex mb-1">
                    <b className="mr-2">{tipo}</b>
                    <span className="ml-2">{marca} {modelo}</span>
                </div>
                <p className="mb-1 text-gray-dark">{problema}</p>
                <p>{descricao}</p>
            </div>
            <div className="flex items-center flex-col justify-center">
                <b className="text-blue-dark_light mb-2">Valor do reparo estimado</b>
                <div className="flex items-center mt-2">
                    <input value={valor} onChange={e => setValor(e.target.value)} placeholder="Ex: 750,54" type="number" className="p-3 rounded-xl mr-1" />
                    <button onClick={() => { somaTotal(id,valor)}} className="p-3 rounded-xl bg-blue-dark text-white ml-1">Ok</button>
                </div>
            </div>
        </div>
    )
}

export default BoxProdOrcamento