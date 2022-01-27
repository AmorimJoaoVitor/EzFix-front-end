import { useRouter } from 'next/router';
import React from 'react'
import Botao from './Botao'

const Banner = () => {
    const router = useRouter();

    return (
        <div className="sm:bg-banner bg-cover pt-24">
            <div className="alturaSemNavbar w-full bg-black sm:bg-opacity-0 flex justify-around">
                <div className="container h-full flex items-center sm:w-4/5 justify-around lg:justify-start">
                    <div className="p-4 lg:w-3/4 w-full min-w-min rounded-xl">
                        <h1 className="sm:text-4xl lg:text-4xl xl:text-5xl text-xl text-white font-bold mb-4">Está com dificuldade para encontrar uma assistência técnica ideal?</h1>
                        <hr className="text-white sm:w-2/3 text-opacity-25 filter drop-shadow-md" />
                        <p className="text-white lg:text-2xl sm:text-xl xl:text-4xl text-xl  w-full sm:w-3/4 my-4">Nós a EZFix vamos te proporcionar uma busca simples e em poucos passos. Vamos lá?</p>
                        <hr className="text-white sm:w-1/2 text-opacity-25 filter drop-shadow-md" />
                        <div className="sm:w-2/3 mt-4">
                            <Botao text="Vamos!" estilo={0} onClick={() => {router.push("#teste")}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
