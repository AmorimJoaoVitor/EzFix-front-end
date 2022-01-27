import React, { useContext, useState } from 'react'
import ComboBox from "./ComboBox"
import Input from "./Input"
import TextArea from "./TextArea"
import Botao from "./Botao"
import { useRouter } from 'next/router'
import { CarrinhoContext } from '../contexts/Carrinho'

const ModalFormFiltro = ({setModal}) => {
    const router = useRouter();

    const [produto, setProduto] = useState("")
    const [marca, setMarca] = useState("")
    const [modelo, setModelo] = useState("")
    const [problema, setProblema] = useState("")
    const [obs, setObs] = useState("")

    const { pedido, setPedido } = useContext(CarrinhoContext)

    function handleSubmit(e) {
        e.preventDefault();
        setPedido([...pedido, { produto, marca, modelo, problema, obs }]);
        router.push("/assistencias")
    }

    return (
        <div className="z-10 bg-gray-opacity h-screen w-full fixed flex justify-center items-center">
            <div className="flex justify-center items-center w-4/5">
                <div className=" bg-white w-45 p-10 rounded-3xl">
                    <h1 className="text-xl text-center font-medium">O que está <br /> precisando ser reparado?</h1>
                    <hr className="text-black text-opacity-25 my-2 filter drop-shadow-md" />
                    <div className="flex">
                        <div className="flex flex-col w-1/2">
                            <ComboBox onChange={e => setProduto(e.target.value)} estilo={2} label="Produto" opicao={["--Selecione--", "Celular"]} />
                            <ComboBox onChange={e => setProblema(e.target.value)} estilo={2} label="Problema" opicao={["--Seleciona--", "Tela Quebrada"]} />
                        </div>
                        <div className="flex flex-col w-3/5">
                            <Input value={marca} onChange={e => { setMarca(e.target.value) }} alternativo={true} label="Marca" placeholder="Ex: Samsung, Positivo ..." />
                            <Input value={modelo} onChange={e => { setModelo(e.target.value) }} alternativo={true} label="Modelo" placeholder="Digite o modelo." />
                        </div>

                    </div>
                    <div className="flex flex-col mt-5">
                        <TextArea value={obs} onChange={e => { setObs(e.target.value) }} alternativo={true} label="Observações" placeholder="Ex: Tela quebrada, não liga, lentidão, peças soltando.." />
                        <div className="w-full flex justify-around mt-5">
                            <Botao estilo={4} text="Cancelar" onClick={()=>setModal(false)}/>
                            <Botao estilo={8} text="Confirmar"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ModalFormFiltro
