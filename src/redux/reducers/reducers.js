import {BUYBOOK } from'../type/type';
import {SALEBOOK } from'../type/type';
const intstate={
    numbarsOfbook:10
}
const bookreducer=(state=intstate,action)=>{
     switch(action.type){
         case BUYBOOK:return{
            numbarsOfbook:state.numbarsOfbook-1 
         }
         case SALEBOOK:return{
            ...state,
            numbarsOfbook:state.numbarsOfbook+1 
         }
         default:return state;
     }
}
export default bookreducer