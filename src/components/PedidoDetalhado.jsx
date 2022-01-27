/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import Carregamento from './Carregamento';
import Image from 'next/image'


const PedidoDetalhado = ({ id, itens, nomeAssistencia, status, data, idAssistencia }) => {

    const [carregado, setCarregado] = useState(false)


    useEffect(() => {
        if (itens != undefined) {
            setCarregado(true)
        }
    }, [itens])

    if (carregado) {
        return (
            <>
                <div className="w-full mb-10 flex justify-around">
                    <div className="sm:w-4/5 flex flex-col mt-8">
                        <div className="w-full bg-gray-light rounded-2xl p-10 font-semibold pb-96">
                            <div className="flex justify-between w-full pb-9 ">
                                <div className="flex items-center w-6/12">
                                    <div className="flex flex-col mr-8">
                                        <span>Código do Pedido:</span>
                                        <span>#{id}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span>Pedido Solicitado em:</span>
                                        <span>{data}</span>
                                    </div>
                                </div>
                                <img src={`http://localhost:8080/assistencia/perfil/${idAssistencia}`} alt={nomeAssistencia} className="rounded-full w-32 h-32" />
                            </div>

                            <div className="pt-9 pb-9">

                                <ul>
                                    {itens.map((item, i) =>
                                    (<li key={i}>
                                        <hr className="opacity-25" />
                                        <div className="my-10">
                                            {item.produto.tipo} {item.produto.marca} {item.produto.modelo} - <b>{item.problema}</b>
                                            <p className="text-gray-dark">{item.descricao}</p>
                                        </div>
                                    </li>)
                                    )}
                                </ul>
                                <hr className="opacity-25" />
                            </div>
                            <div className="flex">
                                <div className="w-7 h-7 rounded-full bg-amarelo mr-3"></div>
                                <p> {status}</p>
                            </div>
                        </div>

                    </div>

                </div>
            </>
        )
    } else {
        return (
            <>
                <Carregamento />
            </>
        )
    }
}

export default PedidoDetalhado
