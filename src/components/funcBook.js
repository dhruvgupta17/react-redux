import React from 'react'
import { connect } from 'react-redux';
import {buyBook} from "../redux";
function Books(props) {
    return (
        <div>
           <h1>value {props.numbarsOfbook}</h1>
                <button onClick={props.buyBook}>click</button>
        </div>
    )
}


const mapStateToProps=(state)=>{
  return{
    numbarsOfbook:state.numbarsOfbook
  }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        buyBook:function() {
            dispatch(buyBook());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Books);