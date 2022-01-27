/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import BotaoForm from './BotaoForm';
import axios from 'axios';
import Input from './Input';
import { CadastroContext } from '../contexts/Cadastro';
import { ValidacoesContext } from '../contexts/Validacoes';
import Erros from './Erros';
import { useRouter } from 'next/router';
import Carregamento from './Carregamento';

const FormEndereco = ({ isTecnico }) => {

    const [cep, setCep] = useState("")
    const [logradouro, setLogradouro] = useState('')
    const [bairro, setBairro] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [nomeFantasia, setNomeFantasia] = useState('')
    const [enviando, setEnviando] = useState(true)
    const [endereco, setEndereco] = useState(false)

    const router = useRouter()

    const { enviar, voltar, form, formPronto, cadastra, trocaPg } = useContext(CadastroContext)
    const { validaEndereco, erros, setErros } = useContext(ValidacoesContext)

    useEffect(() => {
        for (let i in form) {
            if (i == "cep") {
                setCep(form[i])
            } else if (i == "logradouro") {
                setLogradouro(form[i])
            } else if (i == "bairro") {
                setBairro(form[i])
            } else if (i == "numero") {
                setNumero(form[i])
            } else if (i == "complemento") {
                setComplemento(form[i])
            } else if (i == "cidade") {
                setCidade(form[i])
            } else if (i == "estado") {
                setEstado(form[i])
            } else if (i == "nomeFantasia") {
                setNomeFantasia(form[i])
            }
        }
    }, [])

    useEffect(() => {
        if (formPronto) {
            cadastra(form).then(res => {
                if (res.status == 201) {
                    router.push("/login")
                }
            }, err => {
                console.log(err.response);
                setEnviando(true)
                if (err.response.status == 409) {
                    setErros([err.response.data])
                } else {
                    setErros(["algo inesperado aconteceu, tente novamente mais tarde"])
                }
            })
            setEnviando(false)
        }
    }, [formPronto])

    function handleSubmit(e) {
        e.preventDefault();

        if (isTecnico) {
            if (validaEndereco({ nomeFantasia, cep, logradouro, numero, bairro, complemento, cidade, estado })) {
                trocaPg("Planos")
                enviar({ cep, logradouro, numero, complemento, cidade, estado, bairro, nomeFantasia })
            }
        } else {
            if (validaEndereco({ cep, logradouro, numero, bairro, complemento, cidade, estado })) {
                enviar({ cep, logradouro, numero, complemento, cidade, estado, bairro }, true)
            }
        }
    }

    function mascaraCep(v, set) {
        v = v.replace(/\D/g, "")
        v = v.replace(/\D/g, "")
        v = v.replace(/(\d{5})(\d)/, "$1-$2")
        set(v)
    }

    function autoCep() {
        axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((res) => {

            setLogradouro(res.data.logradouro)
            setCidade(res.data.localidade)
            setEstado(res.data.uf)
            setBairro(res.data.bairro)
            setEnviando(true)
            setEndereco(true)
        }, err => {
            setEndereco(false)
            setEnviando(true) 
            setErros( ["não foi posseivel preencher o seu endereço automaticamente"])
        })
        setEnviando(false)
    }

    if (isTecnico) {
        return (    //Formulario para o endereço do técnico
            <form className="w-full flex justify-between flex-wrap" onSubmit={handleSubmit}>
                <Erros erros={erros} />
                <Input value={nomeFantasia} onChange={e => { setNomeFantasia(e.target.value.replace(/[^a-zA-Z0-9 áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]/g, "")) }} label="Nome da Assistência" placeholder="EzFix" alternativo={true} size="w-full" />
                <Input maxLength="9" value={cep} onChange={e => { mascaraCep(e.target.value, setCep) }} onBlur={autoCep} label="Cep" placeholder="XXXXX-XXX" alternativo={true} size="w-45" />
                <div className="w-45"></div>
                <Input disabled={endereco} value={logradouro} onChange={e => { setLogradouro(e.target.value.replace(/[^a-zA-Z0-9 áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]/g, "")) }} label="Logradouro" placeholder="Av. Paulista" alternativo={true} size="w-45" />
                <Input value={complemento} onChange={e => { setComplemento(e.target.value.replace(/[^a-zA-Z0-9 áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]/g, "")) }} label="Complemento" placeholder="casa 1" alternativo={true} size="w-45" />
                <Input value={numero} type="number" onChange={e => { setNumero(e.target.value) }} label="Número" placeholder="1500" alternativo={true} size="w-45" />
                <Input disabled={endereco} value={bairro} onChange={e => { setBairro(e.target.value.replace(/[^a-zA-Z0-9 áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]/g, "")) }} label="bairro" placeholder="mooca" alternativo={true} size="w-45" />
                <Input disabled={endereco} value={cidade} onChange={e => { setCidade(e.target.value.replace(/[^a-zA-Z0-9 áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]/g, "")) }} label="Cidade" placeholder="São Paulo" alternativo={true} size=" w-45" />
                <Input maxLength="2" disabled={endereco} value={estado} onChange={e => { setEstado(e.target.value.replace(/[^a-zA-Z0-9 áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]/g, "")) }} label="Estado" placeholder="sp" alternativo={true} size="w-45" />
                <BotaoForm size="45" onClick={() => { setErros([]); voltar("Dados Pessoais", { cep, logradouro, numero, complemento, cidade, estado, bairro }) }} text="voltar" />
                <BotaoForm size="45" type="submit" text="avançar" />
            </form>
        )
    }
    else {
        return (
            <div>
                {enviando ? <form className="w-full flex justify-between flex-wrap" onSubmit={handleSubmit}>
                    <Erros erros={erros} />
                    <Input maxLength="9" value={cep} onChange={e => { mascaraCep(e.target.value, setCep) }} onBlur={autoCep} label="Cep" placeholder="XXXXX-XXX" alternativo={true} size="w-45" />
                    <div className="w-45"></div>
                    <Input disabled={endereco} value={logradouro} onChange={e => { setLogradouro(e.target.value.replace(/[^a-zA-Z0-9 áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]/g, "")) }} label="Logradouro" placeholder="Av. Paulista" alternativo={true} size="w-45" />
                    <Input value={complemento} onChange={e => { setComplemento(e.target.value.replace(/[^a-zA-Z0-9 áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]/g, "")) }} label="Complemento" placeholder="casa 1" alternativo={true} size="w-45" />
                    <Input value={numero} type="number" onChange={e => { setNumero(e.target.value) }} label="Número" placeholder="1500" alternativo={true} size="w-45" />
                    <Input disabled={endereco} value={bairro} onChange={e => { setBairro(e.target.value.replace(/[^a-zA-Z0-9 áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]/g, "")) }} label="bairro" placeholder="mooca" alternativo={true} size="w-45" />
                    <Input disabled={endereco} value={cidade} onChange={e => { setCidade(e.target.value.replace(/[^a-zA-Z0-9 áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]/g, "")) }} label="Cidade" placeholder="São Paulo" alternativo={true} size=" w-45" />
                    <Input maxLength="2" disabled={endereco} value={estado} onChange={e => { setEstado(e.target.value.replace(/[^a-zA-Z0-9 áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]/g, "")) }} label="Estado" placeholder="sp" alternativo={true} size="w-45" />
                    <BotaoForm size="45" onClick={() => { setErros([]); voltar("Dados Pessoais", { cep, logradouro, numero, complemento, cidade, estado, bairro }) }} text="voltar" />
                    <BotaoForm size="45" text="enviar" />
                </form> : <Carregamento />}
            </div>
        )
    }
}

export default FormEndereco
