import React from 'react'
import { connect } from 'react-redux'
import { increment,decrement } from './Actions'

const Component1 = ({count}) => {
  return (
    <div>
       <p>Count : {count}</p>
    </div>
  )
}

const mapStateToProps = (state)=>{
  return{
    count:state.count
  }
}
export default connect(mapStateToProps,{increment,decrement})(Component1)