import React from 'react'
import Label from './Label'

const TextArea = ({ label, placeholder, type, id, onChange, value, onBlur, maxLength, alternativo }) => {
    if (alternativo) {
        return (
            <div className="pt-2">
                <Label value={label + ":"} />
                <textarea maxLength={maxLength} id={id} value={value} onBlur={onBlur} type={type} onChange={onChange} className="w-full h-16 p-2 rounded-xl bg-blue-light resize-none" placeholder={placeholder} cols="30" rows="10"></textarea>
            </div>
        )
    }
    else {
        return (
            <div className="pt-2">
                <Label value={label + ":"} />
                <textarea maxLength={maxLength} id={id} value={value} onBlur={onBlur} type={type} onChange={onChange} className="w-full p-1" placeholder={placeholder} cols="30" rows="10"></textarea>
            </div>
        )

    }
}

export default TextArea
