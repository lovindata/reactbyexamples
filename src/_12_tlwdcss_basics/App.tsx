import "./App.css";
import { SideBar } from "./components/SideBar";
import { DarkMode } from "./components/DarkMode";

// Main component
function App(): JSX.Element {
  // Render
  return (
    <div className="App flex bg-gray-500">
      {/* SideBar */}
      <SideBar />

      {/* Other components */}
      <div className="flex flex-1 flex-col">
        <DarkMode />
      </div>
    </div>
  );
}

export default App;
