import "./App.css";
import { SideBar } from "./components/SideBar";
import { DarkMode } from "./components/DarkMode";
import { useState } from "react";

// Main component
function App(): JSX.Element {
  // Logic
  const [isDark, setSwitchDark] = useState(true);

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
