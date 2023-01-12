import React,{useState,useCallback} from 'react'
import Child from './Child'

const Home=()=>{
    const [count,setCount]=useState(0);
    const [todos,setTodos]=useState([]);

    const addTodo = useCallback(()=>{
setTodos((t)=>[...t,"New Todo"]);
    },[todos])

const increment=()=>{
    setCount((c)=>c+1)
}


    return(
        <>
        <Child todos={todos} addTodo={addTodo}/>
        <hr/>
        <div>
            <h2>Count :{count}</h2>
            <button type='button' onClick={increment}>Increment +</button>
        </div>
        </>

    )

}
export default Home