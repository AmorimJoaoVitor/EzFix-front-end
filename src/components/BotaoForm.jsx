import React from 'react'

const BotaoForm = ({ onClick, text, type,size}) => {

    return (
        <div className={` w-${size} flex justify-around pt-8`} >
            <button type={type} className="filter shadow-lg bg-blue-dark w-max min-w-min py-3 px-8 rounded-3xl text-white hover:bg-blue-light duration-75" onClick={onClick}>{text}</button>
        </div>
    )


}

export default BotaoForm
