import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import EndTime from './EndTime'
import InitTime from './InitTime'
import styles from "./stopwatch.module.css"
function StopWatch() {
    const [getInpInit,setGetInpInit] = useState(0);
    const [getEndTime,setGetEndTime] = useState("");
    const [watch,setWatch] = useState(0);
    // const [show,setShow] = useState(false) // Instead of useState we can use useRef 
    // to make less renders
    const show = useRef(null);
    // will store as show = {current:null}
    const start = ()=>{
        setWatch(+(getInpInit));
    if(!show.current){
       let id = setInterval(()=>{
            setWatch((prev)=>prev+1)
        },1000)
        // setShow(id)
        show.current=id
      }   
      
    }
    if(getEndTime){
   if(watch>= Number(getEndTime)){
    clearInterval(show.current);
   }
}
    const pause = ()=>{
        clearInterval(show.current);
        show.current = null
    }

    const reset = () =>{
        clearInterval(show.current);
        show.current = null
        setWatch(0)
    }
 useEffect(()=>{
    return() => { 
        clearInterval(show.current);
          }
 },[])

  return (
    <div className={styles.body0}>
        <div>
      <InitTime setGetInpInit={setGetInpInit}/>
      </div>

      <div>
      <EndTime setGetEndTime={setGetEndTime}/>
      </div>
      <div>
       <h1> {watch} </h1>
        </div>
        
         <button style={{backgroundColor:"green"}} onClick={start}>Start</button>
         <button style={{backgroundColor:"yellow",margin:"23px"}} onClick={pause}>pause</button>
         <button  style={{backgroundColor:"red"}}onClick={reset}>Reset</button>
    </div>
  )
}

export default StopWatch
