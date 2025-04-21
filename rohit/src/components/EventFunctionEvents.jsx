"use client"
import React, { useState } from 'react'

const EventFunctionEvents = () => {
    const [naam,setNaam]=useState("Sahid Farugi")
    // const sayHello=(name)=>{
    //     alert(`How are you ${name}`)
    // }
    // let naam="Sahid Farugi"
    const updateFun=()=>{
        // naam="Rohit Kumar"
        setNaam("Rohit Kumar Malav")
        alert("naam Updated");
    }
  return (
    <div>
      <h1>EventFunctionCOmponent</h1>
      {/* <button onClick={()=>sayHello("Naresh Seervi")}>Click ME</button> */}
      <h2>My Update name is:{naam}</h2>
      <button onClick={updateFun}>Update Name</button>
    </div>
  )
}

export default EventFunctionEvents
