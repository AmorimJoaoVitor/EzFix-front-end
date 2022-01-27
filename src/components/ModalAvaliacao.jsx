import ReactStars from "react-rating-stars-component";
import React, { useContext, useState } from "react";
import Botao from "../components/Botao";
import { ValidacoesContext } from "../contexts/Validacoes";
import Erros from "./Erros";
import { api } from "../api/api";
import { useRouter } from "next/router";


const ModalAvaliacao = ({pedido}) => {

    const [avaliacao, setAvaliacao] = useState();
    const [comentario, setComentario] = useState("");
    const router = useRouter()

    const { erros, setErros, isBlank } = useContext(ValidacoesContext)

    function envia() {

        let tmpErros = isBlank({avaliacao,comentario})
        console.log();
        console.log();
        console.log();
        setErros([...tmpErros])
        if (tmpErros.length == 0) {
            api.post("/comentario",{
                "comentario":comentario,
                "avaliacao": avaliacao,
                "assistencia":{"id":pedido.assistencia.id},
                "solicitante":{"cpf":pedido.solicitante.cpf},
                "orcamento":{"id":pedido.id}
            }).then(res => {
                api.put(`/orcamentos`, {
                    "id": pedido.id,
                    "status": "concluido"
                }).then(res => {
                    router.reload()
                },err => {

                })
            },err => {
                setErros(["algo inesperado ocorreu tente novamente mais tarde"])
            })
        }
    }

    return (
        <>
            <div className="bg-gray-opacity w-full h-screen z-10 top-0 left-0 right-0 bottom-0 fixed">
                <div className="w-full h-screen flex justify-center items-center">
                    <div className="bg-white p-20 rounded-xl flex flex-col justify-center items-center">
                        <h1 className="font-bold text-3xl">Avalie o Serviço</h1>
                        <Erros erros={erros}/>
                        <ReactStars
                            count={5}
                            onChange={ a => setAvaliacao(a)}
                            size={100}
                            activeColor="#ffd700"
                            isHalf={true}
                        />
                        <div className="flex justify-between w-full mb-5">
                            <span>Deixe um comentário sobre:</span>
                            <span className="text-gray-dark">{comentario.length}/50</span>
                        </div>
                        <input maxLength="50" value={comentario} onChange={e => { setComentario(e.target.value) }} type="text" className="bg-blue-light p-4 rounded-2xl mb-5 w-full" />
                        <Botao text="Avaliar" estilo={8} onClick={envia}/>
                    </div>
                </div>
            </div>
        </>
    )

}


export default ModalAvaliacao