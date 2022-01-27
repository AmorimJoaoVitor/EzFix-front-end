import React from 'react'
import Image from 'next/image'


const Section22_tecnico = () => {
    return (
        <div id="teste" className="w-full min-h-screen max-h-screen/2 flex justify-around items-center">


            <div className="w-2/4 flex flex-col justify-center">
                {/* <img src="/undraw_Questions_re_1fy7.svg" alt="" className="xl:w-2/4 lg:w-2/5 hidden lg:block" /> */}
                <h1 className="font-bold text-3xl w-4/6 mb-8 ">Tenha uma melhor gestão do seu negócio</h1>
                <p className="text-xl font-medium w-4/6">Em nossa plataforma você poderá escolher um plano de acordo com as suas demandas.</p>
            </div>

            <div className="rounded-2xl p-5">
                <Image src="/monitor-dash-tec.png" alt="grafico" width={504} height={356}/>
            </div>

        </div>
    )
}

export default Section22_tecnico