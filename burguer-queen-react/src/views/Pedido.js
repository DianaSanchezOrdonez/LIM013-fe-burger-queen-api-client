import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

import Navigation from '../components/Navigation.js';
import Options from '../components/Options.js';
import ListItems from '../components/ListItems.js';

const baseUrl = 'http://localhost:3000';
const cookies = new Cookies();

class Pedido extends Component{

    constructor(props){
        super(props)
        this.state = {
            type:'',
            options:[], 
            product:[]
        }
    }

    /* logOut = () => {
        cookies.remove('id', {path:'/'});
        cookies.remove('email', {path:'/'});
        window.location.href = './'
    } */

    filterMenu = (e) => {
        let url = baseUrl + '/products';
        //console.log('e.target.name', e.target.name);
        axios.get(url, {params: {type: e.target.name}})
        .then(response => {
            console.log('response.data', response.data);
            this.setState({options: response.data})    
        })
        .catch(error => {
            console.log(error);
        })

    }

    handleProducts = (e) => {
        console.log('dataset', e.target.dataset.id);
        axios.get('http://localhost:3000/products?id='+ e.target.dataset.id)
        .then(response => {
            this.setState({product: response.data})
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
                        <div className='row'>
                           
                            { this.state.options.map(item => {
                                    return <Options key={item.id} data={item} handleProducts={this.handleProducts}></Options>
                                })
                            } 
                        </div>
                    </div>
                    <div className='col-md-6 mt-4'>
                        <div className="mb-3 row">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Mesero:</label>
                            <div className="col-sm-9">
                            <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Mesa:</label>
                            <div className="col-sm-9">
                            <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Cliente:</label>
                            <div className="col-sm-9">
                            <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className='card '>
                            <h5>Pedido</h5>
                            
                            <ul id="carrito" className="list-group">
                                <ListItems data={this.state.product}></ListItems>
                
                            </ul>
                                    
                        
                        </div>
                    </div>
                </div>
               
                
            </div>
            
        )
    }
}

export default Pedido;