import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { add, remove } from './GroupReducer'

const Buttons = () => {
  const ref=useRef()
const dispatch=useDispatch()
  function addbtn(){
    const value=ref.current.value;
dispatch(add(value))
  }
  function deletebtn(){
dispatch(remove())
  }
  return (
    <div>
      <input ref={ref} type="text" />
      <button onClick={addbtn}>add</button>
      <button onClick={deletebtn}>delete</button>
    </div>
  )
}

export default Buttons