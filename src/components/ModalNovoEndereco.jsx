import React, { useContext, useEffect, useState } from 'react'
import BotaoForm from './BotaoForm';
import axios from 'axios';
import Input from './Input';
import { ValidacoesContext } from '../contexts/Validacoes';
import Erros from './Erros';
import { useRouter } from 'next/router';
import { SessaoContext } from '../contexts/Sessao';
import { api } from '../api/api';

const ModalNovoEndereco = ({ setNovoEndereco }) => {
    const [cep, setCep] = useState("")
    const [logradouro, setLogradouro] = useState('')
    const [bairro, setBairro] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')

    const router = useRouter()

    const { user } = useContext(SessaoContext);
    const { validaEndereco, erros, setErros } = useContext(ValidacoesContext)



    function handleSubmit(e) {
        e.preventDefault();
        if (validaEndereco({ cep, logradouro, numero, bairro, complemento, cidade, estado })) {
            api.post(`/endereco/solicitante/${user.cpf}`,{ 
                "cep":limpaFormatacao(cep), 
                "logradouro":logradouro, 
                "numero":numero, 
                "complemento":complemento, 
                "cidade":cidade, 
                "estado":estado, 
                "bairro":bairro 
            }).then(res => {
                router.reload();
            },err => {
                console.log(err.response);
                setErros(["algo inesperado ocorreu tente novamente mais tarde"])
            })
        }
    }

    function limpaFormatacao(v){
        v = v.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gi, '')
        return v;
    }

    function mascaraCep(v, set) {
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
        }, err => { console.log(err); })
    }

    return (
        <div className="z-10 bg-gray-opacity h-screen w-full fixed flex justify-center items-center">
            <form className="w-3/5 p-5 rounded-2xl bg-white flex justify-between flex-wrap" onSubmit={handleSubmit}>
                <Erros erros={erros} />
                <Input maxLength="9" value={cep} onChange={e => { mascaraCep(e.target.value, setCep) }} onBlur={autoCep} label="Cep" placeholder="XXXXX-XXX" alternativo={true} size="w-45" />
                <div className="w-45"></div>
                <Input value={logradouro} onChange={e => { setLogradouro(e.target.value) }} label="Logradouro" placeholder="Av. Paulista" alternativo={true} size="w-45" />
                <Input value={complemento} onChange={e => { setComplemento(e.target.value) }} label="Complemento" placeholder="casa 1" alternativo={true} size="w-45" />
                <Input value={numero} type="number" onChange={e => { setNumero(e.target.value) }} label="Número" placeholder="1500" alternativo={true} size="w-45" />
                <Input value={bairro} onChange={e => { setBairro(e.target.value) }} label="bairro" placeholder="mooca" alternativo={true} size="w-45" />
                <Input value={cidade} onChange={e => { setCidade(e.target.value) }} label="Cidade" placeholder="São Paulo" alternativo={true} size=" w-45" />
                <Input maxLength="2" value={estado} onChange={e => { setEstado(e.target.value) }} label="Estado" placeholder="sp" alternativo={true} size="w-45" />
                <BotaoForm size="45" onClick={() => setNovoEndereco(false)} text="Cancelar" />
                <BotaoForm size="45" text="enviar" />
            </form>
        </div>
    )
}

export default ModalNovoEndereco
