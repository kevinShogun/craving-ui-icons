import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Div } from '../../components/Div'
import { H1 } from '../../components/H1'
import { Input } from '../../components/Input'
import { Label } from '../../components/Label'
import { Select } from '../../components/Select'
import background from '../../img/background.png'

export const Register = () => {
    return (
        <Div $containerprymari>

            <Div $containeregister>
                <H1 $primary>Create Account</H1>
                <div className="pt-8 pb-5">
                    <Label $primarylab>Last Name</Label>
                    <Input 
                        type="text"
                        placeholder=""
                        $disableinp 
                    />
                </div>
                <div className="pb-5">
                    <Label $primarylab>Full Name</Label>
                    <Input 
                        type="text"
                        placeholder=""
                        $disableinp 
                    />
                </div>

                <div className="pb-5">
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

                <div className="pb-5">
                    <Label $primarylab>Country of birth</Label>
                    <Select $disableinpsel>
                        <option value="">Costa Rica</option>

                    </Select>
                </div>

                <div className="pb-5">
                    <Label $primarylab>Country of residence</Label>
                    <Input 
                        type="text"
                        placeholder=""
                        $disableinp 
                    />
                </div>

                <div className="pb-5">
                    <Label $primarylab>Phone Number</Label>
                    <Input 
                        type="text"
                        placeholder="+506888888888"
                        $disableinp 
                    />
                </div>

                <div className="pb-5">
                    <Label $primarylab>Date of Birth</Label>
                    <Input 
                        type="text"
                        placeholder=""
                        $disableinp 
                    />
                </div>

                <div className="pb-5">
                    <Label $primarylab>Native language</Label>
                    <Select $disableinpsel>
                        <option value="">Spanish</option>
                    </Select>
                </div>

                <div className="pb-5">
                    <Label $primarylab>How you find us?</Label>
                    <Select $disableinpsel>
                        <option value="">Instagram</option>
                        <option value="">Facebook</option>
                    </Select>
                </div>





                <div className="pb-5 flex justify-between">
                    <div>
                        <input
                            type="checkbox" className="form-checkbox mr-2"
                        />
                        <Label $primarylab>I accept <span className="text-BlueOfficial">Terms and Conditions</span></Label>
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
                    <p className="text-center">Already have an account?<span className="text-BlueOfficial"><Link to="/">Login</Link></span></p>
                </div>

            </Div>

            <div className="fixed z-0">
                <img src={background} alt="background" />
            </div>
            
        </Div>
    )
}
