import { useState } from "react"



const UseState2=()=>{
    const[Timer,setTimer]=useState(100)

    const Raghu=()=>{
        setInterval(()=>{
            setTimer((Timer)=>{ return Timer-1})
        },1000
        )
    }

    return(
       <>
        <h2>Timer</h2>
        <h3>Current Timer{Timer}</h3>
        <button onClick={Raghu}>Timer</button>
       </>
    )
}

export default UseState2