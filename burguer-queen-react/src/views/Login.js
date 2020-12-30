import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

import '../css/Login.css';
import logo from '../img/logo.svg';

const baseUrl = 'http://localhost:3000';
const cookies = new Cookies();

class Login extends Component {

    state={
        form:{
            email:'',
            password:''
        } 
    }

    handleInput = async(e) => {
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        //console.log(this.state.form);
    }

    handleSubmit = async(e) => {
        e.preventDefault(); 
        let url = baseUrl + '/users';
        await axios.get(url, { params: {email: this.state.form.email, password: this.state.form.password}})
        //await axios.post(baseUrl, { email: this.state.form.email, password: this.state.form.password})
        .then(response => {
            console.log('params', this.state.form.email, this.state.form.password);
            //console.log('response', response)
            //console.log(response.data);
            return response.data
        })
        .then( response => {
            if(response.length > 0){
                let result = response[0];
                cookies.set('id', result.id, {path: '/'});
                cookies.set('email', result.email, {path: '/'});
                console.log(`Bienvenido ${result.email}`);
                window.location.href = './pedido'
            }else{
                console.log('El usuario y la contraseña no son correctos');
            }
        })
        .catch(error => {
            console.log(error);
        }) 
    }

    componentDidMount() {
        if(cookies.get('email')){
            window.location.href = './pedido';
        }
    }

    render(){
        return(
            <div className='container-fluid bg'>
                <div className='row'>
                    <div className='col-md-3 col-sm-4 col-xs-12'></div>
                    <div className='col-md-6 col-sm-4 col-xs-12'>
                        <form onSubmit={this.handleSubmit} className='form'>
                            <img className='logo mb-3' src={logo}></img>
                            <div className='form-group mb-3'>
                                <label className='form-label'>Correo:</label>
                                <input
                                className='form-control'
                                type='text'
                                name='email'
                                onChange={this.handleInput}
                                placeholder='Correo'
                                ></input>
                            </div>
                            <div className='form-group mb-3'>
                                <label className='form-label'>Contraseña:</label>
                                <input
                                className='form-control'
                                type='password'
                                name='password'
                                onChange={this.handleInput}
                                placeholder='Contraseña'
                                ></input>
                            </div>
                            <button className='col-md-12 btn btn-danger btn-block'>Ingresar</button>
                        </form>    
                    </div>
                    <div className='col-md-3 col-sm-4 col-xs-12'></div>
                </div>

            </div>
           
        )
    }
}

export default Login;