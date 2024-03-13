import { createSlice } from '@reduxjs/toolkit'
const counterSlice=createSlice({
  name:'group',
  initialState:0,
  reducers:{
    increment:(state)=>state+1,
    decrement:(state)=>state-1,
  },
 

})
export const {increment,decrement} = counterSlice.actions;
export default counterSlice.reducer;
// const CounterReducer = () => {
//   return (
//     <div>CounterReducer</div>
//   )
// }

