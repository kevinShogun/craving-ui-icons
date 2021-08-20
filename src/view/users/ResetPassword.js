import React from 'react'
import { Button } from '../../components/Button'
import { Div } from '../../components/Div'
import { Input } from '../../components/Input'
import { Label } from '../../components/Label'
import { H1 } from '../../components/H1'
import background from '../../img/background.png'
import padlock from '../../img/padlock.png'
import { Link } from 'react-router-dom'

export const ResetPassword = () => {
    return (
        <Div $containerprymari>

            <Div $containerrecoverpassword>

                <div className="flex justify-center items-center pb-8">
                    <img src={ padlock } alt="padlock" />
                </div>

                <H1 $primary>Recover Your Password</H1>
                <div className="pt-8 pb-5">
                    <Label $primarylab>Email</Label>
                    <Input 
                        type="text"
                        placeholder="usuario@mail.com"
                        $disableinp 
                    />
                </div>

                <div className="pb-5">
                    <Label $primarylab>Password</Label>
                    <Input 
                        type="password"
                        placeholder=""
                        $disableinp 
                    />
                </div>

                <div className="pb-5">
                    <Label $primarylab>Confirm Password</Label>
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
                        Log In
                    </Button>
                </div>

                <div className="mt-10">
                    <p className="text-center">Go back to<span className="text-BlueOfficial"><Link to="/">Login</Link></span></p>
                </div>
                
            </Div>

            <div className="fixed z-0">
                <img src={ background } alt="background" />
            </div>

        </Div>
    )
}
