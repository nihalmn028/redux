import React from 'react'
import { useSelector } from 'react-redux'

const Members = () => {
  const member=useSelector(state=>state.group)
console.log(member);
const members=member.members

  return (
    <div>
      {
        members.map((data,index)=>{
          return(
            <h1 key={index}>{data}</h1>
          )
        })
      }
    </div>
  )
}

export default Members