import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const CardMensagem = () => {
    return (
        <>
            <div className="flex items-center w-full filter border-t-2 border-b-2 border-opacity-20 hover:bg-blue-light_dark border-black py-2">
                <img src="../PerfilUsuario.jpeg" width="60px" className="rounded-full mr-5 ml-5" />
                <div>
                    <p className="font-semibold text-lg">Ítalo de Souza</p>
                    <FontAwesomeIcon icon={faCheck} className="mr-2 text-gray-dark"/>
                    <span className="text-gray-dark text-sm">Última mensagem recebida ou enviada</span>
                </div>
            </div>
        </>
    )
}

export default CardMensagem
