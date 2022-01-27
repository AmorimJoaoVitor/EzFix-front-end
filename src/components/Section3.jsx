import React from 'react'

const Section3 = () => {
    return (
        <>
            <div className="alturaSemNavbar grid lg:grid-cols-3 lg:grid-rows-3 grid-cols-3 grid-rows-5 bg-blue-light">
            <div className="w-full h-full flex justify-around sm:row-start-1 sm:row-span-1 sm:col-start-2 sm:col-span-2 row-start-4 row-span-1 col-start-1 col-span-3">
                <div className="w-4/6 h-full flex lg:items-end">
                    <h1 className="lg:text-3xl xl:text-4xl sm:text-2xl  font-bold">Uma plataforma com inúmeras assistências prontas para te atender!</h1>
                </div>
            </div>
            <div className="lg:row-start-2 sm:row-start-1 row-start-4 row-span-1 lg:col-start-2 lg:col-span-1 sm:col-start-2 sm:col-span-2  col-start-1 col-span-3 flex justify-around items-center lg:items-start lg:justify-end">
                <p className="lg:text-xl xl:text-3xl sm:text-xl lg:w-8/12 sm:mt-16 lg:m-0">Dentro da EzFix você terá uma vasta lista de técnicos em sua região que possa atender sua necessidade!</p>
            </div>
            <div className="overflow-hidden lg:row-start-1 lg:row-span-3 lg:col-start-1 lg:col-span-2 sm:row-start-2 sm:row-span-3 sm:col-start-2 sm:col-span-2 row-start-1 row-span-3 col-start-1 col-span-3">
                <div className="mt-16 w-full h-full flex justify-around items-center">
                    <div className="w-full lg:w-9/12">
                        <img src="./platform.png"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Section3
