import React from 'react'
import BotaoForm from '../BotaoForm'
import Input from '../Input'

const ModalEditarCertificado = ({ setModalEditar }) => {
    return (
        <>
        <div className="z-10 top-0 left-0 bg-gray-opacity h-screen w-full fixed flex justify-center items-center">
            <form className="w-3/5 p-5 rounded-2xl bg-white flex justify-between flex-wrap">
                <Input label="Curso" placeholder="Técnico de Informática" alternativo={true} size="w-45" />
                <Input label="Carga Horário" type="number" alternativo={true} size="w-45" />
                <Input label="Data de Início" type="date" alternativo={true} size="w-45" />
                <Input label="Data de Término" type="date" alternativo={true} size="w-45" />
                <input label="Arquivo" type="file" alternativo={true} size="w-45" className="bg-gray-blue mt-5 p-3 rounded-xl"/>
                <div className="w-45"></div>
                <BotaoForm size="45" onClick={() => setModalEditar(false)} text="Cancelar" />
                <BotaoForm size="45" text="enviar" />
            </form>
        </div>
        </>
    )
}

export default ModalEditarCertificado
