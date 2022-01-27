/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { api } from '../api/api'
import BarraOtimiza from '../components/BarraOtimiza'
import CardAssistencia from '../components/CardAssistencia'
import Carregamento from '../components/Carregamento'
import ComboBox from '../components/ComboBox'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Pagination from '../components/Pagination'
import Recomendadas from '../components/Recomendadas'
import { CarrinhoContext } from '../contexts/Carrinho'
import { SessaoContext } from '../contexts/Sessao'

const assistencias = () => {

    const router = useRouter()

    const { user } = useContext(SessaoContext)

    const [pagina, setPagina] = useState([])
    const [carregado, setCarregado] = useState(false)

    useEffect(() => {
        if(user != undefined && user != null){
            api.get("/assistencia").then(res => {
                setPagina(res.data.content)
                setCarregado(true)
            }, err => {
                console.log(err.response);
                router.reload()
            })
        }
    }, [user])

    if (carregado) {
        return (
            <>
                <Navbar fixed={true} />
                {/* {pedido.length != 0 ? <Recomendadas /> : <BarraOtimiza />} */}
                <div className="flex flex-col items-center pt-24">
                    <div className="flex flex-col items-center sm:flex-row sm:justify-around w-full mt-16 mb-8">
                        <div className="">
                            <input type="text" className="bg-blue-dark h-8 text-white rounded-l-md p-2" placeholder="pesquisar" />
                            <button className="text-white bg-blue-dark p-1 rounded-r-md h-8"><FontAwesomeIcon icon={faSearch} /></button>
                        </div>
                        <ComboBox estilo={1} label="Filtro" opicao={["filtro"]} />
                    </div>
                    <hr className="text-black w-full lg:w-4/5 text-opacity-25" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 grid-rows-4 gap-8 w-4/5 mt-8">
                        {pagina.map((assistencia, i) =>
                            <CardAssistencia key={i} id={assistencia.id} nome={assistencia.nomeFantasia} avaliacao={assistencia.avaliacao} endereco={`${assistencia.enderecoEspecificos[0].enderecoGeral.cidade} - ${assistencia.enderecoEspecificos[0].enderecoGeral.estado}`} categorias="Celular" />
                        )}


                    </div>
                </div>

                {/* <Pagination /> */}
                <Footer />
            </>
        )
    } else {
        return (<Carregamento />)
    }
}

export default assistencias
