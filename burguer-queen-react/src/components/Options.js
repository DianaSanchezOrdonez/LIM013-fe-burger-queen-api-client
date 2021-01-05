import React, { Component } from 'react';

import axios from 'axios';

class Options extends Component {

    render(){

        return(
            
            <div className="col-sm-6 mt-2" onClick={this.props.handleProducts} >
                <div className="card" >
                        <div className="card-body"  >
                            <h5 className="card-title" data-id={this.props.data.id}>{this.props.data.name}</h5>
                            <p className="card-text">{this.props.data.price}</p>
                        </div>
                </div>                 
            </div>
           
        )
    }
}

export default Options;