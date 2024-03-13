import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './CounterReducer'

const CounterButton = () => {
const dispatch=useDispatch()
const count=useSelector((state)=>state.counter)
const handleincrement=()=>{
  dispatch(increment())
}
const handledecrement=()=>{
  dispatch(decrement())
}
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={handleincrement}>increment</button>
      <button onClick={handledecrement}>decrement</button>

    </div>
  )
}

export default CounterButton