'use client'
import React,{useState} from 'react'
const Counter = () => {
    const [name,setName]=useState("atul");
   const toggle=()=>{
    if(name==='atul') setName("Chauhan")
    else setName("atul")
   }
  return (
    <>
    <h2 class="m-8">Name : {name}</h2>
    <button onClick={toggle}>toggle</button>
    
    </>
  )
}

export default Counter
