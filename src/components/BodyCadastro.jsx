import React, { useContext } from 'react'
import CamposUsuario from '../components/CamposUsuario'
import Etapas from '../components/Etapas'
import { CadastroContext } from '../contexts/Cadastro'
import { ValidacoesProvider } from '../contexts/Validacoes'

const BodyCadastro = ({isTecnico}) => {

    const { tituloForm } = useContext(CadastroContext)

    return (

        <div className="my-16 flex justify-around items-center">
            <div className="w-9/12 border-2 border-solid border-opacity-10 border-black filter shadow-xl rounded-xl flex flex-col items-center py-16">
                <h1 className="text-4xl">{tituloForm}</h1>
                <Etapas isTecnico={isTecnico}/>
                <div className="w-4/5">
                    <ValidacoesProvider>
                        <CamposUsuario isTecnico={isTecnico}/>
                    </ValidacoesProvider>
                </div>
            </div>
        </div>

    )
}

export default BodyCadastro
