import React from 'react'

const Erros = ({erros}) => {
    
    if(erros.length > 0){
        return (
            <ul className="w-full bg-error border-2 border-error-dark rounded-md px-2 text-black filter shadow-md">
                { erros.map( (erro,i) => <li key={i} > *{ erro }</li>) }
            </ul>
        )
    }else {
        return <div className="w-full"/>
    }
    
}

export default Erros
