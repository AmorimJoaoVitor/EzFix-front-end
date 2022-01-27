/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Carregamento = () => {
    return (
        <div className="w-full alturaSemNavbar grid grid-cols-3 grid-rows-3">
            <div className="row-span-1 col-span-1 col-start-2 row-start-2">
                <img src="/imagens-e-gifs-de-loading-7.gif" alt="" className="m-auto" />
            </div>
        </div>
    )
}

export default Carregamento
