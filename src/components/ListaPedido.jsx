/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react'
import { api } from '../api/api';
import { CarrinhoContext } from '../contexts/Carrinho';
import { SessaoContext } from '../contexts/Sessao';
import Botao from './Botao'
import CardRelatorio from './CardRelatorio';
import FormProduto from './FormProduto';

const ListaPedido = () => {
    const [novoItem, setNovoItem] = useState(false);
    const { pedido, setPedido } = useContext(CarrinhoContext)
    const { user } = useContext(SessaoContext)
    const [checked, setChecked] = useState(false);

    const [itens, setItens] = useState()

    const router = useRouter();

    function final() {
        setNovoItem(!novoItem)
    }

    function handleSubimt(e) {
        e.preventDefault();


        if (checked) {
            var formdata = new FormData();
            formdata.append("itens", itens[0], itens[0].name);
            api.post(`/orcamentos/txt/${user.cpf}/${router.asPath.replace("/relatorioproblema?", "")}`, formdata)
                .then(res => {
                    router.push(`/perfilAssistencia?${router.asPath.replace("/relatorioproblema?", "")}&true`)
                }, err => {
                    console.log(err.response);
                })
        } else {
            if (pedido.length > 0) {
                api.post(`/orcamentos/${user.cpf}/${router.asPath.replace("/relatorioproblema?", "")}`, pedido).then(res => {
                    setPedido([])
                    router.push(`/perfilAssistencia?${router.asPath.replace("/relatorioproblema?", "")}&true`)
                }, err => {
                    console.log(err.response);
                })
            }
        }

    }

    return (
        <>
            <div className="flex justify-center w-full">
                <div className="w-4/5 flex justify-around mt-10 mb-10">
                    {novoItem && <FormProduto final={final} />}

                    <div className="flex flex-col items-center justify-center overflow-y-auto bg-blue-light w-full h-fit sm:w-96 p-8 sm:rounded-2xl filter drop-shadow-md sm:shadow-2xl">
                        <p className="font-bold text-2xl">Seu Pedido</p>
                        <label for="toggle" class="flex items-center justify-center w-full cursor-pointer relative mb-4 mt-4">
                            <input type="checkbox" id="toggle" class="sr-only" onChange={()=>setChecked(!checked)}/>
                            <div class ={checked ? "bg-blue-dark_light border-2 border-blue-dark h-6 w-11 rounded-full" : "bg-gray border-2 border-blue h-6 w-11 rounded-full"}>
                                <div className={checked ? "transform translate-x-full bg-blue w-6/12 h-full rounded-full" : "w-45 h-full bg-white rounded-full"}></div>
                            </div>
                            <p>Anexar</p>
                        </label>

                        <hr className="w-3/5 mt-5 opacity-25" />
                        {pedido.map((item, i) => <CardRelatorio key={i} id={i} produto={item.produto} problema={item.problema} modelo={item.modelo} descricao={item.obs} />)}

                        {checked ?
                            <div className="w-full">
                                <input type="file" onChange={e => setItens(e.target.files)} alternativo={true} size="w-45" className="bg-gray-blue mt-5 mb-5 w-full" />
                            </div>
                            :

                            <div className="mt-5 flex flex-col items-center">
                                <img src="./plus-circle.png" alt="" width="100px" className="hover:bg-white cursor-pointer rounded-full" onClick={() => setNovoItem(!novoItem)} />
                                <p>Adicionar item</p>
                            </div>
                        }
                        <hr className="w-2/5 filter drop-shadow-md opacity-25 mt-2 mb-5" />

                        <div className="mt-10 mb-5">
                            <Botao onClick={handleSubimt} estilo={8} text="Concluir" />
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default ListaPedido
