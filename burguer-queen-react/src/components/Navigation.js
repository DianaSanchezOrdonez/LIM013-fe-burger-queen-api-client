import React, { Component } from 'react';

import Cookies from 'universal-cookie';
import logo from '../img/logo.svg';
import '../css/Login.css'

const cookies = new Cookies();

class Navigation extends Component {

    logOut = () => {
        cookies.remove('id', {path:'/'});
        cookies.remove('email', {path:'/'});
        window.location.href = './'
    }

    render(){
        return(
            <header className="bd-header bg-danger py-3 d-flex align-items-stretch border-bottom shadow-sm">
                <div className="container-fluid d-flex align-items-center">
                    <h1 className="d-flex align-items-center fs-4 text-white mb-0">
                    <img src={logo} className="logo me-3" alt="Buguer Queen" />
                    </h1>
                    <button className="ms-auto btn btn-outline-light" onClick={this.logOut}>Cerrar Sesión</button>
                </div>
            </header>
        )
    }
}

export default Navigation;