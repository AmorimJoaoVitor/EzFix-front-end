import { useRouter } from 'next/router';
import { destroyCookie } from 'nookies';
import React from 'react'

const MenuOpcoes = () => {

    const router = useRouter();

    return (
        <>
            <div className="bg-blue-dark_light w-12 h-fit z-10 top-24 left-3/4 right-20 bottom-0 absolute p-3 rounded-b-2xl">
                            <div className="text-white font-bold leading-10">
                                <ul>
                                    <li onClick={() => {router.push("/assistencias")}} className=" hover:text-blue-light">inicio</li>
                                    <li onClick={() => {router.push("/myorders")}} className=" hover:text-blue-light">Pedidos</li>
                                    <li onClick={() => {router.push("/perfilusuario")}} className=" hover:text-blue-light">Perfil</li>
                                    <li onClick={() => {router.push("/mensagens")}} className=" hover:text-blue-light">Mensagens</li>
                                    <li className=" hover:text-blue-light">Ajuda</li>
                                    <hr className="text text-gray" />
                                    <li onClick={() => {destroyCookie(null,"token");destroyCookie(null,"isTecnico");destroyCookie(null,"cpf");router.push("/")}} className=" hover:text-blue-light">Sair</li>
                                </ul>
                            </div>
                        </div>
        </>
    )
}

export default MenuOpcoes
