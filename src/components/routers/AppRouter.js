import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { Login } from '../../view/users/Login';
import { Register } from '../../view/users/Register';
import { RecoverPassword } from '../../view/users/RecoverPassword';
import { ResetPassword } from '../../view/users/ResetPassword';
import { AdminPassword } from '../../view/users/AdminPassword';
import { Error404 } from '../../view/users/Error404';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>

                    <Route exact path="/" component={ Login }/>
                    <Route exact path="/register" component={ Register }/>
                    <Route exact path="/recoverpassword" component={ RecoverPassword }/>
                    <Route exact path="/resetpassword" component={ ResetPassword }/>
                    <Route exact path="/adminpassword" component={ AdminPassword }/>
                    <Route exact path="/error404" component={ Error404 }/>

                    <Redirect to="/"/>

                </Switch>
            </div>
        </Router>
    )
}
