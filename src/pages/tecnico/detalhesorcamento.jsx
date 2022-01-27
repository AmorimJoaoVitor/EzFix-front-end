/* eslint-disable react-hooks/rules-of-hooks */
import router from 'next/router';
import React, { useEffect, useState } from 'react'
import { api } from '../../api/api';

import SidebarTecnico from '../../components/SidebarTecnico'
import PedidoStatusAndamento from '../../components/tecnico/PedidoStatusAndamento';

const detalhesorcamento = () => {


    return (
        <>
            <div className="flex">
                <SidebarTecnico />
                <div className="w-11/12 flex flex-col ml-10 mt-10">
                    <h1 className="text-blue-dark_light text-4xl font-bold mb-5">Pedidos:</h1>
                    <PedidoStatusAndamento/>
                </div>
            </div>
        </>
    )
}

export default detalhesorcamento
