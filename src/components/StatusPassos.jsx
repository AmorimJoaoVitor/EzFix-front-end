import { faAngleDoubleRight, faClock, faHandshake, faWalking } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const StatusPassos = () => {
    return (
        <>
            <div className="w-full flex-1 grid grid-cols-5">
                <div className="flex flex-col justify-start text-center items-center">
                    <FontAwesomeIcon icon={faWalking} size="3x" />
                    <p>Leve o equipamento até o técnico.</p>
                </div>
                <div className="text-center ">
                    <FontAwesomeIcon icon={faAngleDoubleRight} size="5x"/>
                </div>
                <div className="flex flex-col justify-start text-center items-center">
                    <FontAwesomeIcon icon={faClock} size="3x" />
                    <p>Aguarde concluir o reparo</p>
                </div>
                <div className="text-center ">
                    <FontAwesomeIcon icon={faAngleDoubleRight} size="5x"/>
                </div>
                <div className="flex flex-col justify-start text-center items-center">
                    <FontAwesomeIcon icon={faHandshake} size="3x" />
                    <p>Retire seu equipamento</p>
                </div>
            </div>
        </>
    )
}

export default StatusPassos
