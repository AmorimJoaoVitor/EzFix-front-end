import React, { useContext, useState } from 'react'
import Input from './Input'
import Botao from './Botao'
import Erros from './Erros'
import { SessaoContext } from '../contexts/Sessao'
import { ValidacoesContext } from '../contexts/Validacoes'
import { api } from '../api/api'
import Sucesso from './Sucesso'


const DadosContaUsuario = () => {

    const [senhaAtual, setSenhaAtual] = useState("");
    const [novaSenha, setNovaSenha] = useState("");
    const [confirmSenha, setConfirmSenha] = useState("");
    const [msg, setMsg] = useState("");

    const { user, email } = useContext(SessaoContext)
    const { erros, setErros, ValidaAttSenha } = useContext(ValidacoesContext)

    function handleSubmit(e) {
        e.preventDefault();
        if (ValidaAttSenha({ email, senhaAtual, novaSenha, confirmSenha })){
            api.post("/auth",{
                "email":email,
                "senha":senhaAtual
            }).then(res => {
                api.put(`/solicitante/usuario/${email}`,{"senha":senhaAtual} ).then(res => {
                    setMsg("senha atualizado com sucesso")
                    setSenhaAtual("")
                    setNovaSenha("")
                    setConfirmSenha("")
                },err => {
                    setErros(["Algun erro inesperado aconteceu tente novamente mais tarde"])
                })
            },err => {
                setErros(["Algun erro inesperado aconteceu tente novamente mais tarde"])
            })
        }
    }

    return (
        <>
            <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>
                <span className="text-3xl font-semibold">Dados da Conta</span>
                <div className="w-6/12 mt-5">
                    <Sucesso msg={msg}/>
                    <Erros erros={erros}/>
                    <Input value={email} disabled="true" label="Email" placeholder="italou@live.com" alternativo={true} size="w-full" />
                    <Input value={senhaAtual} onChange={e => { setSenhaAtual(e.target.value) }} label="Senha atual" placeholder="**********" alternativo={true} size="w-full" type="password" />
                    <Input value={novaSenha} onChange={e => { setNovaSenha(e.target.value) }} label="Nova senha" placeholder="**********" alternativo={true} size="w-full" type="password" />
                    <Input value={confirmSenha} onChange={e => { setConfirmSenha(e.target.value) }} label="Repetir senha" placeholder="**********" alternativo={true} size="w-full" type="password" />
                    <div className="mt-8 flex justify-end">
                        <Botao estilo={8} text="Atualizar" />
                    </div>
                </div>
            </form>
        </>
    )
}

export default DadosContaUsuario
