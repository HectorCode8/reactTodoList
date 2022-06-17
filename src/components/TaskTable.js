import {TaskRow} from './TaskRow'
export const TaskTable = ({tasks}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Task</th>
        </tr>
      </thead>
      <tbody>
        {
        tasks.map((task) => (
          <TaskRow key={task.name} task={task} />
            ))
        }
      </tbody>
    </table>
  );
};
