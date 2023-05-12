import React, { useState } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { allclearTodo, deleteTodo,updateTodo } from '../redux/action'
const TodoItem = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  console.log(todos)

  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleEditSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTodo(editId, editValue));
   
    setEditId(null);
    setEditValue('');
    setEdit(false);
  };

  const handleEdit = (id) => {
    setEdit(true);
    setEditId(id);
    const todoToEdit = todos.find((todo) => todo.id === id);
    setEditValue(todoToEdit.task);
  };

  return (
    <div>
      {todos.map((todo) =>
        edit && editId === todo.id ? (
          <form key={todo.id} onSubmit={handleEditSubmit}>
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
            <button type="submit" >Save</button>
            <button type="button" onClick={() => setEdit(false)}>
              Cancel
            </button>
          </form>
        ) : (
          <div key={todo.id}>
            <h2>{todo.task}</h2>
            <button onClick={() => handleEdit(todo.id)}>Update</button>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          </div>
        )
      )}

      <br />
      <br />

      <button onClick={() => dispatch(allclearTodo())}>ALL CLEAR</button>
    </div>
  );
};

export default TodoItem;
