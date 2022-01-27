import React from 'react'

const Etapa = ({ etapa, checked }) => {
    if (checked) {
        return (
            <div className="bg-blue-dark rounded-full w-16 h-16 flex justify-around items-center font-bold text-lg text-white">{etapa}</div>
        )
    } else {

        return (
            <div className="bg-blue rounded-full w-16 h-16 flex justify-around items-center font-bold text-lg text-white">{etapa}</div>
        )
    }
}

export default Etapa
