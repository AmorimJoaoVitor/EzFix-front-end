import React, { useEffect, useState } from 'react'
import Carregamento from './Carregamento';
import Pagamento from './Pagamento';
import PedidoDetalhado from './PedidoDetalhado'
import PedidoDetalhadoConfirmar from './PedidoDetalhadoConfirmar'
import StatusPedido from './StatusPedido';

const DetalhesAlternado = ({pedido, setModalAvaliar}) => {

    const [estagio,setEstagio] = useState(0)

    useEffect(() => {
        if(pedido != undefined){
            if(pedido.statusGeral == "aguardando resposta tecnico"){
                setEstagio(1)
            }else if(pedido.statusGeral == "aguardando sua resposta"){
                setEstagio(2)
            }else if(pedido.statusGeral  != "aguardando sua resposta"){
                setEstagio(4)
            }
        }
    },[pedido])

    switch (estagio) {
        case 1: return <PedidoDetalhado nomeAssistencia={pedido.assistencia.nomeFantasia} data={pedido.dataSolicitacao} status={pedido.statusGeral} itens={pedido.itens} id={pedido.id} idAssistencia={pedido.assistencia.id}/>;

        case 2: return <PedidoDetalhadoConfirmar nomeAssistencia={pedido.assistencia.nomeFantasia} setEstagio={setEstagio} valorTotal={pedido.valorTotal} data={pedido.dataSolicitacao} status={pedido.statusGeral} itens={pedido.itens} id={pedido.id} idAssistencia={pedido.assistencia.id}/>

        case 3: return <Pagamento id={pedido.id} solicitante={pedido.solicitante} assistencia={pedido.assistencia} itens={pedido.itens} valorTotal={pedido.valorTotal}/>

        case 4: return <StatusPedido id={pedido.id} status={pedido.statusGeral} setModalAvaliar={setModalAvaliar} />

        default: return <Carregamento/>;
    }
            
}

export default DetalhesAlternado
