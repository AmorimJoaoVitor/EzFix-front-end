/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Botao from '../components/Botao'


function erro() {

    const router = useRouter();

    return (
        <>

            <Navbar fixed={false} />
            <section className="flex w-full items-center justify-around p-40 font-bold text-4xl">
                <div className="border-solid  p-20" >
                    <h1 className="text text-8xl font-bold mb-8 text-blue" >Erro 404</h1>
                    <div>
                        <p className="mb-8"> Aparentemente </p>
                    </div>
                    <p className="mb-8"> está pagina não existe. </p>


                    <Botao estilo={3} onClick={() => { router.push("/index") }} text="voltar" />

                </div>
                <div>
                    <svg width="180" height="337" viewBox="0 0 215 337" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.6 276.4C21.6 276.4 14.2 273.8 8.4 268.6C2.8 263.2 8.49366e-07 256.6 8.49366e-07 248.8C8.49366e-07 240.8 2.8 234.1 8.4 228.7C14.2 223.3 21.6 220.6 30.6 220.6C39.4 220.6 46.6 223.3 52.2 228.7C58 234.1 60.9 240.8 60.9 248.8C60.9 256.6 58 263.2 52.2 268.6C46.6 273.8 39.4 276.4 30.6 276.4ZM30.6 154.3C21.6 154.3 14.2 151.7 8.4 146.5C2.8 141.1 8.49366e-07 134.5 8.49366e-07 126.7C8.49366e-07 118.7 2.8 112 8.4 106.6C14.2 101.2 21.6 98.5 30.6 98.5C39.4 98.5 46.6 101.2 52.2 106.6C58 112 60.9 118.7 60.9 126.7C60.9 134.5 58 141.1 52.2 146.5C46.6 151.7 39.4 154.3 30.6 154.3ZM160.854 336.7C141.454 318.1 126.354 294.1 115.554 264.7C104.754 235.3 99.3539 203.6 99.3539 169.6C99.3539 135.2 104.954 103.1 116.154 73.3C127.354 43.3 143.254 18.9 163.854 0.0999858H214.254V4.9C193.254 25.7 177.054 50.7 165.654 79.9C154.254 108.9 148.554 138.8 148.554 169.6C148.554 200.2 154.054 229.7 165.054 258.1C176.054 286.5 191.554 311.1 211.554 331.9V336.7H160.854Z" fill="#15374E" />
                    </svg>
                </div>


            </section>

            <Footer />
        </>
    )
}

export default erro