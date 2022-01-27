import React from 'react'
import Botao from '../components/Botao'
import Footer from '../components/Footer'
import HeaderPage from '../components/HeaderPage'
import Navbar from '../components/Navbar'
import EtapaLinhaStatus from '../components/tecnico/EtapaLinhaStatus'
import EtapaStatus from '../components/tecnico/EtapaStatus'

const statuspedido = () => {
    return (
        <>
            <Navbar fixed/>
            <HeaderPage tituloPagina="Acompanhamento"/>
            <div className="w-full flex mt-10 mb-10 justify-center items-center">
                <div className="h-2/4 p-20 w-4/5 bg-blue-light rounded-3xl flex justify-center items-center">

                <div className="w-full flex mb-24 mr-20">
                    <EtapaStatus cliente etapa={0} dataStatus="18/11/2021" horaStatus="15:10" checked/>
                    <EtapaLinhaStatus />
                    <EtapaStatus cliente etapa={1} dataStatus="25/11/2021" horaStatus="20:15"/>
                    <EtapaLinhaStatus />
                    <EtapaStatus cliente etapa={2} dataStatus="26/11/2021" horaStatus="15:30"/>
                    <EtapaLinhaStatus />
                    <EtapaStatus cliente etapa={3} dataStatus="26/11/2021" horaStatus="15:30"/>
                    </div>
                    
                {/* <div className="w-6/12 flex mb-24 mr-20">
                    <EtapaStatusPedido checked etapa={0} dataStatus="18/11/2021" horaStatus="15:10"/>
                    <EtapaLinhaStatusPedido />
                    <EtapaStatusPedido etapa={1} dataStatus="25/11/2021" horaStatus="20:15"/>
                    <EtapaLinhaStatusPedido />
                    <EtapaStatusPedido etapa={2} dataStatus="26/11/2021" horaStatus="15:30"/>
                    </div>
                <Botao text="Confirmar Retirada" estilo={9}/> */}
                
                <Botao text="Confirmar Retirada" estilo={9}/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default statuspedido
