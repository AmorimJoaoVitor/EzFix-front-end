import { createContext, useState } from "react";

export const CarrinhoContext = createContext({});

export const CarrinhoProvider = ({ children }) => {

    const [pedido, setPedido] = useState([])

    function remove(i) {
        let tmpPedido = pedido
        tmpPedido.splice(i, 1)
        setPedido(tmpPedido)
    }

    return (<CarrinhoContext.Provider value={{ pedido, setPedido, remove }}>{children}</CarrinhoContext.Provider>)
};