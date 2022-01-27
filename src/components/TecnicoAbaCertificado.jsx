/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { api } from '../api/api'
import Botao from './Botao'
import CardCertificacao from './CardCertificacao'
import Carregamento from './Carregamento'

const TecnicoAbaCertificado = ({ setModalNovoCert, setModalEditar, novidade, id }) => {


    const [carregado, setCarregado] = useState(false)
    const [certificados, serCertificados] = useState([])

    useEffect(() => {
        api(`/certificacoes/${id}`).then(res => {
            setCarregado(true)
            serCertificados(res.data)
            console.log(res.data);
        }, err => {
            console.log(err.response);
        })
    }, [novidade])

    if (carregado) {
        return (
            <>
                <div className="grid grid-cols-1 gap-10 justify-start w-full mt-32">
                    {certificados.map((certificado, i) =>
                        <CardCertificacao setModalEditar={setModalEditar} key={i} nomeCurso={certificado.nomeCurso} dataConclusao={certificado.dataConclusao} dataInicio={certificado.dataInicio} cargaHoraria={certificado.quantidadeHoras} alternativo={true} />
                    )}
                </div>
                <Botao estilo={5} text="Adicionar" onClick={() => setModalNovoCert(true)} />

            </>
        )
    } else {
        return (
            <>
                <Carregamento />
            </>
        )
    }
}

export default TecnicoAbaCertificado
