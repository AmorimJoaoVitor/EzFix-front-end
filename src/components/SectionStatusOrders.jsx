import React, {useState, useEffect} from 'react'


const SectionStatusOrders = ({setMenu}) => {

  const [estilo1,setEstilo1] = useState("");
  const [estilo2,setEstilo2] = useState("");
  const [estilo3,setEstilo3] = useState("");
  const [radio,setRadio] = useState([true,false,false])

  useEffect(() => {
    if(radio[0]){
        setEstilo1("bg-blue-dark text-white")
        setEstilo2("bg-blue-light")
        setEstilo3("bg-blue-light")
    }
    if(radio[1]){
        setEstilo2("bg-blue-dark text-white")
        setEstilo1("bg-blue-light")
        setEstilo3("bg-blue-light")
    }
    if(radio[2]){
        setEstilo3("bg-blue-dark text-white")
        setEstilo1("bg-blue-light")
        setEstilo2("bg-blue-light")
    }
},[radio])

    return (
        <>
           <section className="flex items-center justify-between mt-7">
            <div className="p-6 bg-blue-light flex items-center rounded-full w-1/2 justify-around">
              <div onClick={() => {setMenu(1);setRadio([true,false,false])}} className={`${estilo1} cursor-pointer rounded-3xl py-2 px-10 hover:bg-blue-dark hover:text-white`}>
                <b>Novos</b>
              </div>
              <div onClick={() => {setMenu(2);setRadio([false,true,false])}} className={`${estilo2} cursor-pointer rounded-3xl py-2 px-10 hover:bg-blue-dark hover:text-white`}>
                <b>Em andamento</b>
              </div>
              <div onClick={() => {setMenu(3);setRadio([false,false,true])}} className={`${estilo3} cursor-pointer rounded-3xl py-2 px-10 hover:bg-blue-dark hover:text-white`}>
                <b>Finalizados</b>
              </div>
            </div>
            <div className="flex items-center">
              <b className="mr-3">Filtro:</b>
              <select className="p-4 bg-blue-light rounded-2xl" name="" id="">
                <option value="">Selecione</option>
              </select>
            </div>
          </section>
        </>
    )
}

export default SectionStatusOrders