import React from 'react'
import { Button } from '../../components/Button'
import { Div } from '../../components/Div'
import { Input } from '../../components/Input'
import { Label } from '../../components/Label'
import { H1 } from '../../components/H1'
import background from '../../img/background.png'
import user from '../../img/user.png'
import { Link } from 'react-router-dom'

export const AdminPassword = () => {
    return (
        <Div $containerprymari>

            <Div $containerrecoverpassword>

                <div className="flex justify-center items-center pb-8">
                    <img src={ user } alt="user" />
                </div>

                <H1 $primary>Adriana Castro</H1>
                <p className="text-center text-gray-600">Enter your password to access the admin.</p>
                <div className="pt-8 pb-5">
                    <Label $primarylab>Password</Label>
                    <Input 
                        type="password"
                        placeholder=""
                        $disableinp 
                    />
                </div>
                
                <div className="pb-5 pt-5">
                    <Button
                        $border100
                    >
                        Unlock
                    </Button>
                </div>

                <div className="mt-10">
                    <p className="text-center">Not you?<span className="text-BlueOfficial"><Link to="/">Login</Link></span></p>
                </div>

            </Div>

            <div className="fixed z-0">
                <img src={ background } alt="background" />
            </div>

        </Div>
    )
}
