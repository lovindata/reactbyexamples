import "./App.css";
import { RootState, store } from "./store";
import { login, logout } from "./loginSlice";
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
  const loginState = useSelector((state: RootState) => state.login);
  const dispatch = useDispatch();
  const [hdleInSessTok, setHdleInSessTok] = useState<string>("");

  // Render
  return (
    <div>
      {loginState.value.isLogged ? (
        <>
          <p>Hello {loginState.value.sessionToken}!</p>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <>
          <input
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setHdleInSessTok(event.target.value)}></input>
          <button onClick={() => dispatch(login(hdleInSessTok))}>Login</button>
        </>
      )}
    </div>
  );
};

export default App;
