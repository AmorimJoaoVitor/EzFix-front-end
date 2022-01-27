import React from 'react'
import BodyCadastro from '../../components/BodyCadastro'
import Footer from '../../components/Footer'
import Navbar from  "../../components/tecnico/Navbar"
import { CadastroProvider } from '../../contexts/Cadastro'

const Cadastro = () => {
    return (
        <>
            <Navbar />
            <CadastroProvider>
                <BodyCadastro isTecnico={true} />
            </CadastroProvider>
            <Footer />
        </>
    )
}

export default Cadastro
