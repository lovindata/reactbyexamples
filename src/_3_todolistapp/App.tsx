import './App.css';
import { useState } from 'react';
import { Tasks } from './Tasks';

function App(): JSX.Element {
  // Initialize
  const [taskNameToAdd, setTaskNameToAdd] = useState<string>("");
  const [allTasks, setAllTasks] = useState<{ id: number, taskName: string, color: string }[]>([]); // Will save JSON object of tasks

  // Handlers (⚠️ Need to investigate what type is `event`)
  const handleTaskNameToAdd = (event: any): void => { setTaskNameToAdd(event.target.value) };
  const handleAddForAllTasks = (): void => { 
    const allTasksLen: number = allTasks.length
    const genId: number = allTasksLen === 0 ? 1 : allTasks[allTasksLen - 1].id + 1 // 👈 Use the last element ID + 1 for the new task ID
    const taskToAdd: { id: number, taskName: string, color: string } =
      { id: genId, taskName: taskNameToAdd, color: "red" } // Saving the task as a JSON object with ID for identifying tasks
    setAllTasks([...allTasks, taskToAdd])
  };
  const handleDelForAllTasks = (taskId: number): void => { setAllTasks(allTasks.filter(x => x.id !== taskId)) };
  const handleCompleteTask = (taskId: number): void => 
    { setAllTasks(allTasks.map(x => x.id === taskId ? { ...x, color: "green" } : x))}; // Using `...` for copy `x` JSON object

  // Render
  return (
    // Usage here on the event `onClick` 👇
    <div className="App">
      {/* Top for adding tasks */}
      <div>
        <input onChange={handleTaskNameToAdd}></input>
        <button onClick={handleAddForAllTasks}>Add Task</button>
      </div>

      {/* Bottom for listing tasks added (Passing functions in external components 👇) */}
      <Tasks allTasks={allTasks} handleDelForAllTasks={handleDelForAllTasks} handleCompleteTask={handleCompleteTask} />
    </div>
  );
};

export default App;
