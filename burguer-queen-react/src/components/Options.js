import React, { Component } from 'react';
import axios from 'axios';

const baseUrl = 'http://localhost:3000';

class Options extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    
    render(){
        return(
            <div className="col-sm-6 mt-2">
                <div className="card">
                    <div className="card-body">

                        <h5 className="card-title">{this.state.name}</h5>
                        <p className="card-text">{this.state.price}</p>
                      
                    </div>
                </div>
            </div>
        )
    }
}

export default Options;