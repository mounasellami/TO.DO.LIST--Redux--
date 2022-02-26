import './App.css';
import Addtask from './components/Addtask/Addtask';
import ListTask from './components/ListTask/ListTask';

function App() {
  return (
    <div className='todo-app'>
       <Addtask />
       <ListTask />
    </div>
  );
};

export default App;
