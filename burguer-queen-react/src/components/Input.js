import React, { Component } from 'react';

class Input extends Component {
    render(){
        return(
            <input
                id={this.props.attribute.id}
                name={this.props.attribute.name}
                placeholder={this.props.attribute.placeholder}
                type={this.props.attribute.type}
                onChange={(e) => this.props.handleChange(e.target.name, e.target.value)}
                className='form-control'
            ></input>

        )
    }
}

export default Input;