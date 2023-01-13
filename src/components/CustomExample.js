import React from 'react'
import {Custom} from './Custom'



const CustomExample=()=>{
    const [api]=Custom("the api");


    return(
        <div>
            {api && api.map((data)=>{
                return <p key={data.id}>{data.title}</p>
            })}
        </div>
    )
}
export default CustomExample