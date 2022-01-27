import Etapa from "./Etapa";
import EtapaLinha from "./EtapaLinha";
import Etapas from "./Etapas";
import Botao from "./Botao";

const BoxEtapas = () => {
    return (
        <>

            <div className="flex items-center justify-center w-full ">
                <div className="flex-col flex h-96 justify-evenly">
                    <div className="flex-col flex">
                        <div className="flex items-center">
                            <Etapa /> <EtapaLinha />
                        </div>
                        <p className="mt-3">Em transporte</p>
                    </div>
                    <div className="flex flex-col">
                        <p>18/11/2021</p>
                        <p>14:36</p>
                    </div>
                </div>
                <div className="flex-col flex h-96 justify-evenly">
                    <div className="flex-col flex">
                        <div className="flex items-center">
                            <Etapa /> <EtapaLinha />
                        </div>
                        <p className="mt-3">Recebido</p>
                    </div>
                    <div className="flex flex-col">
                        <p>18/11/2021</p>
                        <p>14:36</p>
                    </div>
                </div>
                <div className="flex-col flex h-96 justify-evenly">
                    <div className="flex-col flex">
                        <div className="flex items-center">
                            <Etapa /> <EtapaLinha />
                        </div>
                        <p className="mt-3">Em Reparo</p>
                    </div>
                    <div className="flex flex-col">
                        <p>18/11/2021</p>
                        <p>14:36</p>
                    </div>
                </div>
                <div className="flex-col flex h-96 justify-evenly">
                    <div className="flex-col flex">
                        <div className="flex items-center">
                            <Etapa /> <EtapaLinha />
                        </div>
                        <p className="mt-3">Indo até você</p>
                    </div>
                    <div className="flex flex-col">
                        <p>18/11/2021</p>
                        <p>14:36</p>
                    </div>
                </div>
                <div className="flex-col flex h-96 justify-evenly">
                    <div className="flex-col flex">
                        <div className="flex items-center">
                            <Etapa /> <EtapaLinha />
                        </div>
                        <p className="mt-3">Pedido entregue</p>
                    </div>
                    <div className="flex flex-col">
                        <button className="bg-blue-dark text-xs p-4 rounded-2xl text-white  hover:bg-blue">Confirmar entrega</button>
                    </div>
                </div>
            </div>

            {/* <div className="flex flex-col items-center">

                <p>Em transporte</p>
                <p>18/11/2021</p>
                <p>14:36</p>

            </div> */}


        </>
    )
}

export default BoxEtapas;