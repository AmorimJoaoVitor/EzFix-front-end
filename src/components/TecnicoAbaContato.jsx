import React from 'react'
import TecnicoPerfilContato from './TecnicoPerfilContato'
import TecnicoPerfilEnd from './TecnicoPerfilEnd'
import {ValidacoesProvider} from '../contexts/Validacoes'

const TecnicoAbaContato = () => {
    return (
        <>
            <div className="flex flex-col justify-start w-full mt-10">
                <ValidacoesProvider>
                    <TecnicoPerfilContato />
                </ValidacoesProvider>
            </div>
            <div className="self-start border-b-2 mt-10 mb-10 w-11/12"></div>
            <div className="flex flex-col justify-start w-full">
                <TecnicoPerfilEnd />
            </div>
        </>
    )
}

export default TecnicoAbaContato
