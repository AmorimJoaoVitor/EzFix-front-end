/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Botao from './Botao'
import { useRouter } from 'next/router';
import { api } from '../api/api';

const PedidoDetalhadoConfirmar = ({ nomeAssistencia, setEstagio, id, itens, status, data, dataPrivista, valorTotal, idAssistencia }) => {

    const [confirmacao, setConfirmacao] = useState(false);
    const router = useRouter();
    const [cancelado, setCancelado] = useState(false);

    return (
        <>
            <div className="w-full mb-10 flex justify-around">
                <div className="sm:w-4/5 flex flex-col mt-8">
                    <div className="w-full bg-gray-light rounded-2xl p-10 font-semibold">
                        <div className="flex justify-between w-full pb-9 ">
                            <div className="flex items-center w-full">
                                <div className="flex flex-col mr-8">
                                    <span>Código do Pedido:</span>
                                    <span>#{id}</span>
                                </div>
                                <div className="flex flex-col mr-8">
                                    <span>Pedido Solicitado em:</span>
                                    <span>{data}</span>
                                </div>
                                <div className="flex flex-col ">
                                    <span>Entrega Pevista:</span>
                                    <span>{dataPrivista}</span>
                                </div>
                            </div>

                            <img src={`http://localhost:8080/assistencia/perfil/${idAssistencia}`} alt={nomeAssistencia} className="rounded-full w-32 h-32" />

                        </div>
                        <div className="py-4">
                            <ul>
                                {itens.map((item, i) =>
                                (<li key={i}>
                                    <hr className="opacity-25" />
                                    <div className="my-10">
                                        {item.produto.tipo} {item.produto.marca} {item.produto.modelo} - <b>{item.problema}</b>
                                        <p className="text-gray-dark">{item.descricao}</p>
                                    </div>
                                    {i == (itens.length - 1) ? <hr className="opacity-25" /> : <div />}
                                </li>)
                                )}
                            </ul>
                        </div>
                        <div className="pt-4 pb-8 text-gray-dark">
                            {itens.map((item, i) =>
                            (<div key={i} className=" flex justify-between w-full">
                                <span>{item.produto.marca} {item.produto.modelo}</span>
                                <span>R${item.valorServico}</span>
                            </div>))}
                        </div>
                        <hr className="opacity-25" />
                        <div className="pt-6 pb-6 text-gray-dark">
                            <div className=" flex justify-between w-full">
                                <span>Frete</span>
                                <span className="text-gray-dark">A definir</span>
                            </div>
                        </div>
                        <hr className="opacity-25" />
                        <div >
                            <div className=" flex justify-between w-full text-2xl pt-6">
                                <span>Total</span>
                                <span>R${valorTotal}</span>
                            </div>
                            <div className="flex w-full justify-between mt-5">
                                <div className="flex">
                                    <div className="w-7 h-7 rounded-full bg-amarelo mr-3"></div>
                                    <p> {status}</p>
                                </div>

                                <div className="flex w-1/5 justify-between">
                                    <Botao estilo={4} text="Recusar" onClick={() => setConfirmacao(true)} />
                                    <Botao estilo={8} text="Aceitar" onClick={() => { setEstagio(3) }} />
                                </div>
                            </div>


                        </div>

                    </div>

                </div>

                {confirmacao &&
                    <div className="bg-gray-opacity w-full h-screen z-10 top-0 left-0 right-0 bottom-0 fixed">
                        <div className="w-full h-screen flex justify-center items-center">
                            <div className="bg-white p-20 rounded-xl flex flex-col justify-center items-center">
                                <img src={cancelado ? "./confirmed.png" : "./warning.png"} alt="imgConfirmed" width={100} />
                                {cancelado ?
                                    <p className="mt-5 mb-16 text-2xl font-semibold">Oferta recusada.</p>
                                    : <p className="mt-5 mb-16 text-2xl font-semibold">Tem certeza que deseja recusar a oferta?</p>
                                }
                                <div className="w-full flex justify-around">
                                    {cancelado ?
                                        <>
                                            <Botao estilo={8} text="OK!" onClick={() => router.push("./myorders")} />
                                        </>
                                        : <>
                                            <Botao estilo={4} text="Cancelar" onClick={() => setConfirmacao(false)} />
                                            <Botao estilo={8} text="Confirmar" onClick={() => api.delete(`/orcamentos/${id}`).then(() => {
                                                setCancelado(true)
                                            }, err => { })} />
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                }


            </div>
        </>
    )
}

export default PedidoDetalhadoConfirmar
