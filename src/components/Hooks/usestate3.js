import { useState } from "react"




const UseState3=()=>{
    const[List,setList]=useState(["apple","mango","banana","greps"])

const Fruit=()=>{
    
        let newlist=[...List,"New Fruit"]
        setList(newlist)
    
}

    return(
        <>
        <h2>List</h2>
        <button onClick={Fruit}>add new fruit</button>
        <ol>
        {
            List.map((eachfruit)=>{return <li>{eachfruit}</li>})
        }
        </ol>
        </>
    )
}


export default UseState3