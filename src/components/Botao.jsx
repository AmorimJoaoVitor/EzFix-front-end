import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Botao = ({ estilo, icone, text, onClick, type }) => {

    const botao = [
        <button key={0} type={type} className="bg-blue w-full xl:w-60 xl:h-14 lg:w-56 lg:h-12 xl:text-lg sm:w-48 font-medium min-w-min p-2 sm:rounded-md hover:text-blue hover:bg-blue-light duration-75">{text}</button>,

        //Botão usado no componente Order
            <button  key={0} type={type} onClick={onClick} className="rounded-3xl px-6 py-2  bg-blue w-52 text-white text-xl flex justify-around items-center hover:text-blue hover:bg-blue-light duration-75">
                <FontAwesomeIcon icon={icone} />{text}</button>,
        
        //Botão usado no FormProduto e NavBar
        <button key={0} type={type} onClick={onClick} className="bg-blue-dark w-24 min-w-min p-2 rounded-md text-white hover:bg-blue-dark_light duration-75">{text}</button>,

        //Botão do componente HeaderOrder
        <button key={0} type={type} className="rounded-3xl px-5 py-2 bg-blue-dark w-40 hover:text-black hover:bg-blue duration-75 text-white text-2xl font-bold flex justify-around items-center" onClick={onClick}>
            <FontAwesomeIcon icon={icone} />{text}</button>,

        //Botão de recusa do componente PedidoDetalhado
        <button key={0} type={type} onClick={onClick} className="bg-red w-32 min-w-min p-2 rounded-md text-white hover:bg-blue-light duration-75">{text}</button>,

        <button key={0} onClick={onClick} className="rounded-xl px-60 mt-20 py-3 bg-blue-dark w-40 hover:text-black hover:bg-blue duration-75 text-white text-xl font-semibold flex justify-around items-center">{text}</button>,
        
        <button key={0}  type={type} onClick={onClick}  className="bg-blue-dark w-24 min-w-min p-2 rounded-md text-white hover:bg-blue-light duration-75" >{text}</button>,

        <button key={0}  type={type} onClick={onClick}  className="bg-blue-dark py-3 px-5 rounded-3xl text-white">{text}</button>,
        
        <button key={0} className="bg-blue-dark w-32 min-w-min p-2 rounded-md text-white hover:bg-blue-light duration-75" onClick={onClick}>{text}</button>,

        <button key={0} className="rounded-xl px-6 py-3 bg-blue-dark w-40 hover:text-black hover:bg-blue duration-75 text-white text-xl font-semibold flex justify-around items-center" onClick={onClick}>
            <FontAwesomeIcon icon={icone} />{text}</button>,
    ]

    return botao[estilo];

}

export default Botao
