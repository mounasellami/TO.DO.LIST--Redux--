import { ADD_TASK, 
         DELETE_TASK,
         COMPLETE_TASK,
         EDIT_TASK,
} from "../constants/actionsType";

const initialState ={ list: [] }

const reducerTask=(state=initialState, action) =>{
    switch (action.type) { 
        case ADD_TASK:
            return {...state, list:[...state.list, action.payload]}
        case DELETE_TASK:
            return {...state, list: state.list.filter(el =>el.id !== action.payload)}
        case COMPLETE_TASK:
            return {...state, list: state.list.map(el=> el.id === action.id ? {...el, isDone: !el.isDone}:el )}
        case EDIT_TASK:
            return {...state, list: state.list.map(el=> el.id === action.payload.id ? {...el, description: action.payload.description}:el )}
        default:
           return state;
    }
}

export default reducerTask;