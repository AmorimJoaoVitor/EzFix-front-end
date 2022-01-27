import React from 'react'
import Image from 'next/image'


const Section2_tecnico = () => {
    return (
        <div id="teste" className="w-full min-h-screen max-h-screen/2 flex justify-around items-center">
            <div className="w-2/4 flex flex-col justify-center">
                <h1 className="font-bold text-3xl w-4/6 mb-8 ">Tenha mais clientes dentro de nossa plataforma</h1>
                <p className="text-xl font-medium w-4/6">Dentro da EZFIX sua empresa terá o destaque que merece, contando com uma lista de clientes prontos para solicitar os seus serviços!</p>
            </div>
                <Image src="/Performance-Graph 1.jpg" alt="grafico" width={553}  height={446} />
        </div>
    )
}

export default Section2_tecnico
