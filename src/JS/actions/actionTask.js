import { ADD_TASK,
         COMPLETE_TASK,
         EDIT_TASK,
         DELETE_TASK,
       }
from "../constants/actionsType";

export const addTask=(payload)=>{
    return{
        type: ADD_TASK ,
        payload
    }
}
export const deleteTask=(payload)=>{
    return{
        type: DELETE_TASK ,
        payload
    }
}
export const completeTask=(id)=>{
    return{
        type: COMPLETE_TASK,
        id
    }
}
export const editTask=(payload)=>{
    return{
        type: EDIT_TASK ,
        payload
    }
}