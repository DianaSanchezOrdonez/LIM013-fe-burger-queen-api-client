import React, { Component } from 'react'

class FormLogin extends Component {

    constructor(){
        super();
        this.state = {
            email:'',
            password:''
        }
    }

    handleInput(e){
        const {name, value} = e.target;
        /* console.log(name, value); */
    }

    handleSubmit(e){
        e.preventDefault();

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

export default FormLogin;