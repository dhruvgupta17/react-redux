import React, { Component } from 'react'
import { connect } from 'react-redux';
import {buyBook,SaleBook} from "../redux";

class Book extends Component {
    constructor(props) {
        super(props);
       this.state={
       }
    }
    
    render() {
        return (
            <div>
        <h1>value {this.props.numbarsOfbook}</h1>
        <button onClick={()=>this.props.SaleBook()}>click</button>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
  return{
    numbarsOfbook:state.numbarsOfbook
  }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        SaleBook:()=> {
            dispatch(SaleBook());
        }
    }
}

const connectedDashboardPage= connect(mapStateToProps,mapDispatchToProps)(Book);
export { connectedDashboardPage as Book };