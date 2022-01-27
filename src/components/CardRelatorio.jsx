import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { CarrinhoContext } from '../contexts/Carrinho'

const CardRelatorio = ({ produto, problema, modelo, descricao,key, id }) => {

    const { remove } = useContext(CarrinhoContext)

    function remover(i){
        remove(i.id)
        var div = i.parentElement
        i.parentElement.parentElement.removeChild(div)
    }

    return (
        <>
            <div key={key} className="flex flex-col items-start bg-white mt-10 p-5 rounded-xl">
                <p className="text-xl font-semibold">{produto} • {problema}</p>
                <p className="font-medium text-base mt-2">{modelo}</p>
                <p className="mt-2 font-normal">{descricao}</p>
                <div className="w-full flex justify-end" id={id}>
                    <FontAwesomeIcon onClick={e => { remover(e.target.parentElement.parentElement); }} icon={faTrash} />
                </div>
            </div>
        </>
    )
}

export default CardRelatorio
