import React, { useContext, useState } from 'react'
import ComboBox from "../components/ComboBox"
import Input from "../components/Input"
import TextArea from "../components/TextArea"
import Botao from "../components/Botao"
import { useRouter } from 'next/router'
import Erros from './Erros';
import { CarrinhoContext } from '../contexts/Carrinho'

const FormProduto = ({final}) => {
    const router = useRouter();

    const [produto, setProduto] = useState("--Selecione--")
    const [marca, setMarca] = useState("--Selecione--")
    const [modelo, setModelo] = useState("--Selecione--")
    const [problema, setProblema] = useState("--Selecione--")
    const [descricao, setObs] = useState("")
    const [erros, setErros] = useState([])

    const { pedido, setPedido } = useContext(CarrinhoContext)

    function handleSubmit(e) {
        e.preventDefault();
        let index = pedido.length + 1;
        let obj = { produto, marca, modelo, problema, descricao}
        let tmpErro = []
        for(let i in obj){
            if(obj[i] == "--Selecione--"){
                tmpErro.push(`selecione uma opção no campo de ${i}`)
            }
        }
        setErros(tmpErro)
        console.log(tmpErro);
        if(tmpErro.length == 0){
            setPedido([...pedido, obj]);
            final()
        }
        
    }

    return (
        <form onSubmit={handleSubmit} className="bg-blue-light w-full sm:w-96 p-8 h-fit sm:rounded-2xl filter drop-shadow-md sm:shadow-2xl">
            <h1 className="text-xl text-center font-medium">O que está <br /> precisando ser reparado?</h1>
            <hr className="text-black text-opacity-25 my-2 filter drop-shadow-md" />
            <Erros erros={erros}/>
            <ComboBox onChange={e => setProduto(e.target.value)} label="Produto" opicao={["--Selecione--", "celular"]} />
            <ComboBox value={marca} onChange={e => { setMarca(e.target.value) }} label="Marca" opicao={["--Selecione--", "samsung"]} />
            <ComboBox value={modelo} onChange={e => { setModelo(e.target.value) }} label="Modelo" opicao={["--Selecione--", "galaxy m31"]} />
            <ComboBox onChange={e => setProblema(e.target.value)} label="Problema" opicao={["--Selecione--", "tela quebrada"]} />
            <TextArea value={descricao} onChange={e => { setObs(e.target.value) }} label="Observações" placeholder="Ex: Tela quebrada, não liga, lentidão, peças soltando.." />
            <div className="w-full flex justify-around mt-2">
                <Botao estilo={2} text="Confirmar" />
            </div>
        </form>
    )
}

export default FormProduto
