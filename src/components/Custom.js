import React,{useState,useEffect} from 'react'
//Creating my own hooks to fetch api
const Custom =(url)=>{
    const [data,setData]=useState(null);

useEffect(()=>{
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>setData(data))
},[url])
    return [ data]
    
       
}
export default Custom