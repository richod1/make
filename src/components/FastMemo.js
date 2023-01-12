import React,{useState,useMemo} from 'react'


const expensiveCalculation=(num)=>{
    console.log("Calculating...")
    for(let i=0;i<1000000000;i++){
        num +=1;
    }
    return num;
}

const FastMemo=()=>{
    const [count,setCount]=useState(0);
    const [todos,setTodos]=useState([]);
    const calculation=useMemo(()=>expensiveCalculation(count),[count]);

    const increment=()=>{
        setCount((c)=>c+1)
    }

    const Addtodo=()=>{
        setTodos((t)=>[...t,"Add Todo"])
    }
return(
    <div>
        <div>
            <h1>My Todo</h1>
            {todos.map((todo,index)=>{
                return <p key={index}>{todo}</p>
            })}
            <button type='button' onClick={Addtodo}>Add Todo</button>
        </div>
        <hr/>
        <div>
            <h1>Count :{count}</h1>
            <button type='button' onClick={increment}>Increment++</button>
            {calculation}
        </div>
       
    </div>
)
}
export default FastMemo