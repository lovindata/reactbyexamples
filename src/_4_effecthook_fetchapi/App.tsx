import './App.css';
import { Axios } from 'axios';
import { useState, useEffect } from 'react';

function App(): JSX.Element {
  // State
  const [generatedExcuse, setExcuse] = useState<string>("");
  const [fetchedAtStart, setStart] = useState<string>("");

  // Fetcher API data
  const fetchData = (excuseType: string): void => {
    // Import just here 👇⚠️
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuseType}`).then(res: any => setExcuse(res.data[0].excuse))
  };

  // Use effect on state ELEMENT_UPDATE OR AT_START (This block can be commented if not testing the `useEffect`)
  // Remark: On refresh React checks if `useEffect` correctly used that's why there is a dummy mount & unmount (`<React.StrictMode>` in `index.js`)
  useEffect(() => {
    // When component mount
    console.log("MOUNT happened!")
    Axios.get(`https://catfact.ninja/fact`).then(res => {
    setStart(res.data.fact)})

    // When component unmount
    return () => console.log("UNMOUNT happened!")
  }, []); // 👈 AT_START (You can comment this line and try the line below 👇)
  //}, [generatedExcuse]); // ELEMENT_UPDATE ⚠️ If you put `[generatedExcuse]` instead of `[]` the effect inside will happen everytime `generatedExcuse` is mounted

  // Render
  return (
    <div className="App">
      <p> {fetchedAtStart} </p>
      <h1>Generate An Excuse</h1>
      <button onClick={() => fetchData("party")}>Party</button>
      <button onClick={() => fetchData("family")}>Family</button>
      <button onClick={() => fetchData("office")}>Office</button>
      <p> {generatedExcuse} </p>
    </div>
  );
};

export default App;
