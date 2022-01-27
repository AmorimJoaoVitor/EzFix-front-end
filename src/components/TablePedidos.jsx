import { faCaretDown, faCaretRight, faChevronDown, faChevronRight, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fileDownload from 'js-file-download';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { api } from '../api/api';
import Bola from './Bola';

const TablePedidos = ({ nome, status, id, data, itens}) => {

  const [sectionExt, setSectionExt] = useState(false);
  const [etapa, setEtapa] = useState("")
  const [estilo, setEstilo] = useState("")

  const router = useRouter();

  useEffect(() => {
    if (status == "aguardando resposta tecnico") {
      setEtapa("Novo")
      setEstilo("bg-roxo")
    } else if(status == "concluido") {
      setEtapa("concluido")
      setEstilo("bg-green")
    }else {
      setEtapa("Em andamento")
      setEstilo("bg-amarelo-andamento")
    }
  }, [status])

  function baixar() {
    api.get(`/orcamentos/nota/${id}`,{responseType: 'blob'}).then(res => {
      fileDownload(res.data,"itensPedido.txt")
    }, err => {
    })
  }

  return (
    <>
      <div className={sectionExt ? "flex items-center justify-around py-2 bg-blue-light_dark rounded-t-2xl mt-7  "
        : "flex items-center justify-around bg-blue-light_dark py-2 rounded-2xl mt-7"}>

        <p>{nome}</p>
        <div className="flex items-center justify-center">
          <div className={`h-6 w-6 rounded-full ${estilo} mr-4`}></div>
          <span>{etapa}</span>
        </div>
        <div className="w-52 flex items-center justify-around">
          <span>{data}</span>
          <span className="font-bold">#{id}</span>

        </div>
        <div className="flex items-center w-48 justify-evenly">
          <FontAwesomeIcon icon={faFileDownload} size="lg" className="hover:text-white cursor-pointer " onClick={baixar} />
          <div onClick={() => { etapa == "Novo" ? router.push(`/criaorcamento?${id}`) : router.push(`/tecnico/detalhesorcamento?${id}`) }} className="bg-gray-opacity rounded-3xl py-2 px-4 text-white font-semibold hover:bg-gray-dark cursor-pointer">
            Detalhes
          </div>

            <div className="cursor-pointer" onClick={() => setSectionExt(!sectionExt)}>
              <FontAwesomeIcon icon={sectionExt ? faCaretDown : faCaretRight} size="2x" className="align-middle" />
            </div>
          </div>

        </div>

        {sectionExt &&
          <div className="flex justify-center w-full">
            <table className="w-full rounded-b-2xl bg-blue-light">
              <thead>
                <tr>
                  <th className="border-gray border-solid  border-t py-4">Produto</th>
                  <th className="border-gray border-solid border py-4">Marca</th>
                  <th className="border-gray border-solid border py-4">Modelo</th>
                  <th className="border-gray border-solid border-t py-4">Categoria</th>
                </tr>
              </thead>
              <tbody>

                {itens.map((item, i) =>
                (<tr key={i}>
                  <td className="border-gray border-solid border-t py-3 text-center">{item.produto.tipo}</td>
                  <td className="border-gray border-solid border py-3 text-center">{item.produto.marca}</td>
                  <td className="border-gray border-solid border py-3 text-center">{item.produto.modelo}</td>
                  <td className="border-gray border-solid  border-t py-3 text-center">{item.problema}</td>
                </tr>)
                )}
              </tbody>
            </table>
          </div>
        }

      </>
    )
  }

export default TablePedidos
