/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faReceipt, faUser, faCommentAlt, faSignOutAlt, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { destroyCookie, parseCookies } from 'nookies'
import { useRouter } from 'next/router'

const SidebarTecnicoRedu = ({ alternaSideBar }) => {

    const cookies = parseCookies()
    const router = useRouter()

    useEffect(() => {
        if(cookies.token == undefined){
            router.push("/tecnico/login")
        }
    },[])

    return (
        <>
        <div className="w-3vw h-screen"> 
            <div className="fixed flex flex-col bg-blue w-3vw h-screen px-4 items-center text-sm font-bold">

                <div onClick={() => alternaSideBar(false)} className="flex px-2 py-2 mt-5 rounded-2xl cursor-pointer hover:bg-blue-dark hover:text-white text-black ">
                    <span className="w-3/5 cursor-pointer"><FontAwesomeIcon icon={faBars} size="2x" /></span>
                </div>

                {/* <div className="flex items-center justify-center mt-10 ">
    <Image className="cursor-pointer" src="/ezfix_logo.png" width="150px" height="150px" alt="logo ezfix" />
</div> */}

                <div className="absolute w-full flex flex-col justify-center items-center top-40">
                    <li className="flex justify-start items-center px-4 py-3 mt-2 w-auto rounded-2xl hover:bg-blue-dark hover:text-white text-black ">
                        <Link href="/DashboardInicio" passHref>
                            <div>
                                <span className="w-9"><FontAwesomeIcon icon={faHome} size="2x" /></span>
                                {/* <span className="ml-4 text-xl">Inicío</span> */}
                            </div>
                        </Link>
                    </li>

                    <hr className="w-11/12 box mt-2 mb-2" />

                    <li className="flex justify-start items-center px-4 py-3 mt-2 w-auto rounded-2xl hover:bg-blue-dark hover:text-white text-black ">
                        <Link href="/pedidosTecnico" passHref>
                            <div>
                                <span className="w-9"><FontAwesomeIcon icon={faReceipt} size="2x" /></span>
                                {/* <span className="ml-4 text-xl">Pedidos</span> */}
                            </div>
                        </Link>
                    </li>

                    <hr className="w-11/12 box mt-2 mb-2" />

                    <li className="flex justify-start items-center px-4 py-3 mt-2 w-auto rounded-2xl hover:bg-blue-dark hover:text-white text-black ">
                        <Link href="/perfiltecnico" passHref>
                            <div>
                                <span className="w-9"><FontAwesomeIcon icon={faUser} size="2x" /></span>
                                {/* <span className="ml-4 text-xl">Perfil</span> */}
                            </div>
                        </Link>
                    </li>

                    <hr className="w-11/12 box mt-2 mb-2" />

                    <li className="flex justify-start items-center px-4 py-3 mt-2 w-auto rounded-2xl hover:bg-blue-dark hover:text-white text-black ">
                        <Link href="/tecnico/mensagens" passHref>
                            <div>
                                <span className="w-9 "><FontAwesomeIcon icon={faCommentAlt} size="2x" /></span>
                                {/* <span className="ml-4 text-xl">Mensagens</span> */}
                            </div>
                        </Link>
                    </li>

                </div>

                <li onClick={() => {destroyCookie(null,"token");destroyCookie(null,"id");destroyCookie(null,"isTecnico");router.push("/tecnico/home")}} className="absolute bottom-10 flex justify-start items-center p-2 mt-2 w-auto bg-blue-dark_light hover:bg-blue-dark rounded-2xl text-white ">
                    <Link href="/tecnico/home" passHref>
                        <div >
                            <FontAwesomeIcon icon={faSignOutAlt} size="2x"/>
                        </div>
                    </Link>
                </li>
            </div>

            </div>

        </>

    )
}

export default SidebarTecnicoRedu