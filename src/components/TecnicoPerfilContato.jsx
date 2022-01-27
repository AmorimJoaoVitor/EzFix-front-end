/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import Botao from './Botao';
import Input from './Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { SessaoContext } from '../contexts/Sessao';
import Carregamento from './Carregamento';
import { api } from '../api/api';
import { ValidacoesContext } from '../contexts/Validacoes';
import Erros from './Erros';

const TecnicoPerfilContato = () => {
    const [editar, setEditar] = useState(false);
    const [email, setEmail] = useState("");
    const [telPrimario, setTelPrimario] = useState("");
    const [telSecundario, setTelSecundario] = useState("");

    function mascaraTel(v) {
        v = v.replace(/\D/g, "");
        v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
        v = v.replace(/(\d)(\d{4})$/, "$1-$2");
        return v;
    }

    const [carregado, setCarregado] = useState(false)
    const { user } = useContext(SessaoContext)
    const { validaAttDadosPessoais, erros, setErros } = useContext(ValidacoesContext);

    useEffect(() => {
        if (Object.keys(user).length !== 0) {
            setCarregado(true)
            setEmail(user.representante.usuario.email)
            setTelPrimario(mascaraTel(user.telefonePrimario))
            setTelSecundario(mascaraTel(user.telefoneSecundario))
        }
    }, [user])

    function atualizarTelefone() {

        if (validaAttDadosPessoais(user,{ telPrimario, telSecundario })) {
            api.put(`/assistencia/${user.id}`, {
                "telefonePrimario": limpaFormatacao(telPrimario),
                "telefoneSecundario": limpaFormatacao(telSecundario)
            }).then(res => {
                setEditar(!editar)
            }, err => {
                setErros(["algo inesperado ocorreu tente novamente mais tarde"])
            })
        }
    }

    function limpaFormatacao(v) {
        v = v.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gi, '')
        return v;
    }

    if (carregado) {
        return (
            <>
                <div className="flex  flex-col w-2/3 mt-20">
                    <div className="flex items-center justify-start">
                        <span className="font-semibold text-2xl">Contato</span>
                        <FontAwesomeIcon onClick={() => setEditar(!editar)} className="hover:bg-blue p-1 rounded-xl cursor-pointer ml-10 text-2xl" icon={faPencilAlt} />
                    </div>
                    <Erros erros={erros}/>
                    <Input label="E-mail" onChange={e => setEmail(e.target.value)} value={email} alternativoDois disabled={true} />
                    <div className="flex justify-between">
                        <div className="w-45">
                            <Input maxLength={15} label="Telefone Primário" onChange={e => { setTelPrimario(mascaraTel(e.target.value)) }} value={telPrimario} alternativoDois disabled={!editar} />
                        </div>
                        <div className="w-45">
                            <Input maxLength={15} label="Telefone Secundário" onChange={e => { setTelSecundario(mascaraTel(e.target.value)) }} value={telSecundario} alternativoDois disabled={!editar} />
                        </div>
                    </div>
                    {editar &&
                        <div className="self-end mt-5">
                            <Botao estilo={8} text="Salvar" onClick={atualizarTelefone}/>
                        </div>
                    }
                </div>
            </>
        )
    } else {
        return <Carregamento />
    }
}

export default TecnicoPerfilContato
