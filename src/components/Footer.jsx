import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className="bg-blue-dark flex items-center flex-col text-white text-center">
            <Image src='/ezfix_logo.png' alt="logo ezfix" height="150" width="150" />
            <p className="sm:w-6/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <Link href="/tecnico/home" passHref>
                <p className="mt-4 cursor-pointer" >seja uma assistência parceira</p>
            </Link>
            <div className="w-full sm:w-6/12 lg:w-3/12 flex justify-evenly mt-8">
                <p>Lalamove</p>
                <Link href="/faq" passHref>
                <p>FAQs</p>
                </Link>
                <p>Suporte</p>
            </div>
            <div className="w-6/12 sm:w-3/12 lg:w-2/12 flex justify-around mt-8">
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faInstagram} />
            </div>
            <p className="my-8">Copyright © 2021. Ezfix. All rights reserved.</p>
        </div>
    )
}

export default Footer
