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
            product:[],
            carrito: [],
            cantidad: []
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
            //console.log('response.data', response.data);
            this.setState({options: response.data})    
        })
        .catch(error => {
            console.log(error);
        })

    }

    //const result = words.filter(word => word.length > 6);

    renderCarrito = (arr) => {
        
        arr.forEach( item => {
            // Obtenemos el item que necesitamos de la variable base de datos
            let miItem = this.state.options.filter((itemBaseDatos) => {
               // console.log('itemBaseDatos', itemBaseDatos);
                return itemBaseDatos.id == item;
            });
            console.log('miItem', miItem);
        }) 
           
    }

    handleProducts = (e) => {
        //console.log('e.target.dataset.id', e.target.dataset.id);
        axios.get('http://localhost:3000/products?id='+ e.target.dataset.id)
        .then(response => {
          
            this.setState({product: response.data});
            //this.setState({carrito: response.data[0].id})
            //this.state.product.push(response.data);
            
            this.state.carrito.push(response.data[0]);
            //console.log('this.state.product', this.state.product);
        
        })
        
        for(let i; i<=0; i++){
            const sinDuplicar = [...new Set(this.state.carrito[i].id)]
            console.log('hola',this.state.carrito[i].id);
            console.log('sinDuplicar', sinDuplicar);
        }
       
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
                                    return <Options key={item.id} data={item} handleProducts={this.handleProducts} ></Options>
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
                               
                               {   
                                    this.state.carrito.map(item => {
                                        //const filter = this.state.carrito.filter(el => {return el == item.id})
                                        //console.log('filter', filter);
                                        return <ListItems key={item.id} data={item} ></ListItems>
                                    })
                                } 
                                {/*this.state.product.length > 0 ? <ListItems data={this.state.product}></ListItems> : <ListItems data='0' ></ListItems>*/}
                             
                            </ul>
                                    
                        
                        </div>
                    </div>
                </div>
               
                
            </div>
            
        )
    }
}

export default Pedido;