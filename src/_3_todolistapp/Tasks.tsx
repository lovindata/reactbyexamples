// Tasks component
interface TasksArgs {
  allTasks: { id: number, taskName: string, color: string }[],
  handleCompleteTask: (taskId: number) => void,
  handleDelForAllTasks: (taskId: number) => void
};
export const Tasks = (props: TasksArgs): JSX.Element => { return (
  <div>
    {props.allTasks.map((task, _) => <Task taskName={task.taskName} id={task.id} color={task.color}
      handleCompleteTask={props.handleCompleteTask} handleDelForAllTasks={props.handleDelForAllTasks} />)}
  </div>
)};
  
// Task component
export interface TaskArgs {
  id: number,
  taskName: string,
  color: string,
  handleCompleteTask: (taskId: number) => void,
  handleDelForAllTasks: (taskId: number) => void
};
const Task = (props: TaskArgs): JSX.Element => { return (
  <div>
    <h1 style={{color: props.color}}> {props.taskName} </h1>
    <button onClick={() => props.handleCompleteTask(props.id)}>✅ Complete ✅</button> {/* 👈 Using functions passed via props */}
    <button onClick={() => props.handleDelForAllTasks(props.id)}>X</button>
  </div>
)};