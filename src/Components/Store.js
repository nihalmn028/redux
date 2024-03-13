// import {createStore} from 'redux'
// import counterReducer  from './Reducers'
// const Store = createStore(counterReducer) 

import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../CounterReducer";
import GroupReducer from "../GroupReducer";

// import { createStore } from "redux";

 


// // export default Store
// // import { createStore } from 'redux';
// // import todoReducer from './Reducers';

// // const store = createStore(todoReducer);

// // export default store;
// const initialState={
//   count:0
// }
// const  reducer=(state=initialState,action)=>{
// switch(action.type){
//   case 'INCREMENT':
//     return{
//       ...state,
//       count:state.count+1
//     }
//     case 'DECREMENT':
//       return{
//         ...state,
//         count:state.count-1
//       }
//       default:
//         return state;
// }

// }
// export const store=createStore(reducer)
const store=configureStore(
  {
    reducer:{
      group:GroupReducer
    },
  }
)
export default store