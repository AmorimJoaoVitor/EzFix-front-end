import React from 'react'

const BalaoMensagem = ({ isMine, mensagem, hora }) => {
    if (isMine) {
        return (
            <>
                <div className="max-w-lg mt-2 mr-5 self-end">
                    <div className="flex flex-col bg-gray min-w-max px-5 py-2 rounded-2xl rounded-tr-none">
                        <span>{mensagem}</span>
                        <span className="text-xs text-gray-dark self-end">{hora}</span>

                    </div>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="max-w-lg mt-2 ml-5">
                    <div className="flex flex-col bg-gray-blue max-w-max px-5 py-2 rounded-2xl rounded-tl-none">
                        <span>{mensagem}</span>
                        <span className="text-xs text-gray-dark self-end">{hora}</span>

                    </div>
                </div>
            </>
        )
    }

}

export default BalaoMensagem
