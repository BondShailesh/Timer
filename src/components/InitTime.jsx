import React from 'react'
import { useState } from 'react'

function InitTime({setGetInpInit}) {
 const [inp, setInp] = useState("");
  return (
    <div >
      <input type="number" onChange={({target})=>setInp(target.value)}/>
      <button  onClick={()=>{
      setGetInpInit(inp);
      }}>Set Initial Time</button>
    </div>
  )
}

export default InitTime
