import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const EtapaStatus = ({ etapa, checked, cliente }) => {
    const andamentoTecnico = ["Orcamento aceito", "Envio do cliente", "Reparo conluído", "Pedido retirado","Pedido avaliado"]
    const andamentoCliente = ["Equipamento entregue", "Pedido pronto", "Pedido retirado","Avaliação"]

    return (
        <>
            <div className="flex flex-col items-center mt-28">
                <div className={`${checked ? "bg-blue-dark text-green" : "bg-gray-dark text-gray-blue"} 
                                                w-24 h-24  bg-blue-dark rounded-full text-lg text-white flex items-center justify-center`}>
                    <FontAwesomeIcon icon={faCheckCircle} size="4x" />
                </div>

                <div className="flex flex-col text-base text-center">
                    <p className="font-semibold text-xl mb-5">{cliente ? andamentoCliente[etapa] : andamentoTecnico[etapa]}</p>
                </div>

            </div>
        </>
    )

}

export default EtapaStatus