import React from 'react'
import Label from './Label'

const ComboBox = ({ estilo, label, opicao, onChange }) => {

    switch (estilo) {
        case 1:
            return (
                <div className="flex w-52">
                    <div className="font-bold flex items-center mr-2">
                        <Label value={label + ":"} />
                    </div>
                    <select onChange={onChange} className="w-full text-white rounded-md bg-blue-dark px-1">
                        {opicao.map((item, index) =>  <option value={item} key={index}>{item}</option> )}
                    </select>
                </div>
            )

        case 2:
            return (
                <div className="pt-4 w-4/5">
                    <Label value={label + ":"} />
                    <select onChange={onChange} className="w-full rounded-lg bg-blue-light h-10 filter drop-shadow-md text-center">
                        {opicao.map((item, index) =>  <option value={item} key={index}>{item}</option> )}
                    </select>
                </div>
            )
        default:
            return (
                <div className="pt-2">
                    <Label value={label + ":"} />
                    <select onChange={onChange} className="w-full bg-white px-1">
                        {opicao.map((item, index) =>  <option value={item} key={index}>{item}</option> )}
                    </select>
                </div>
            )
    }
}

export default ComboBox
