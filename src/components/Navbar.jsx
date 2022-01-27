/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from 'react'
import Botao from './Botao'
import Image from 'next/image'
import Link from 'next/link'
import { parseCookies } from 'nookies'
import { useRouter } from 'next/router';
import { SessaoContext } from '../contexts/Sessao'
import MenuOpcoes from './MenuOpcoes'
import Carregamento from './Carregamento'

const Navbar = ({ fixed }) => {
    const router = useRouter();
    const cookies = parseCookies()

    const { user } = useContext(SessaoContext)
    const [menuAtivo, setMenuAtivo] = useState(false)
    const [logado, setLogado] = useState(false)
    const [carregado, setCarregado] = useState(false)

    useEffect(() => {
        if (cookies.token != undefined) {
            setLogado(true)
        } else if (router.route != "/login" && router.route != "/" && router.route != "/cadastro" && router.route != "/faq") {
            router.push("/login")
        }
    }, [])

    useEffect(() => {
        if(user != null || cookies.token == undefined){
            setCarregado(true)
        }
    },[user])

    let estilo = "bg-blue h-24 flex justify-around border-black border-opacity-10 border-solid border-b-2 w-full";

    if (fixed) {
        estilo += " fixed z-50";
    }

    if (carregado) {
        return (
            <div className={estilo}>
                <div className="flex justify-between items-center container w-11/12 sm:w-4/5">
                    <Link href="/" passHref>
                        <Image className="cursor-pointer" src="/ezfix_logo.png" width="150px" height="150px" alt="logo ezfix" />
                    </Link>
                    {logado ?
                        <div className="flex items-center">
                            <Link href="/perfilusuario" passHref>
                                < span className="text-white text-xl mr-4 font-semibold cursor-pointer">{user.nome}</span>
                            </Link>
                            <Link href="/perfilusuario" passHref>
                                <img src={`http://localhost:8080/solicitante/perfil/${user.cpf}`} className="rounded-full cursor-pointer" width="70px" height="70px" alt="logo ezfix" />
                            </Link>
                            <div className="ml-5 mr-10 cursor-pointer">
                                <img onClick={() => setMenuAtivo(!menuAtivo)} src="/MenuArrow.png" width="20px" height="20px" className={menuAtivo ? "transform-gpu -rotate-180" : "transform-gpu rotate-0"} />
                            </div>
                            <Image className="cursor-pointer" src="/notification.png" width="35px" height="35px" alt="notification" />

                            {menuAtivo && <MenuOpcoes />}

                        </div>
                        : <div>
                            <Link href="/cadastro" passHref>
                                <span className="text-white mr-4 cursor-pointer hover:underline">Criar conta</span>
                            </Link>
                            <Botao estilo={2} text="Login" onClick={() => { router.push("/login") }} />
                        </div>
                    }
                </div>
            </div >
        )
    } else {
        return (<Carregamento />)
    }
}

export default Navbar