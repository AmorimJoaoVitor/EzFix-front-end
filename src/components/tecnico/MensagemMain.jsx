import { faChevronCircleRight, faPaperclip, faPaperPlane, faSmile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState, useEffect} from 'react'
import BalaoMensagem from './BalaoMensagem'

const MensagemMain = () => {

    const [mensagem, setMensagem] = useState("Xablau porra");
    const now = new Date;

    return (
        <>
            <div className="flex flex-col w-full h-full">
                {/* Header da mensagem INICIO */}
                <div className="flex bg-blue-light justify-between items-center my-4 ">
                    <div className="flex items-center">
                        <img src="../PerfilUsuario.jpeg" width="50px" className="rounded-full mr-5 ml-5" />
                        <div>
                            <p className="font-semibold text-lg">Ítalo de Souza</p>
                            <p className="text-gray-dark text-sm">Online</p>
                        </div>
                    </div>
                    <div className="flex items-center mr-5">
                        <span className="font font-semibold mr-5 text-xl">#NúmeroPedido</span>
                        <FontAwesomeIcon icon={faChevronCircleRight} size="2x" className="cursor-pointer"/>
                    </div>
                </div>
                {/* Header da mensagem FIM */}

                <div className=" bg-gray-light h-full overflow-y-auto pt-5 w-full flex flex-col">
                    <BalaoMensagem mensagem={mensagem} hora={`${now.getHours()}:${now.getMinutes()}`} />
                    <BalaoMensagem mensagem={mensagem} hora={`${now.getHours()}:${now.getMinutes()}`} isMine={true} />
                </div>

                <div className="flex justify-start p-4 bg-gray h-24 w-full rounded-br-2xl ">
                    <div className="flex items-center w-full">
                        <FontAwesomeIcon icon={faPaperclip} size="lg" className="cursor-pointer hover:text-blue" />
                        <input type="text" placeholder="Digite sua mensagem..." className="mx-4 w-full p-2 outline-none rounded-2xl" />
                        <FontAwesomeIcon icon={faPaperPlane} size="2x" className="cursor-pointer hover:text-blue" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default MensagemMain
