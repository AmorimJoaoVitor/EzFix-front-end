/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faReceipt, faUser, faCommentAlt, faSignOutAlt, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import SidebarTecnicoRedu from './SideBarTecnicoRedu'
import { destroyCookie, parseCookies } from 'nookies'
import { useRouter } from 'next/router'

const SidebarTecnico = () => {

    const [alternaSideBar, setAlternaSideBar] = useState(true);

    const cookies = parseCookies()
    const router = useRouter()

    useEffect(() => {
        if(cookies.token == undefined){
             router.push("/tecnico/login")
         }
    },[])

    if (alternaSideBar) {
        return <SidebarTecnicoRedu alternaSideBar={setAlternaSideBar} />;
    }
    else {
        return (
            <>
                <div className="min-w-20vw h-screen">
                    <aside className="fixed left-0 top-0 min-h-screen flex flex-row z-0">

                        <div className="flex flex-col w-20vw bg-blue overflow-hidden">

                            <div onClick={() => setAlternaSideBar(true)} className="flex justify-end mt-5 w-full">
                                <div className="hover:bg-blue-dark hover:text-white text-black rounded-full px-2 py-1 mr-3 cursor-pointer">
                                    <FontAwesomeIcon icon={faTimes} size="2x" />
                                </div>
                            </div>

                            <div className="flex items-center justify-center h-20">
                                <Image src="/ezfix_logo.png" width="150px" height="150px" alt="logo ezfix" />
                            </div>

                            <ul className="flex flex-col items-center justify-center w-full py-4">

                                <li className="flex items-center px-4 py-3 mt-1 w-5/6 rounded-2xl hover:bg-blue-dark hover:text-white text-black">
                                    <Link href="/DashboardInicio" passHref>
                                        <div>
                                            <div className="px-2 py-1 inline-flex items-center justify-center mr-2">
                                                <FontAwesomeIcon icon={faHome} size="2x" className="" />
                                            </div>
                                            <span className="text-xl font-bold">Inicio</span>
                                        </div>
                                    </Link>
                                </li>

                                <hr className="w-10/12 box mt-2 mb-2" />

                                <li className="flex items-center px-4 py-3 mt-1 w-5/6 rounded-2xl hover:bg-blue-dark hover:text-white text-black">
                                    <Link href="/pedidosTecnico" passHref>
                                        <div>
                                            <div className="px-2 py-1 inline-flex items-center justify-center mr-2">
                                                <FontAwesomeIcon icon={faReceipt} size="2x" />
                                            </div>
                                            <span className="text-xl font-bold h-20 w-20">Pedidos</span>
                                        </div>
                                    </Link>
                                </li>

                                <hr className="w-10/12 box mt-2 mb-2" />

                                <li className="flex items-center px-4 py-3 mt-1 w-5/6 rounded-2xl hover:bg-blue-dark hover:text-white text-black">
                                    <Link href="/perfiltecnico" passHref>
                                        <div>
                                            <div className="px-2 py-1 inline-flex items-center justify-center mr-2">
                                                <FontAwesomeIcon icon={faUser} size="2x" />
                                            </div>
                                            <span className="text-xl font-bold h-20 w-20">Perfil</span>
                                        </div>
                                    </Link>
                                </li>

                                <hr className="w-10/12 box mt-2 mb-2" />

                                <li className="flex items-center px-4 py-3 mt-1 w-5/6 rounded-2xl hover:bg-blue-dark hover:text-white text-black">
                                    <Link href="/tecnico/mensagens" passHref>
                                        <div>
                                            <div className="px-2 py-1 inline-flex items-center justify-center mr-2">
                                                <FontAwesomeIcon icon={faCommentAlt} size="2x" />
                                            </div>
                                            <span className="text-xl font-bold h-20 w-20">Mensagens</span>
                                        </div>
                                    </Link>
                                </li>

                                <hr className="w-10/12 box mt-2 mb-2" />

                                <li className="absolute bottom-2 flex justify-start items-center px-4 py-3 w-auto bg-blue-dark_light hover:bg-blue-dark rounded-2xl text-white ">
                                    <Link href="/tecnico/home" passHref>
                                        <div >
                                            <span className="w-9" onClick={() => {destroyCookie(null,"token");destroyCookie(null,"id");destroyCookie(null,"isTecnico");router.push("/tecnico/home")}}><FontAwesomeIcon icon={faSignOutAlt} size="2x" /></span>
                                            {/* <span className="ml-4 text-xl">Sair</span> */}
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </>
        )
    }
}

export default SidebarTecnico