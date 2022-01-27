/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react'
import { CadastroContext } from '../contexts/Cadastro';
import { ValidacoesContext } from '../contexts/Validacoes';
import BotaoForm from './BotaoForm';
import CardPlano from './CardPlano'
import Erros from './Erros';

const FormPlanos = () => {

    const { enviar, voltar, form, formPronto, cadastraAssistencia, trocaPg } = useContext(CadastroContext)
    const { validaEndereco, erros, setErros } = useContext(ValidacoesContext)
    
    const [estilo1,setEstilo1] = useState("bg-blue-light");
    const [estilo2,setEstilo2] = useState("bg-blue-light");
    const [estilo3,setEstilo3] = useState("bg-blue-light");
    const [plano,setPlano] = useState(2);
    

    const [radio,setRadio] = useState([false,true,false])

    const router = useRouter()

    useEffect(() => {
        if (formPronto) {
            console.log("foi");
            cadastraAssistencia(form).then(res => {
                if (res.status == 201) {
                    router.push("/tecnico/login")
                }
            }, err => {
                console.log(err.response);
                if (err.response.status == 409) {
                    setErros([err.response.data])
                } else {
                    setErros(["algo inesperado aconteceu, tente novamente mais tarde"])
                }
            })
        }
    }, [formPronto])

    useEffect(() => {
        if(radio[0]){
            setEstilo1("bg-blue-dark text-white scale-110")
            setEstilo2("bg-blue-light")
            setEstilo3("bg-blue-light")
        }
        if(radio[1]){
            setEstilo2("bg-blue-dark text-white scale-110")
            setEstilo1("bg-blue-light")
            setEstilo3("bg-blue-light")
        }
        if(radio[2]){
            setEstilo3("bg-blue-dark text-white scale-110")
            setEstilo1("bg-blue-light")
            setEstilo2("bg-blue-light")
        }
    },[radio])

    function handleSubmit() {
        enviar({ plano },true)
    }


    return (
        <>
            <Erros erros={erros} />
            <div className="grid grid-cols-3 gap-10 mt-10">
                <CardPlano onClick={() => {setPlano(1);setRadio([true,false,false])}} estilo={estilo1} pacote={0} />
                <CardPlano onClick={() => {setPlano(2);setRadio([false,true,false])}} estilo={estilo2} pacote={1} />
                <CardPlano onClick={() => {setPlano(3);setRadio([false,false,true])}} estilo={estilo3} pacote={2} />
            </div>
            <div className="flex w-full">
                <BotaoForm size="45" onClick={() => { setErros([]); voltar("Dados Do Usuario", {plano}) }} text="voltar" />
                <BotaoForm size="45" onClick={handleSubmit} type="submit" text="avançar" />
            </div>
        </>
    )
}

export default FormPlanos
