import "./App.css";
import { useState, createContext } from "react";
import { Main } from "./Main";
import { ProfilSettings } from "./ProfilSettings";

// 👇⚠️ Create a global context to store variables
export interface IAppContext {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}
export const AppContext = createContext<IAppContext | null>(null);

function App(): JSX.Element {
  // Profil user
  const [username, setUsername] = useState<string>("default");

  // Render
  return (
    <div className="App">
      {/* Variables accessible inside this context 👇 */}
      <AppContext.Provider
        value={{
          username: username,
          setUsername: setUsername,
        }}>
        <Main />
        <ProfilSettings />
      </AppContext.Provider>
    </div>
  );
}

export default App;
