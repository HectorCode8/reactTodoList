import { TaskCreator } from "./components/taskCreator.js";
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
    console.log('cargo')
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems));
  }, [ taskItems ])

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />

      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {taskItems.map((taskItem, index) => (
            <tr key={index}>
              <td>{taskItem.name}</td>
              <td>
                <input
                  type="checkbox"
                  checked={taskItem.done}
                  onChange={() => {
                    const newTaskItems = [...taskItems];
                    newTaskItems[index].done = !newTaskItems[index].done;
                    setTaskItems(newTaskItems);
                  }
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {
        taskItems.map(task => (
          <div>
            {task.name}
          </div>
        ))
      }

    </div>
  );
}

export default App;
