import React from 'react'
import Image from 'next/image'


const Section21_tecnico = () => {
    return (
        <div id="teste" className="w-full min-h-screen max-h-screen/2 flex justify-around items-center rounded-sm">

            <div className="rounded-2x1">
                <Image src="/ranking-tecnico.png" alt="grafico" width={562} height={463}/>
            </div>

            <div className="w-2/4 flex flex-col justify-center">
                {/* <img src="/undraw_Questions_re_1fy7.svg" alt="" className="xl:w-2/4 lg:w-2/5 hidden lg:block" /> */}
                <h1 className="font-bold text-3xl w-4/6 mb-8 ">Destaque a sua empresa com nosso sistema de planos</h1>
                <p className="text-xl font-medium w-4/6">Eleve sua assistência ao topo em qualidade e serviço, e nós cuidamos do resto :).</p>
            </div>


        </div>
    )
}

export default Section21_tecnico