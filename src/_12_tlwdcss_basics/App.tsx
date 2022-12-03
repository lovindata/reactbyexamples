import "./App.css";
import { SideBar } from "./components/SideBar";
import { DarkMode } from "./components/DarkMode";
import { useEffect, useState } from "react";

// Main component
function App(): JSX.Element {
  // Initalize DarkMode state
  const localStorageIsDark = localStorage.getItem("isDark"); // 👈 `localStorage` is key-value pair with value in string only
  const initialIsDark = localStorageIsDark === null || localStorageIsDark !== "false" ? true : false;
  const [isDark, setSwitchDark] = useState(initialIsDark);

  // Handler for keeping DarkMode setting
  useEffect(() => {
    localStorage.setItem("isDark", isDark ? "true" : "false"); // 👈 You can set a key-value like this
  }, [isDark]);

  // Render
  return (
    <div className={`App flex bg-gray-500 ${!isDark ? "" : "dark"}`}>
      {/* SideBar */}
      <SideBar />

      {/* Other components */}
      <div className="flex flex-1 flex-col">
        <DarkMode isDark={isDark} setSwitchDark={setSwitchDark} />
      </div>
    </div>
  );
}

export default App;
