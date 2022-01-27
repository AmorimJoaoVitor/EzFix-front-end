/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router'
import React from 'react'
import Botao from '../../components/Botao'
import Footer from '../../components/Footer'
import FormLogin from '../../components/FormLogin'
import HeaderLogin from '../../components/HeaderLogin'
import Navbar from '../../components/tecnico/Navbar'
import { ValidacoesProvider } from '../../contexts/Validacoes'

const login = () => {

    const router = useRouter();

    return (
        <>
            <Navbar />
            <div className="w-full my-16 flex justify-around items-center">
                <div className="w-9/12 flex">
                    <div className="w-1/2 bg-blue-light border-2 border-r-0 border-solid border-opacity-10 border-black filter shadow-xl rounded-l-xl flex flex-col items-center p-8">
                        <img src="/undraw_secure_login_pdn4 1.svg" alt="" className="pr-8" />
                        <div className="flex flex-col items-center mt-8 mb-2 text-lg font-medium">
                            <p>Ainda não tem uma conta?</p>
                            <p>Crie a sua agora!</p>
                        </div>
                        <Botao estilo={7} onClick={() => {router.push("/tecnico/cadastro")}} text="cadastro" />
                    </div>
                    <div className="w-1/2 border-2 border-l-0 border-solid border-opacity-10 border-black filter shadow-xl rounded-r-xl flex flex-col items-center p-8 pb-20">
                        <HeaderLogin />
                        <ValidacoesProvider>
                            <FormLogin isTecnico={true}/>
                        </ValidacoesProvider>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default login
