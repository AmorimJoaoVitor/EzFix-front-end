/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from "react";

import SidebarTecnico from "../components/SidebarTecnico";
import TablePedidos from "../components/TablePedidos";
import SectionStatusOrders from "../components/SectionStatusOrders";
import BarQtdOrders from "../components/BarQtdOrders";
import { SessaoContext } from './../contexts/Sessao';
import Carregamento from './../components/Carregamento';
import { api } from './../api/api';
import { parseCookies } from "nookies";


function pedidosTecnico() {

  const { user } = useContext(SessaoContext)
  const [carregado, setCarregado] = useState(false)
  const [vazio, setVazio] = useState(true)
  const [orcamentos, setOrcamentos] = useState([])
  const cookies = parseCookies()
  const [menu, setMenu] = useState(1);
  const [lista, setLista] = useState([]);
  const [novos, setNovos] = useState(0)
  const [andamento, setAndamento] = useState(0)
  const [finalizado, setFinalizado] = useState(0)

  useEffect(() => {
    api.get(`/orcamentos/assistencia/${cookies.id}`).then(res => {
      setCarregado(true)
      if (res.status != 204) {
        setVazio(false)
        setOrcamentos(res.data)
        filtraLista(menu, res.data)
        console.log();
        setNovos(res.data.filter(o => o.statusGeral == "aguardando resposta tecnico").length)
        setAndamento(res.data.filter(o => o.statusGeral != "aguardando resposta tecnico" && o.statusGeral != "concluido").length)
        setFinalizado(res.data.filter(o => o.statusGeral == "concluido").length)
      }
    }, err => {

    })
  }, [])

  useEffect(() => {
    if (lista.length == 0) {
      setVazio(true)
    } else {
      setVazio(false)
    }
  }, [lista])

  useEffect(() => {
    filtraLista(menu, orcamentos)
  }, [menu])

  function filtraLista(m, l) {
    if (m == 1) {
      setLista(l.filter(o => o.statusGeral == "aguardando resposta tecnico"))
    } else if (m == 3) {
      setLista(l.filter(o => o.statusGeral == "concluido"))
    } else {
      setLista(l.filter(o => o.statusGeral != "aguardando resposta tecnico" && o.statusGeral != "concluido"))
    }
  }

  if (carregado) {
    return (
      <>
        <section className="flex">
          <SidebarTecnico />
          <div className="w-11/12 flex flex-col ml-10 mt-10">
            <h1 className="text-blue-dark_light text-4xl font-bold mb-5">Pedidos:</h1>
            <BarQtdOrders novo={novos} andamento={andamento} finalizado={finalizado}/>

            <SectionStatusOrders setMenu={setMenu} />
            {vazio ? (<div className="w-full mt-4 text-center" >Nenhum Pedido</div>) :
              lista.map((item, i) => <TablePedidos key={i} itens={item.itens} nome={item.solicitante.nome} data={item.dataSolicitacao} status={item.statusGeral} id={item.id} />)
            }
          </div>
        </section>
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

export default pedidosTecnico;
