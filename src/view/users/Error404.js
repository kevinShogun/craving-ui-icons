import React from 'react'
import { Button } from '../../components/Button'
import { Div } from '../../components/Div'
import circulo402 from '../../img/circulo402.png'

import { FaArrowLeft } from 'react-icons/fa';

export const Error404 = () => {
    return (
        <Div $containerprymari>
            
                <div className="fixed w-full h-auto flex justify-center items-center z-10">
                    <img src={ circulo402 } alt="circulo402" />
                </div>


                <div className="w-full h-screen flex flex-col items-center justify-center z-20">
                    <div><p className="text-10xl text-YellowOfficial">404</p></div>
                    <div><p className="text-5xl text-center text-gray-600 mb-10">We can't seem to find that</p></div>
                    <div><p className="text-1xl pb-8">The page you're looking for doesn't exist or has been moved</p></div>
                    <Button  $bordericon><FaArrowLeft className="mr-2"/>Back to Home</Button>
                </div>

        </Div>
    )
}
