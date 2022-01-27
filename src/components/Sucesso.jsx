import React from 'react'

const Sucesso = ({msg}) => {
    if (msg){
        return (
            <div className="w-full bg-green p-2 rounded-md text-black filter shadow-md">
                {msg}
            </div>
        )
    }else{
        return <div/>
    }
    
}

export default Sucesso
