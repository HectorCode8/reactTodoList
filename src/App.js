import { TaskCreator } from "./components/taskCreator.js";
import { TaskTable} from "./components/TaskTable.js";
import {useState, useEffect} from 'react'
import "./App.css";

function App() {
  const [taskItems, setTaskItems] = useState([]);

  function createNewTask(taskName) {
    if(!taskItems.find(task => task.name === taskName)) {
      setTaskItems([...taskItems, {name: taskName, done: false}]);
    }
  }

  useEffect(() => {
    let data = localStorage.getItem('tasks');
    if(data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems));
  }, [ taskItems ])

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />
      <TaskTable tasks={taskItems} />
    </div>
  );
}

export default App;
