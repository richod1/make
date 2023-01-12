import React,{useState} from 'react'

const expensiveCalculation=(num)=>{
console.log('Calculation...');
for(let i=0;i<1000000000;i++){
    num +=1;
}
return num;
}

const Meno=()=>{
    const [count,setCount]=useState(0);
    const [todos,setTodos]=useState([]);

   
    const calculation = expensiveCalculation(count)


    const increment=()=>{
        setCount((c)=>c+1)
    };

    const AddTodo=()=>{
        setTodos((t)=>[...t,"New Todo"])
    }

return(
    <div>
    <div>
        <h1>My Todo</h1>
        {todos.map((todo,index)=>{ 
            return <p key={index}>{todo}</p>

})};
<button type='button' onClick={AddTodo}>Add Todo</button>
    </div>
    <hr/>
    <div>
<h1>Count :{count}</h1>
<button type="button" onClick={increment}>increment++</button>
    <h2>Expensive Calculation</h2>
    {calculation}

    </div>
    </div>
)
}


export default Meno