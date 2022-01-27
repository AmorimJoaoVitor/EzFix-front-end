/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { faBullhorn, faCommentDots, faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import Botao from './Botao'
import { useRouter } from 'next/router';
import Carregamento from './Carregamento';

const CardPedido = ({ id, assistencia, status, itens,idPedido }) => {

    const router = useRouter();
    const [confirmar, setConfirmar] = useState(false)
    const [carregado, setCarregado] = useState(false)


    useEffect(() => {
        if (itens.length > 0) {
            setCarregado(true)
        }
        if (status == "aguardando sua resposta") {
            setConfirmar(true)
        }

    }, [itens])

    function teste() {
        if (itens.length < 2) {
            return (<div>
                <p>{itens[0].produto.marca} {itens[0].produto.modelo}</p>
            </div>)
        } else if (itens.length == 2) {
            return (<div>
                <p>{itens[0].produto.marca} {itens[0].produto.modelo}</p>
                <p>{itens[1].produto.marca} {itens[1].produto.modelo}</p>
            </div>)
        } else {
            return (<div>
                <p>{itens[0].produto.marca} {itens[0].produto.modelo}</p>
                <p>{itens[1].produto.marca} {itens[1].produto.modelo}</p>
                <p>...</p>
            </div>)
        }

    }

    if (carregado) {
        return (
            <>
                <div className="w-full h-52 flex bg-blue-light rounded-t-2xl items-center p-14">
                    <img src={`http://localhost:8080/assistencia/perfil/${id}`} alt="ThTecnologia" className="rounded-full w-32 h-32" />
                    <div className="flex flex-col justify-center w-2/6 ml-10">
                        <p className="text-4xl font-bold">{assistencia}</p>
                        <div className="flex mt-1">
                            <div className="w-7 h-7 rounded-full bg-amarelo mr-3"></div>
                            <p>{status}</p>
                        </div>
                    </div>
                    <div className="h-32 border-l-2 ali"></div>
                    <div className=" pl-4 flex justify-between items-center w-3/5 list-none">
                        <div className="no-underline">
                            {teste()}
                        </div>
                        {confirmar && <button className="rounded-2xl p-3 bg-blue-dark w-40 hover:text-black hover:bg-blue duration-75 text-white text-xl font-bold" onClick={() => { router.push(`/detalhespedido?${idPedido}`) }}>Confirmar</button>}                        </div>


                </div>
                <div className="w-full h-24 bg-blue-dark rounded-b-2xl flex justify-between items-center px-8 mb-16">
                    <Botao onClick={() => { router.push(`/detalhespedido?${idPedido}`) }} estilo={1} text="Detalhes" icone={faSearchPlus} />
                    <div className="flex justify-between w-2/6">
                        <Botao estilo={1} text="Conversa" icone={faCommentDots} />
                        <Botao estilo={1} text="Ajuda" icone={faBullhorn} />
                    </div>
                </div>
            </>
        )
    } else {
        return (<Carregamento/>)
    }
}

export default CardPedido
