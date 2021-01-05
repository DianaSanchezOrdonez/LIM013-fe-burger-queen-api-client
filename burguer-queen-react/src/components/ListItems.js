import React, { Component } from 'react';

class ListItems extends Component {
    render(){
        return (
            
            <li className="list-group-item text-right">
                {console.log('this.props.data.name', this.props.data)}
                <span>{this.props.data[0].name}</span>
                <button className="btn btn-warning mx-3" item="1" ><i className="fa fa-minus"></i></button>
                <span>1</span>
                <button className="btn btn-warning mx-3" item="1" ><i className="fa fa-plus"></i></button>
                <span>{this.props.data[0].price}</span>
                <button className="btn btn-danger mx-3" item="1" ><i className="fa fa-trash"></i></button>
            </li>
        )
    }
}

export default ListItems;