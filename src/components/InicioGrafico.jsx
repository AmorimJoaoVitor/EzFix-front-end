import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Grafico from "../components/Grafico"


const InicioGrafico = () => {

    const [receitaSmartphone, setReceitaSmartphone] = useState(1200);
    const [receitaNotebook, setReceitaNotebook] = useState(800);
    const [receitaDesktop, setReceitaDesktop] = useState(750);
    const [receitaOutros, setReceitaOutros] = useState(300);

    return (
        <>
            <div className="flex ml-10 mt-5 mb-4 bg-blue-light shadow-lg">
                <div className="flex flex-row w-auto rounded-md mt-2 m-5 items-center">
                    <div className="ml-4 mr-6">
                        <Grafico valorSmartphone={receitaSmartphone} valorNotebook={receitaNotebook} valorDesktop={receitaDesktop} valorOutros={receitaOutros} />
                    </div>
                    
                    <div className="flex flex-col justify-center items-center mt-4 mb-5">
                        <span className="font-bold">Receitas</span>
                        <div className="grid grid-cols-2 gap-4 mt-5 justify-center items-center">
                            <div className="w-auto  justify-center">
                                <div className="inline-block h-5 w-5 bg-roxo rounded-full shadow-lg mr-3"></div>
                                <span>Smartphone</span>
                                <div>
                                    <span className="ml-8 font-bold">R${receitaSmartphone}</span>
                                </div>
                            </div>
                            <div className="w-auto ">
                                <div className="inline-block h-5 w-5 bg-amarelo rounded-full shadow-lg mr-3"></div>
                                <span>Notebook</span>
                                <div>
                                    <span className="ml-8 font-bold">R${receitaNotebook}</span>
                                </div>
                            </div>
                            <div className="w-auto ">
                                <div className="inline-block h-5 w-5 bg-green rounded-full shadow-lg mr-3"></div>
                                <span>Desktop</span>
                                <div>
                                    <span className="ml-8 font-bold">R${receitaDesktop}</span>
                                </div>
                            </div>
                            <div className="w-auto ">
                                <div>
                                    <div className="inline-block h-5 w-5 bg-gray-dark rounded-full shadow-lg mr-3"></div>
                                    <span>Outros</span>
                                </div>
                                <span className="ml-8 font-bold">R${receitaOutros}</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default InicioGrafico;