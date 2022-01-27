/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from 'react'
import Input from './Input'
import Botao from './Botao'
import CardEndereco from './CardEndereco'
import { SessaoContext } from '../contexts/Sessao'

const EnderecosUsuario = ({ setNovoEndereco }) => {

    const { user } = useContext(SessaoContext)
    const [enderecos, setEnderecos] = useState([]);

    useEffect(() => {
        setEnderecos(user.enderecoEspecificos)
    }, [user.enderecoEspecificos])

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <span className="text-3xl font-semibold">Endereços</span>
                <div className="w-6/12 mt-5 flex flex-col items-center ">
                    {enderecos.map((endereco, i) =>
                        <CardEndereco key={i} index={i + 1} logradouro={endereco.enderecoGeral.logradouro} numero={endereco.numero} estado={endereco.enderecoGeral.estado} cidade={endereco.enderecoGeral.cidade} cep={endereco.enderecoGeral.cep} />
                    )}
                    <img src="./plus-circle.png" alt="adcionar" width="100px" onClick={() => setNovoEndereco(true)} />
                </div>
            </div>
        </>
    )
}

export default EnderecosUsuario
