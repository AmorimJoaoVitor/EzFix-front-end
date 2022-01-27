import React, { useContext, useState } from 'react'
import Botao from './Botao'
import Input from './Input'
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import Erros from './Erros';
import { ValidacoesContext } from '../contexts/Validacoes';
import {api} from '../api/api';
import { SessaoContext } from '../contexts/Sessao';

const FormLogin = ({isTecnico}) => {
    const router = useRouter()
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const { erros, isBlank, setErros } = useContext(ValidacoesContext)
    const {setEmailSessao} = useContext(SessaoContext)

    function validaErros(){
        let erro = [...isBlank({ email, senha })]
        if (erro.length == 0) {
            return true;
        } else {
            setErros(erro);
            return false;
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (validaErros()) {
            api.post("/auth", {
                "email": email,
                "senha": senha
            }).then(res => {
                setEmailSessao(email)
                setCookie(null, 'token', res.data.token, {
                    maxAge: 3600,
                    path: '/',
                });
                if(!isTecnico){
                    setCookie(null, 'isTecnico', false, {
                        maxAge: 3600,
                        path: '/',
                    });
                    router.push('/assistencias')
                }else {
                    setCookie(null, 'isTecnico', true, {
                        maxAge: 3600,
                        path: '/',
                    });
                    router.push('/DashboardInicio')
                }
            }, err => {
                try{
                    if (err.response.status == 403){

                        setErros(["email e/ou senha invalidos"])
                    }else {
                        setErros(["algo inesperado ocorreu, tente novamente mais tarde"])
                    }
                }catch(e){
                    setErros(["algo inesperado ocorreu, tente novamente mais tarde"])
                }
            })
        }
    }

    return (
        <form className="my-8" onSubmit={handleSubmit}>
            <Erros erros={erros} />
            <Input value={email} onChange={e => { setEmail(e.target.value) }} label="Email" placeholder="seu@email.com" alternativo={true} size="w-full" />
            <Input value={senha} onChange={e => { setSenha(e.target.value) }} label="Senha" type="password" placeholder="**********" alternativo={true} size="w-full" />
            <div className="w-full flex justify-around mt-8">
                <Botao estilo={7} text="entrar" />
            </div>
        </form>
    )
}

export default FormLogin
