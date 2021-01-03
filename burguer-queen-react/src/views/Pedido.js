import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

import Navigation from '../components/Navigation.js';

const baseUrl = 'http://localhost:3000';
const cookies = new Cookies();

class Pedido extends Component{

    state = {
        type: '',
    }

    /* logOut = () => {
        cookies.remove('id', {path:'/'});
        cookies.remove('email', {path:'/'});
        window.location.href = './'
    } */

    filterMenu = async(e) => {
        let url = baseUrl + '/products';
        //console.log('e.target.name', e.target.name);
        await axios.get(url, {params: {type: e.target.name}})
        .then(response => {
            document.querySelector('#prueba').innerHTML = '';
           
                response.data.forEach(element => {

                document.querySelector('#prueba').innerHTML += 
                `<div class="col-sm-6 mt-2">
                    <div class="card">
                        <div class="card-body">

                            <h5 class="card-title">${element.name}</h5>
                            <p class="card-text">${element.price}</p>
                        
                        </div>
                    </div>
                </div>`
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
        //console.log('id', cookies.get('id'));
        //console.log('email', cookies.get('email'));
        return (
            <div >
                <Navigation></Navigation>
                <div className='row m-3'>
                    <div className='col-md-6'>
                        Vista de Pedidos
                        <br/>
                        <button name='breakfast' onClick={this.filterMenu}>Desayunos</button>
                        <button name='day' onClick={this.filterMenu}> Del día</button>
                        <br/>
                        <div id='prueba' className='row'>
                            
                        </div>
                    </div>
                    <div className='col-md-6 mt-4'>
                        <div class="mb-3 row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Mesero:</label>
                            <div class="col-sm-9">
                            <input type="text" class="form-control"/>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Mesa:</label>
                            <div class="col-sm-9">
                            <input type="text" class="form-control"/>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Cliente:</label>
                            <div class="col-sm-9">
                            <input type="text" class="form-control"/>
                            </div>
                        </div>
                 
                    </div>
                </div>
               
                
            </div>
            
        )
    }
}

export default Pedido;