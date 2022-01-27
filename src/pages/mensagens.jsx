import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import CardMensagem from '../components/tecnico/CardMensagem'
import MensagemMain from '../components/tecnico/MensagemMain'
import Navbar from '../components/Navbar'
import HeaderPage from '../components/HeaderPage'

const mensagens = () => {
    return (
        <>
            <Navbar fixed />
            
        <HeaderPage tituloPagina="Mensagens"/>
            <div className="w-full flex justify-center">
                <div className="bg-blue-light mt-5 w-4/5 min-h-screen-25 flex justify-center rounded-2xl filter shadow-inner drop-shadow-2xl  ">
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
        </>
    )
}

export default mensagens
