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
            <form onSubmit={this.handleSubmit} className="row g-3" >
                <div className="col-12">
                    <label className='form-label'>Correo:</label>
                    <input
                    className='form-control'
                    type='text'
                    name='email'
                    onChange={this.handleInput}
                    placeholder='Correo'
                    ></input>
                </div>
                <div className="col-12">
                    <label className='form-label'>Contraseña:</label>
                    <input
                    className='form-control'
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