import React from 'react'
import { useState } from 'react'

function EndTime({setGetEndTime}) {
    const [inpend,setInpEnd] = useState("");
  return (
    <div>
      <input type="number" onChange={({target})=>(setInpEnd(target.value))}/>
      <button onClick={()=>{
        setGetEndTime(inpend)
      }}>Set End Time</button>
    </div>
  )
}

export default EndTime
