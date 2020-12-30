import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../views/Login.js';
import Pedido from '../views/Pedido.js'

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route exact path='/pedido' component={Pedido}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;