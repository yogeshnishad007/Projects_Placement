
//import { ADD_TODO, DELETE_TODO } from "./actionType.js"

const initState = {
    todo: [],
  };
  
  export const todoReducer = (state = initState, { type, payload }) => {
    switch (type) {

        
      case 'ADD_TODO': {
        return {
          ...state,
          todo: [...state.todo, { id: Date.now(), task: payload }],
        };
      }


      case 'DELETE_TODO': {
        return {
          ...state,
          todo: state.todo.filter((todo) => todo.id !== payload),
        };
      }


      case 'UPDATE_TODO': {
        const updatedTodo = state.todo.map((el) => {
          if (el.id === payload.id) {
            return {
              ...el,
              task: payload.change,
            };
          }
          return el;
        });
  
        return {
          ...state,
          todo: updatedTodo,
        };
      }



      case 'ALLCLEAR_TODO': {
        return {
          ...state,
          todo: [],
        };
      }


      default: {
        return state;
      }
    }
  };
  