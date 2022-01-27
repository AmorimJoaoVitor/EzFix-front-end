import React from 'react'
import SidebarTecnico from '../components/SidebarTecnico'
import PedidosOrcamentosTecnico from '../components/tecnico/PedidosOrcamentoTecnico'

const criaorcamento = () => {
    return (
        <div className="flex">
            <SidebarTecnico />
            <div className="w-11/12 flex flex-col ml-10 mt-10">
                <h1 className="text-blue-dark_light text-4xl font-bold mb-5">Pedidos:</h1>
                <PedidosOrcamentosTecnico />
            </div>
        </div>
    )
}

export default criaorcamento
