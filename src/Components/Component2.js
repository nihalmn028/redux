import React from 'react'
import { increment,decrement } from './Actions'
import { connect } from 'react-redux'

const Component2 = ({increment}) => {
  return (
    <div>
            <button onClick={increment}>increment</button>

    </div>
  )
}
const mapStateToProps = (state)=>{
  return{
    count:state.count
  }
}
export default connect(mapStateToProps,{increment,decrement})(Component2)
