import { useState, useContext } from "react";
import { AppContext, IAppContext } from "./App";

export const ProfilSettings = (): JSX.Element => {
  // Prerequisites
  const [inputTyped, setInputTyped] = useState<string>("");
  const { setUsername } = useContext(AppContext) as IAppContext; // 👈⚠️ Unwrap the setter of `username` from `AppContext`

  // Render
  return (
    <div>
      <input onChange={(event) => setInputTyped(event.target.value)}></input>
      <button onClick={() => setUsername(inputTyped)}>Save</button>
    </div>
  );
};
