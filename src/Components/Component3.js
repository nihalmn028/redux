import React from 'react'
import { increment,decrement } from './Actions'
import { connect } from 'react-redux'

const Component3 = ({decrement}) => {
  return (
    <div>
            <button onClick={decrement}>decrement</button>

    </div>
  )
}
const mapStateToProps = (state)=>{
  return{
    count:state.count
  }
}
export default connect(mapStateToProps,{increment,decrement})(Component3)
