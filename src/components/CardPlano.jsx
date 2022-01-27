import React from 'react'

const CardPlano = ({ pacote, onClick, estilo }) => {

    const planos = ["Básico", "Intermediário", "Avançado"];
    const precos = ["Grátis", "100,00/mês", "175,00/mês"];


    const beneficios = [

        <ul key={0} className="self-start list-disc"><li>Acesso a dashboard</li>
            <li>Suporte 24/7</li></ul>,

        <ul key={1} className="self-start list-disc"><li>Acesso a dashboard</li>
            <li>Suporte 24/7</li>
            <li>Frete grátis até 5 km</li>
            <li>Destaque na plataforma 2 semana/mês</li>
        </ul>,

        <ul key={2} className="self-start list-disc"><li>Suporte 24/7</li>
            <li>Frete grátis até 10 km</li>
            <li>Destaque na plataforma todos os dias</li>
            <li>Métricas personalizadas</li>
        </ul>
    ];
    
    return (
        <>
            <div onClick={onClick} className={`${estilo} transform flex flex-col items-center rounded-2xl h-96 p-10 cursor-pointer`}>
                <h1 className="font-bold text-3xl">{planos[pacote]}</h1>
                <span className="text-gray-dark mt-2 mb-5">{precos[pacote]}</span>
                {beneficios[pacote]}
            </div>
        </>
    )
}

export default CardPlano
