import React from 'react'

const EtapaLinha = ({ checked }) => {
    if (checked) {
        return (
            <div className="flex items-center">
                <hr className="w-16 text-blue-dark border-4" />
            </div>
        )
    } else {

        return (
            <div className="flex items-center">
                <hr className="w-16 text-blue border-4" />
            </div>
        )
    }
}

export default EtapaLinha
