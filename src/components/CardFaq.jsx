import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const CardFaq = ({ pergunta, resposta }) => {
    const [sectionExt, setSectionExt] = useState(false);
    return (

        <div className="mt-8">

            <div onClick={() => setSectionExt(!sectionExt)} className={sectionExt ? "bg-blue-light w-full rounded-2xl flex justify-between p-5"
                : "bg-blue-light w-full rounded-2xl flex justify-between p-5"} >
                <b className="text-2xl">{pergunta}</b>
                <FontAwesomeIcon icon={sectionExt ? faPlus : faPlus} size="1x" className="align-middle" onClick={() => setSectionExt(!sectionExt)} />

            </div>
            {sectionExt &&
                <div className="bg-gray-light p-5 rounded-b-2xl">
                    <p className="text-xl">
                        {resposta}
                    </p>
                </div>
            }
        </div>



    )


}


export default CardFaq
