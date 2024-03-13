import { createSlice } from '@reduxjs/toolkit'
const initialState={
members:[]
}
const groupSlice=createSlice({
  name:'group',
  initialState,
  reducers:{
    add(state,action){
state.members.push(action.payload)
    },
    remove(state,action){
      state.members.pop()
          }
  },
 

})
export const {add,remove} = groupSlice.actions;
export default groupSlice.reducer;

// const CounterReducer = () => {
//   return (
//     <div>CounterReducer</div>
//   )
// }

