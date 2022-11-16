import "./App.css";
import Axios from "axios";
import { AxiosResponse } from "axios";
import { useState, useEffect } from "react";

function App(): JSX.Element {
  // State
  const [generatedExcuse, setExcuse] = useState<string>("");
  const [fetchedAtStart, setStart] = useState<string>("");

  // Fetcher API data
  const fetchData = (excuseType: string): void => {
    // Import just here 👇⚠️
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuseType}`).then(
      (res: AxiosResponse<{ id: number; excuse: string }[], void>) => setExcuse(res.data[0].excuse)
    );
  };

  // Use effect on state ELEMENT_UPDATE, AT_START or ALWAYS (This block can be commented if not testing the `useEffect`)
  // Remark: On refresh React checks if `useEffect` correctly used that's why there is a dummy mount & unmount (`<React.StrictMode>` in `index.tsx`)
  useEffect((): (() => void) => {
    // When component mount
    console.log("MOUNT happened!");
    Axios.get(`https://catfact.ninja/fact`).then((res) => {
      setStart(res.data.fact);
    });

    // When component unmount
    return () => console.log("UNMOUNT happened!");
    // }, []); // 👈 AT_START (You can comment this line and try the line below 👇)
    // }, [generatedExcuse]); // ELEMENT_UPDATE ⚠️ If you put `[generatedExcuse]` instead of `[]` the effect inside will happen everytime `generatedExcuse` is mounted
  }); // ALWAYS (it means non stop)

  // Render
  return (
    <div className="App">
      <p> {fetchedAtStart} </p>
      <h1>Generate An Excuse</h1>
      <button onClick={(): void => fetchData("party")}>Party</button>
      <button onClick={(): void => fetchData("family")}>Family</button>
      <button onClick={(): void => fetchData("office")}>Office</button>
      <p> {generatedExcuse} </p>
    </div>
  );
}

export default App;
