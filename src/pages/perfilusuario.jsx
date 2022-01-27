/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from 'react'
import Carregamento from '../components/Carregamento'
import Footer from '../components/Footer'
import InfosUsuario from '../components/InfosUsuario'
import ModalNovoEndereco from '../components/ModalNovoEndereco'
import Navbar from '../components/Navbar'
import { SessaoContext } from '../contexts/Sessao'
import { ValidacoesProvider } from '../contexts/Validacoes'

const perfilusuario = () => {

    const [novoEndereco, setNovoEndereco] = useState(false);
    const [carregado, setCarregado] = useState(false)

    const { user } = useContext(SessaoContext)

    const [contador, setContador] = useState(0)
    
    useEffect(() => {
        setContador(contador + 1)
        if (contador > 1 || Object.keys(user).length !== 0) {
            setCarregado(true)
        }
    }, [user])

    if (carregado) {
        return (
            <>
                <ValidacoesProvider>
                    {novoEndereco && <ModalNovoEndereco setNovoEndereco={setNovoEndereco} />}
                    <Navbar />

                    <InfosUsuario setNovoEndereco={setNovoEndereco} />
                </ValidacoesProvider>
                <Footer />
            </>
        )
    } else {
        return (
            <>
                <Navbar fixed={false} />
                <Carregamento />
            </>
        )
    }
}

export default perfilusuario
