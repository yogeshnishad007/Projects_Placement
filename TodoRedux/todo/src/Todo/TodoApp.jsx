import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { addTodo} from '../redux/action'

const TodoApp = () => {
    const dispatch=useDispatch()
    const[data,setData]=useState("")

    const handleSubmit=()=>{
         dispatch(addTodo(data))
         setData("")
         
    }


  return (
    <div>

          <input type="text" value={data} placeholder='write here' onChange={(event)=>setData(event.target.value)} />
            <button onClick={handleSubmit}>Add</button>
         
    </div>
    
  )
}

export default TodoApp