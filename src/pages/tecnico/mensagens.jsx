import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import SidebarTecnico from '../../components/SidebarTecnico'
import CardMensagem from '../../components/tecnico/CardMensagem'
import MensagemMain from '../../components/tecnico/MensagemMain'

const mensagens = () => {
    return (
        <>
            <div className="flex h-screen">
                <SidebarTecnico />
                <div className="ml-10 w-full h-screen-15">
                    <h1 className="text-blue-dark_light text-4xl font-bold mt-10">Mensagens:</h1>
                    <div className="bg-blue-light mt-5 w-11/12 h-full flex rounded-2xl filter shadow-inner drop-shadow-2xl  ">
                        {/* Barra de contatos latera INICIO */}
                        <div className="h-full w-1/3 border-r filter border-opacity-30 border-black ">
                            <div className="flex justify-start my-5 items-center bg-white h-11 w-11/12 px-5  mx-auto rounded-2xl">
                                <FontAwesomeIcon icon={faSearch} className="text-gray-dark" />
                                <input type="text" placeholder="Persquisar conversa" className="w-full outline-none ml-5" />
                            </div>
                            <CardMensagem />
                        </div>
                        {/* Barra de contatos latera FIM */}
                        <MensagemMain />
                    </div>
                </div>
            </div>
        </>
    )
}

export default mensagens
