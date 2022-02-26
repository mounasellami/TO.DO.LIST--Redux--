import {createStore} from 'redux';
import rootReducer from '../reducers/index';
// import reducerTask from '../reducers/reducerTask'

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;