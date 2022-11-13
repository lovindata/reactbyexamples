import "./App.css";
import { store, login, logout, LoginState } from "./store";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { Provider } from "react-redux";

function App(): JSX.Element {
  // Render
  return (
    <div className="App">
      <Provider store={store}>
        <LoggedOutOrIn />
      </Provider>
    </div>
  );
}

// LoggedOutIn component
const LoggedOutOrIn = (): JSX.Element => {
  // Logic
  const loginState = useSelector((state: LoginState) => state);
  const dispatch = useDispatch();
  const [hdleInSessTok, setHdleInSessTok] = useState<string>("");

  // Render
  if (loginState.isLogged)
    return (
      <div>
        <p>Hello {loginState.sessionToken}!</p>
        <button onClick={() => dispatch(logout())}>Logout</button>
      </div>
    );
  else
    return (
      <div>
        <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => setHdleInSessTok(event.target.value)}></input>
        <button onClick={() => dispatch(login(hdleInSessTok))}>Login</button>
      </div>
    );
};

export default App;
