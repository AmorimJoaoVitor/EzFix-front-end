/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { api } from '../api/api'
import { SessaoContext } from '../contexts/Sessao'
import DadosContaUsuario from './DadosContaUsuario'
import DadosPessoaisUsuario from './DadosPessoaisUsuario'
import EnderecosUsuario from './EnderecosUsuario'

const InfosUsuario = ({setNovoEndereco}) => {
    const { user } = useContext(SessaoContext)
    const router = useRouter();

    function handlelUplod(e) {

        var formdata = new FormData();
        formdata.append("img", e[0], e[0].name);
        api.post(`http://localhost:8080/solicitante/perfil/${user.cpf}`,formdata)
        .then(res => {
            router.reload();
        },err => {
            console.log(err.response);
        })

        
    }

    return (
        <>
            <div className="w-full flex justify-around">
                <div className="sm:w-4/5 mt-8 mb-20 p-10 border-2 border-solid border-opacity-10 border-black filter shadow-xl rounded-xl">
                    <div className="flex mb-10">
                        <img src={`http://localhost:8080/solicitante/perfil/${user.cpf}`} alt="img" width="160px" className="rounded-full" />
                        <div className="ml-8 text-3xl font-bold flex flex-col">
                            <span>{user.nome}</span>
                            <div className="text-base mt-16">
                                <label htmlFor="img" className="cursor-pointer bg-blue-dark py-3 px-5 rounded-3xl text-white">Mudar Imagem</label>
                                <input onChange={e => { handlelUplod(e.target.files) }} id="img" type="file" className="hidden" />
                            </div>
                        </div>
                    </div>
                    <hr className="w-1/2 mr-auto ml-auto mb-10 mt-10"/>
                    <DadosContaUsuario/>
                    <hr className="w-1/2 mr-auto ml-auto mb-10 mt-10"/>
                    <DadosPessoaisUsuario />
                    <hr className="w-1/2 mr-auto ml-auto mb-10 mt-10"/>
                    <EnderecosUsuario setNovoEndereco={setNovoEndereco}/>
                </div>

            </div>
        </>
    )
}

export default InfosUsuario
