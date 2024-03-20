import { useState } from "react"



const Usestate =()=>{
    const[count,setCount]=useState(0)
    const Raghu=()=>{
        return(
            setCount((count)=>{return count+1})
        )
    }
        const Supraa=()=>{
        return(
            setCount((count)=>{return count - 1})
        )
       }
       const GTR=()=>{
        return(
        setCount((count)=>{return 0})
        )
       }


    return(
       <>
       <h1>current count&#x2192;{count}</h1>
       <button onClick={Raghu}>Increment</button>
       <button onClick={Supraa}>Decrerment</button>
       <button onClick={GTR}>Reset</button>
       </>
    )
}



export default Usestate
