/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import DetalhesAlternado from '../components/DetalhesAlternado'
import { api } from '../api/api'
import { useRouter } from 'next/router'
import Carregamento from '../components/Carregamento'
import HeaderPage from '../components/HeaderPage'
import ModalAvaliacao from '../components/ModalAvaliacao'
import { ValidacoesProvider } from '../contexts/Validacoes'

const detalhespedido = () => {

    const router = useRouter()

    const [tituloPagina, setTituloPagina] = useState()
    const [estagio, setEstagio] = useState(2)
    const [carregado, setCarregado] = useState(false)
    const [pedido, setPedido] = useState({})
    const [modalAvaliar, setModalAvaliar] = useState(false);


    function alternaTitulo(estagio) {
        estagio == 3 ? setTituloPagina("Pagamento")
            : setTituloPagina("Pedidos")
    }

    useEffect(() => {
        alternaTitulo(estagio)

        api.get(`/orcamentos/${router.asPath.replace("/detalhespedido?", "")}`).then(res => {
            setCarregado(true)
            setPedido(res.data)
            console.log(res.data);
        }, err => {

        })
    }, []);

    if (carregado) {
        return (
            <>
                <ValidacoesProvider>
                    {modalAvaliar && <ModalAvaliacao pedido={pedido} />}
                </ValidacoesProvider>
                <Navbar fixed={true} />
                <HeaderPage tituloPagina={tituloPagina} />
                <DetalhesAlternado pedido={pedido} setModalAvaliar={setModalAvaliar} />
                <Footer />
            </>
        )
    } else {
        return (
            <>
                <Navbar fixed={false} />
                <Carregamento />
            </>
        )
    }
}

export default detalhespedido