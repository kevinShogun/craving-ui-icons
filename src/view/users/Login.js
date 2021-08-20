import React from 'react'
import { Button } from '../../components/Button'
import { Div } from '../../components/Div'
import { Input } from '../../components/Input'
import { Label } from '../../components/Label'
import { H1 } from '../../components/H1'

import background from '../../img/background.png'
import { Link } from 'react-router-dom'

// import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        <Div $containerprymari>
            
            <Div $containerlogin>
                
                <H1 $primary>Login To Your Account</H1>
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
                <div className="pb-5 flex justify-between">
                    <div>
                        <input
                            type="checkbox" className="form-checkbox mr-2"
                        />
                        <Label $primarylab>Remember Me</Label>
                    </div>
                    <div>
                        <p className="text-BlueOfficial"><Link to="/recoverpassword">Forgot Password?</Link></p>
                    </div>
                </div>
                <div className="pb-5">
                    <Button
                        $border100
                    >
                        Log In
                    </Button>
                </div>
                <div>
                    <p className="text-center">Don't have an account? <span className="text-BlueOfficial"><Link to="/register">Sign Up</Link></span></p>
                </div>
            </Div>

            <div className="fixed z-0">
                <img src={background} alt="background" />
            </div>
            
        </Div>
    )
}
