/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import { CadastroContext } from '../contexts/Cadastro'
import { ValidacoesContext } from '../contexts/Validacoes'
import BotaoForm from './BotaoForm'
import Erros from './Erros';
import Input from './Input'

const FormDadosPessoais = ({ isTecnico }) => {

    const [nome, setNome] = useState('')
    const [cpf, setCPF] = useState('')
    const [dataNasc, setDataNasc] = useState('')
    const [telPrimario, setTelPrimario] = useState('')
    const [telSecundario, setTelSecundario] = useState('')
    const [documento, setDocumento] = useState({})

    const { enviar, trocaPg, voltar, form } = useContext(CadastroContext)
    const { validaDadosPessoais, erros, setErros } = useContext(ValidacoesContext)

    useEffect(() => {
        if (isTecnico) {
            setDocumento({label:"cpf/cnpj",size:18})
        }
        else {
            setDocumento({label:"cpf",size:14})
        }
        for (let i in form) {
            if (i == "nome") {
                setNome(form[i])
            } else if (i == "cpf") {
                setCPF(form[i])
            } else if (i == "dataNasc") {
                setDataNasc(form[i])
            } else if (i == "telPrimario") {
                setTelPrimario(form[i])
            } else if (i == "telSecundario") {
                setTelSecundario(form[i])
            }
        }
    }, [])

    function handleSubmit(e) {
        e.preventDefault();

        if (validaDadosPessoais({ nome, cpf, dataNasc, telPrimario, telSecundario })) {
            trocaPg("Endereço")
            enviar({ nome, cpf, dataNasc, telPrimario, telSecundario })
        }

    }

    function mascaraTel(v, set) {
        v = v.replace(/\D/g, "");
        v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
        v = v.replace(/(\d)(\d{4})$/, "$1-$2");
        set(v)
    }

    function mascaraCpf(v, set) {
        if(v.length <= 14){
            v = v.replace(/\D/g, "")
            v = v.replace(/(\d{3})(\d)/, "$1.$2")
            v = v.replace(/(\d{3})(\d)/, "$1.$2")
            v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
        }else{
            v = v.replace(/\D/g, "")
            v = v.replace(/(\d{2})(\d)/, "$1.$2")
            v = v.replace(/(\d{3})(\d)/, "$1.$2")
            v = v.replace(/(\d{3})(\d)/, "$1/$2")
            v = v.replace(/(\d{4})(\d{1,2})$/, "$1-$2")
        }
        
        set(v)
    }

    function mascaraData(v, set) {
        v = v.replace(/\D/g, "")
        v = v.replace(/(\d{2})(\d)/, "$1/$2")
        v = v.replace(/(\d{2})(\d)/, "$1/$2")
        set(v)
    }



    return (
        <>
            <form className="w-full flex justify-between flex-wrap" onSubmit={handleSubmit}>
                <Erros erros={erros} />
                <Input value={nome} onChange={e => { setNome(e.target.value.replace(/[^a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/g,"")) }} label="Nome Completo" placeholder="josé roberto" alternativo={true} size="w-full" />
                <Input maxLength={documento.size} value={cpf} onChange={e => { mascaraCpf(e.target.value, setCPF) }} label={documento.label} placeholder="XXX.XXX.XXX-XX" alternativo={true} size="w-45" />
                <Input maxLength="10" value={dataNasc} onChange={e => { mascaraData(e.target.value, setDataNasc) }} type="text" label="Data de Nascimento" placeholder="DD/MM/AAAA" alternativo={true} size="w-45" />
                <Input maxLength="15" value={telPrimario} onChange={e => { mascaraTel(e.target.value, setTelPrimario) }} label="Telefone Primario" placeholder="(XX)XXXXX-XXXX" alternativo={true} size="w-45" />
                <Input maxLength="15" value={telSecundario} onChange={e => { mascaraTel(e.target.value, setTelSecundario) }} label="Telefone Secundario" placeholder="(XX)XXXXX-XXXX" alternativo={true} size="w-45" />
                <BotaoForm size="45" onClick={() => { setErros([]); voltar("Dados Do Usuario", { nome, cpf, dataNasc, telPrimario, telSecundario }) }} text="voltar" />
                <BotaoForm size="45" type="submit" text="avançar" />
            </form>

        </>
    )
}

export default FormDadosPessoais
