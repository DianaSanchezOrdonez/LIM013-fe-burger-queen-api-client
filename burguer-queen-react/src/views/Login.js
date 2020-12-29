import React, { Component } from 'react';
import axios from 'axios';

const baseUrl = 'http://localhost:3000/users';

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
        console.log(this.state.form);
    }

    handleSubmit = async(e) => {
        e.preventDefault(); 
        await axios.get(baseUrl, { params: {email: this.state.form.email, password: this.state.form.password}})
        //await axios.post(baseUrl, { email: this.state.form.email, password: this.state.form.password})
        .then(response => {
            console.log('params', this.state.form.email, this.state.form.password);
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        }) 
    }



    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Correo:</label>
                    <input
                    type='text'
                    name='email'
                    onChange={this.handleInput}
                    placeholder='Correo'
                    ></input>
                    <label>Contraseña:</label>
                    <input
                    type='password'
                    name='password'
                    onChange={this.handleInput}
                    placeholder='Contraseña'
                    ></input>
                </div>
                <button>Ingresar</button>
            </form>
        )
    }
}

export default Login;