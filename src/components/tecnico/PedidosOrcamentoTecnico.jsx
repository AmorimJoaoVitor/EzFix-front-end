/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from 'react'
import BarInformacaoCliente from "../BarInformacaoCliente";
import BoxProdOrcamento from "../BoxProdOrcamento";
import { useRouter } from "next/router";
import Carregamento from '../Carregamento';
import Erros from '../Erros';
import SidebarTecnico from '../SidebarTecnico';
import { api } from '../../api/api';


function pedidosOrcamentosTecnico() {

    const router = useRouter();
    const [pedido, setPedido] = useState()
    const [carregado, setCarregado] = useState(false)
    const [valorTotal, setValorTotal] = useState(0.0)
    const [itemEditado, setItemEditado] = useState([])
    const [erros, setErros] = useState([])

    useEffect(() => {
        api.get(`/orcamentos/${router.asPath.replace("/criaorcamento?", "")}`).then(res => {
            console.log(res.data);
            setPedido(res.data)
            setCarregado(true)
        }, err => {

        })
    }, []);

    function somaTotal(i, v) {

        let oldValue
        let tmpList = itemEditado
        console.log(tmpList);
        if (tmpList.length === 0) {
            tmpList.push({ i, v })
        } else {
            let tem = tmpList.find(item => item.i === i)
            console.log(tem);
            if (!!tem) {
                oldValue = tem.v
                tem.v = v
            } else {
                tmpList.push({ i, v })
            }
        }

        console.log(tmpList);

        setItemEditado(tmpList)
        setValorTotal(Number(valorTotal - oldValue))
        setValorTotal(Number(valorTotal + v))
    }

    function validEnvia() {

        let tudocerto
        if (itemEditado.length < pedido.itens.length) {
            setErros(["Nenhum campo pode estar zerado"])
        } else {
            itemEditado.map(i => {
                if (i.v == 0) {
                    tudocerto = false
                    setErros(["Nenhum campo pode estar zerado"])
                } else {
                    tudocerto = true;
                }
            })
        }
        if (tudocerto) {
            setErros([])
            api.put(`/orcamentos/${router.asPath.replace("/criaorcamento?", "")}`, {
                "itemEditarForms": itemEditado,
                "status": "aguardando sua resposta"
            }).then(res => {
                router.push("/pedidosTecnico")
            }, err => {
                console.log(err.response);
            })
        }
        console.log(erros);
    }

    if (carregado) {
        return (
            <>
                <BarInformacaoCliente id={pedido.id} status={pedido.statusGeral} nome={pedido.solicitante.nome} data={pedido.dataSolicitacao} />
                <div className="p-8 flex flex-col items-center justify-evenly border-2 border-gray-dark border-solid rounded-xl rounded-t-none shadow-lg">
                    <Erros erros={erros} />
                    {pedido.itens.map((item, i) => <BoxProdOrcamento key={i} id={item.id} somaTotal={somaTotal} tipo={item.produto.tipo} marca={item.produto.marca} modelo={item.produto.modelo} problema={item.problema} descricao={item.descricao} />)}

                    <div className="flex flex-col w-full items-end">
                        <div className="bg-blue-light_dark p-4 w-1/5 rounded-xl mb-1">
                            <b>Total estimado: </b> <span>R${valorTotal}</span>
                        </div>
                        <button onClick={() => { validEnvia() }} className="text-white p-4 rounded-xl bg-blue-dark w-15 mt-1 hover:bg-gray-dark hover:text-blue-dark_light transition-all shadow-lg">Confirmar Orçamento</button>
                    </div>

                </div>

            </>
        )
    } else {

        return (
            <>
                <Carregamento />
            </>
        )
    }
}

export default pedidosOrcamentosTecnico;
