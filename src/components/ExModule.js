import React,{useState} from 'react'

const ExModule=()=>{
    const [count,setCount]=useState(0)

    const handleCounter=()=>{
        setCount((c)=>c+1)
    }
    return [handleCounter,count]
}
export default ExModule()
//This module is a counter module