import React from 'react';
import './ListTask.css'
import { useSelector, useDispatch } from 'react-redux';
import {deleteTask, completeTask} from '../../JS/actions/actionTask';
import Task from '../Task/Task';
import { IoIosTrash } from 'react-icons/io';
import { IoMdCheckmark } from 'react-icons/io';

const ListTask = () => {
  // const list=useSelector(state => state.list)
  const list=useSelector(state => state.reducerTask.list)
  const dispatch=useDispatch()
  return (
    list.map((item,key)=>
      <div 
        className={item.isComplete ? 'todo-row complete' : 'todo-row'}
        key={key}
      >
        <p style={{margin:0, textDecoration: item.isDone? "line-through":null}}>
          {item.description} 
        </p>
        <div className='icons'>
          {/* <button onClick={()=>dispatch(deleteTask(item.id))}> Delete </button> */}
          <IoIosTrash onClick={()=>dispatch(deleteTask(item.id))} />

          <Task item={item}/>

          {/* <button onClick={()=>dispatch(completeTask(item.id))}> {item.isDone ? "unDone" : "isDone"} </button> */}
          <IoMdCheckmark
            className='complete-icon'
            onClick={()=>dispatch(completeTask(item.id))} 
          />

        </div>      
      </div>
    )
  )
}

export default ListTask;