/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react"
import SidebarTecnico from "../components/SidebarTecnico"
import InicioAcompanhamento from "../components/InicioAcompanhamento"
import InicioUltimasAvaliacoes from "../components/InicioUltimasAvaliacoes"
import InicioGrafico from "../components/InicioGrafico"
import { SessaoContext } from "../contexts/Sessao"
import Carregamento from "../components/Carregamento"


const DashboardInicio = () => {

    const { user } = useContext(SessaoContext)
    const [carregado, setCarregado] = useState(false)

    useEffect(() => {
        if (Object.keys(user).length !== 0) {
            console.log(user);
            setCarregado(true)
        }
    }, [user])
    if (carregado) {
        return (
            <>
                <div className="flex">
                    <SidebarTecnico />
                    <div>
                        <InicioAcompanhamento id={user.id}/>
                        <InicioUltimasAvaliacoes id={user.id}/>
                        {/* <InicioGrafico /> */}
                    </div>
                </div>
            </>
        )
    } else {
        return (<Carregamento />)
    }
}

export default DashboardInicio
