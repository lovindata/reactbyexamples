import './App.css';

function App(): JSX.Element {
  // The component `Job` and its props are used with <Job ??? /> 👇
  return (
    <div className="App">
      <Job salary={90000} position="Senior SDE" company="Amazon" />
      <Job salary={12000} position="Junior SDE" company="Google" />
      <Job salary={10000} position="Project Manager" company="Netflix" />
    </div>
  );
};

// This is the component `Job` with props 👇
interface JobArgs {
  salary: number,
  position: string,
  company: string
};
const Job = (props: JobArgs): JSX.Element => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h1 className='name'>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  )
};

export default App;
