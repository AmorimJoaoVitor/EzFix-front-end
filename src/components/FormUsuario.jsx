import React, { useContext, useEffect, useState } from 'react'
import { CadastroContext } from '../contexts/Cadastro';
import { ValidacoesContext } from '../contexts/Validacoes';
import BotaoForm from './BotaoForm'
import Erros from './Erros';
import Input from './Input'

const FormUsuario = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmSenha, setConfirmSenha] = useState("");

    const { enviar, trocaPg, form } = useContext(CadastroContext)
    const { validaUsuario, erros } = useContext(ValidacoesContext)

    useEffect(() => { console.log(erros); }, [erros])

    useEffect(() => {
        for (let i in form) {
            if (i == "email") {
                setEmail(form[i])
            } else if (i == "senha") {
                setSenha(form[i])
            } else if (i == "confirmSenha") {
                setConfirmSenha(form[i])
            }
        }
    }, [form])

    function handleSubmit(e) {
        e.preventDefault();

        if (validaUsuario({ email, senha, confirmSenha })) {
            trocaPg("Dados Pessoais")
            enviar({ email, senha, confirmSenha })
        }
    }

    return (
        <form className="w-full flex justify-between flex-wrap" onSubmit={handleSubmit}>
            <Erros erros={erros} />
            <Input value={email} onChange={e => { setEmail(e.target.value) }} label="Email" placeholder="seu@email.com" alternativo={true} size="w-full" />
            <Input value={senha} onChange={e => { setSenha(e.target.value) }} label="Senha" placeholder="********" alternativo={true} size="w-full" type="password" />
            <Input value={confirmSenha} onChange={e => { setConfirmSenha(e.target.value) }} label="Confirme sua senha" placeholder="********" alternativo={true} size="w-full" type="password" />
            <BotaoForm size="full" text="avançar" />
        </form>
    )
}

export default FormUsuario
