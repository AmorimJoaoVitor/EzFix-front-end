import React, { useContext } from 'react'
import Etapa from '../components/Etapa'
import EtapaLinha from '../components/EtapaLinha'
import { CadastroContext } from '../contexts/Cadastro'

const Etapas = ({isTecnico}) => {

    const { stage } = useContext(CadastroContext)

    return (
        <div className="flex my-4">
            <Etapa etapa="1" checked={stage[0]} />
            <EtapaLinha checked={stage[1]} />
            <Etapa etapa="2" checked={stage[1]}/>
            <EtapaLinha checked={stage[2]}/>
            <Etapa etapa="3" checked={stage[2]}/>
            {isTecnico && 
            <>
            <EtapaLinha checked={stage[3]}/>
            <Etapa etapa="4" checked={stage[3]}/>
            </>
            }
        </div>
    )
}

export default Etapas
