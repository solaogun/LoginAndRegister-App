import React from 'react'
import Login from './Login/Login'
import Register from '../Register/Register'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

function Body() {
    return (


        <Switch>
            <Route path="/" component={Login} exact />

            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Register} exact />
        </Switch>

    )
}

export default Body
