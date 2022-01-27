import React from 'react'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Botao from './Botao'
import { useRouter } from 'next/router'

const HeaderPage = ({tituloPagina}) =>{

    const router = useRouter()

    return (
        <>
            <div className="pt-24 flex justify-around">
                <div className="w-4/5">
                    <div className="sm:w-full flex justify-between pb-3 mt-10 ">
                        <Botao onClick={() => {router.back()}} estilo={3} text="Voltar" icone={faArrowLeft}/>
                        <p className="text-3xl font-bold">{tituloPagina}</p>
                    </div>
                    <hr />


                </div>

            </div>
        </>
    )
}

export default HeaderPage
