

//import { ADD_TODO, DELETE_TODO } from "./actionType.js";


export const addTodo=(data)=>{

          return{

              type:"ADD_TODO",
              payload:data
          }
}

export const deleteTodo=(id)=>{

    return{

        type:"DELETE_TODO",
        payload:id
    }
}

export const allclearTodo=()=>{

    return{

        type:"ALLCLEAR_TODO"
    }
}

export const updateTodo=(id,change)=>{

    return{

        type:"UPDATE_TODO",
        payload:{id,change}
    }
}