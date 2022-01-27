/* eslint-disable @next/next/no-img-element */
import React from 'react'

const HeaderLogin = () => {
    return (
        <>
            <h1 className="text-3xl ">Login</h1>
            <div className="my-4 flex">
                <img src="/Google__G__Logo.svg" alt="" className="w-10 mr-8 cursor-pointer" />
                <img src="/Facebook_icon_2013.svg" alt="" className="w-10 cursor-pointer" />
            </div>
            <div className="w-full flex items-center">
                <hr className="w-1/4" />
                <p className="text-center w-1/2">Ou entre com email</p>
                <hr className="w-1/4" />
            </div>
        </>
    )
}

export default HeaderLogin
