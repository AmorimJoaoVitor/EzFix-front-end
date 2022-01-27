/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { api } from '../api/api'
import Botao from './Botao'
import Footer from './Footer'
import HeaderPage from './HeaderPage'
import ModalAvaliacao from './ModalAvaliacao'
import Navbar from './Navbar'
import StatusPassos from './StatusPassos'
import EtapaLinhaStatus from './tecnico/EtapaLinhaStatus'
import EtapaStatus from './tecnico/EtapaStatus'

const StatusPedido = ({ id, status, setModalAvaliar }) => {

    const [etapas, setEtapas] = useState([])
    const [botao, setBotao] = useState("")
    const router = useRouter();

    useEffect(() => {
        if (status == "reparo em andamento") {
            setTBotao("Concluir Reparo")
            setEtapas([true])
        } else if (status == "reparo conluido") {
            setEtapas([true, true])
        } else if (status == "aguardando avalicao") {
            setEtapas([true, true, true])
        }else if (status == "concluido") {
            setEtapas([true, true, true,true])
        }
    }, [])

    function atualizaStatus() {
        if (status == "reparo conluido") {
            api.put(`/orcamentos`, {
                "id": id,
                "status": "aguardando avalicao"
            }).then(res => {
                router.reload()
            }, err => {

            })
        } else if (status == "aguardando avalicao") {
            setModalAvaliar(true);
        }
    }

    return (
        <>
            <div className="w-full flex mt-10 mb-10 justify-center items-center">
                <div className="h-2/4 p-20 w-4/5 bg-blue-light rounded-3xl flex flex-col justify-center items-center">
                    <StatusPassos/>

                    <div className="w-full flex mb-24 ">
                        <EtapaStatus cliente etapa={0} checked={etapas[0]} />
                        <EtapaLinhaStatus checked={etapas[0]} />
                        <EtapaStatus cliente etapa={1} checked={etapas[1]} />
                        <EtapaLinhaStatus checked={etapas[1]}/>
                        <EtapaStatus cliente etapa={2} checked={etapas[2]} />
                        <EtapaLinhaStatus checked={etapas[2]}/>
                        <EtapaStatus cliente etapa={3} checked={etapas[3]} />
                    </div>

                    {(etapas[1] || etapas[2]) && !etapas[3] ? <Botao text={etapas[1] && etapas[2] ? "avalie" : "confirme a retirada"} estilo={9} onClick={() => atualizaStatus()} /> : <div />}
                </div>
            </div>
        </>
    )
}

export default StatusPedido
