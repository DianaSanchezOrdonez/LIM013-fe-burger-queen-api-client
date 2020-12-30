import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

const baseUrl = 'http://localhost:3000';
const cookies = new Cookies();

class Pedido extends Component{

    state = {
        type: '',
    }

    logOut = () => {
        cookies.remove('id', {path:'/'});
        cookies.remove('email', {path:'/'});
        window.location.href = './'
    }

    filterMenu = async(e) => {
        let url = baseUrl + '/products';
        console.log('e.target.name', e.target.name);
        await axios.get(url, {params: {type: e.target.name}})
        .then(response => {
            document.querySelector('#prueba').innerHTML = '';
            response.data.forEach(element => {

               document.querySelector('#prueba').innerHTML += `${element.name} <br/>`;

            });
        })
        .catch(error => {
            console.log(error);
        })

    }

    componentDidMount() {
        if(!cookies.get('email')){
            window.location.href = './'
        }
    }

    render(){
        console.log('id', cookies.get('id'));
        console.log('email', cookies.get('email'));
        return (
            <div>
                Vista de Pedidos
                <br/>
                <button name='breakfast' onClick={this.filterMenu}>Desayunos</button>
                <button name='day' onClick={this.filterMenu}> Del día</button>
                <br/>
                <div id='prueba'></div>
                <button onClick={this.logOut}>Cerra Sesión</button>
            </div>
            
        )
    }
}

export default Pedido;