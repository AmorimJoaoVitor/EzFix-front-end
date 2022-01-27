import React, { useState } from 'react'
import Botao from './Botao'
import ModalFormFiltro from './ModalFormFiltro';

const BarraOtimiza = () => {

    const [modalFiltro, setModalFiltro] = useState(false);

    return (
        <>
            <div className="pt-24 flex justify-around">
                <div className="w-4/5 flex flex-col items-center mt-16">
                    <div className="flex justify-center items-center bg-blue-light rounded-xl text-gray-dark font-bold px-6 py-3">
                        <span className="mr-10">Otimize a sua pesquisa!</span>
                        <Botao estilo={8} text="Vamos!" onClick={() => setModalFiltro(true)} />
                    </div>
                </div>
                {modalFiltro && <ModalFormFiltro setModal={setModalFiltro}/>}
            </div>
        </>
    )
}

export default BarraOtimiza
