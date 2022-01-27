/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Botao from './Botao'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router';

const DetalhesAssistencia = ({ id, avaliacao, estado, cidade }) => {

    const router = useRouter();

    return (
        <>
            <div className="flex justify-center w-full mt-20">
                <div className="w-4/5 flex justify-around">
                    <div className="flex flex-col items-center">
                        <img src={`http://localhost:8080/assistencia/perfil/${id}`} alt="logo" width="150px" className="rounded-full" />
                        <span>{cidade} - {estado}</span>
                    </div>

                    <div className="flex justify-center items-center w-2/4">
                        <div className="bg-blue-light w-full flex justify-around items-center p-5 text-xl font-medium rounded-2xl">
                            <div className="flex flex-col items-center">
                                <span>8</span>
                                <span>Reparos feitos</span>
                            </div>
                            <div className="mr-5 ml-5 h-20 border-l-2"></div>
                            <div className="flex flex-col items-center">
                                <span>{avaliacao}<FontAwesomeIcon icon={faStar} className="text-amarelo ml-2" /></span>
                                <span>Avaliações</span>
                            </div>
                            <div className="mr-5 ml-5 h-20 border-l-2"></div>
                            <div className="flex flex-col items-center">
                                <span>1,2KM</span>
                                <span>Distância</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <Botao estilo={9} text="Solicitar Orçamento" onClick={() => router.push(`/relatorioproblema?${id}`)} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetalhesAssistencia
