import React from 'react'
import Label from './Label'

const Input = ({ label, pattern, disabled, alternativoDois, placeholder, alternativo, size, type, id, onChange, value, onBlur, maxLength }) => {

    

    let estiloAlternativoDois = "w-full rounded-lg p-4 h-10 filter drop-shadow-md ";

    disabled ? estiloAlternativoDois + "bg-gray" : estiloAlternativoDois + "bg-white" 

    if (alternativo) {

        let estilo = "pt-4 " + size;
        return (
            <div className={estilo}>
                <Label value={label + ":"} />
                <input pattern={pattern} disabled={disabled} maxLength={maxLength} id={id} value={value} onBlur={onBlur} type={type} onChange={onChange} className="w-full rounded-lg bg-blue-light px-4 h-10 filter drop-shadow-md" placeholder={placeholder} />
            </div>
        )
    } else if (alternativoDois) {
        let estilo = "pt-4 " + size;
        return (
            <div className={estilo}>
                <Label value={label + ":"} />
                <input pattern={pattern} disabled={disabled} maxLength={maxLength} id={id} value={value} onBlur={onBlur} type={type} onChange={onChange} className={estiloAlternativoDois} placeholder={placeholder} />
            </div>
        )

    }
    else {
        return (
            <div className="pt-2">
                <Label value={label + ":"} />
                <input maxLength={maxLength} id={id} value={value} onBlur={onBlur} type={type} onChange={onChange} className="w-full rounded-sm bg-white px-1" placeholder={placeholder} />
            </div>
        )
    }
}

export default Input
