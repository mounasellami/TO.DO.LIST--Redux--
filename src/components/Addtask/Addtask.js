import React, {useState, useEffect, useRef} from 'react';
import './Addtask.css';
import {useDispatch} from 'react-redux';
import {addTask} from '../../JS/actions/actionTask';

const Addtask = () => {
  const[myInput, setMyInput] =useState('');
  const handleChange=e=>setMyInput(e.target.value);

  const dispatch=useDispatch();

  const addTodo =(e)=>{
    // id: Math.floor(Math.random() * 10000); //when I click to button:page are refreach=>i will make it just the form refreach
    if(myInput){
      e.preventDefault();
      dispatch(addTask({description:myInput, id:Date.now(), isDone:false }))
      setMyInput('');//when I click to btn input come back clean      
      }
    else{
      alert("Ooops! You didn't write your To Do description.")
    }
  }
  return (
    <>
      <h1>What's the plan?</h1>
      <form className="todo-form" onSubmit={addTodo}>
        <input 
          className="todo-input"
          value={myInput}
          onChange={handleChange}
          type="text"
          name="text"
          placeholder ="Add a to do"
        />
        <button className="todo-button" onClick={addTodo} > Add to do </button>
      </form>
    </>
  )
}

export default Addtask;
