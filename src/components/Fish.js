import React,{useState,useEffect} from 'react'


const Fish=()=>{
    const [data,setData]=useState(null);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>res.json())
        .then((data)=>setData(data))
    })
    return (
    <>
    {data &&
        data.map((item)=>{
        return <h3 key={item.id}>{item.title}</h3>
    })};
    </>
    )
}

export default Fish