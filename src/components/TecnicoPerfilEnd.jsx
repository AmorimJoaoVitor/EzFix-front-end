/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import { SessaoContext } from '../contexts/Sessao'
import Carregamento from './Carregamento'
import Input from './Input'

const TecnicoPerfilEnd = () => {

    const [carregado, setCarregado] = useState(false)
    const { user } = useContext(SessaoContext)


    useEffect(() => {
        if (Object.keys(user).length !== 0) {
            setCarregado(true)
        }
    }, [user])


    if (carregado) {
        return (
            <>
                <div className="w-2/3">
                    <span className="font-semibold text-2xl">Endereço:</span>
                    <div className="flex justify-between">
                        <div className="w-4/12">
                            <Input label="CEP" value={user.enderecoEspecificos[0].enderecoGeral.cep} alternativoDois onChange disabled={true} />
                        </div>
                        <div className="w-7/12">
                            <Input label="Bairro" value={user.enderecoEspecificos[0].enderecoGeral.bairro} alternativoDois disabled={true} />
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="w-4/5">
                            <Input label="Logradouro" value={user.enderecoEspecificos[0].enderecoGeral.logradouro} alternativoDois disabled={true} />
                        </div>
                        <div className="w-12">
                            <Input label="Número" value={user.enderecoEspecificos[0].numero} alternativoDois disabled={true} />
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="w-12">
                            <Input label="Estado" value={user.enderecoEspecificos[0].enderecoGeral.estado} alternativoDois disabled={true} />
                        </div>
                        <div className="w-4/5">
                            <Input label="Cidade" value={user.enderecoEspecificos[0].enderecoGeral.cidade} alternativoDois disabled={true} />
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return <Carregamento />
    }
}

export default TecnicoPerfilEnd
