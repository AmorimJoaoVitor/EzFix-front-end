import React, { useContext, useState } from 'react'
import { api } from '../api/api';
import { ValidacoesContext } from '../contexts/Validacoes';
import BotaoForm from './BotaoForm';
import Erros from './Erros';
import Input from './Input';

const ModalNovoEndereco = ({ setModalNovoCert, setNovidade, novidade, id }) => {


    const { erros, setErros, isBlank } = useContext(ValidacoesContext)

    const [nomeCurso, setNomeCurso] = useState("")
    const [quantidadeHoras, setQuantidadeHoras] = useState("")
    const [dataInicio, setDataInicio] = useState("")
    const [dataConclusao, setDataConclusao] = useState("")

    function enviar(e) {
        e.preventDefault();

        let tmpForm = { nomeCurso, quantidadeHoras, dataInicio, dataConclusao }
        let tmpErros = isBlank(tmpForm)

        setErros([...tmpErros])
        if (tmpErros.length == 0) {
            api.post(`/certificacoes/${id}`, tmpForm).then(res => {
                setNovidade(novidade + 1)
                setModalNovoCert(false)
            }, err => {
                setErros(["algo inesperado ocorreu tente novamente mais tarde"])
            })
        }
    }

    return (
        <div className="z-10 top-0 left-0 bg-gray-opacity h-screen w-full fixed flex justify-center items-center">
            <form className="w-3/5 p-5 rounded-2xl bg-white flex justify-between flex-wrap">
                <Erros erros={erros} />
                <Input onChange={e => setNomeCurso(e.target.value.replace(/[^a-zA-Z0-9 áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]/g, ""))} value={nomeCurso} label="Curso" placeholder="Técnico de Informática" alternativo={true} size="w-45" />
                <Input onChange={e => setQuantidadeHoras(e.target.value)} value={quantidadeHoras} label="Carga Horário" type="number" alternativo={true} size="w-45" />
                <Input onChange={e => setDataInicio(e.target.value)} value={dataInicio} label="Data de Início" type="date" alternativo={true} size="w-45" />
                <Input onChange={e => setDataConclusao(e.target.value)} value={dataConclusao} label="Data de Término" type="date" alternativo={true} size="w-45" />
                {/* <input label="Arquivo" type="file" alternativo={true} size="w-45" className="bg-gray-blue mt-5 p-3 rounded-xl"/> */}
                {/* <div className="w-45"></div> */}
                <BotaoForm size="45" onClick={() => setModalNovoCert(false)} text="Cancelar" />
                <BotaoForm size="45" text="enviar" onClick={e => enviar(e)} />
            </form>
        </div>
    )
}

export default ModalNovoEndereco
