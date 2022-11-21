import "./App.css";

// Some icons from 'react-icons'
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

function App(): JSX.Element {
  // Render
  return (
    <div className="flex">
      <SideBar />
    </div>
  );
}

// SideBar component
const SideBar = () => {
  // Render
  return (
    /*
    - `fixed` means will never move of the viewport (== for example -> stay here even if we scroll down the page)
    - `flex-col` main axis vertically & cross axis horizontally
    - `h-screen` take the entire height of the viewport
    */
    <div className="fixed top-0 left-0 m-0 flex h-screen w-16 flex-col bg-gray-900 text-white shadow-lg">
      <SideBarIcon icon={<FaFire size="28" />} />
      <SideBarIcon icon={<BsPlus size="32" />} />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} />
      <SideBarIcon icon={<FaPoo size="20" />} />
      <SideBarIcon icon={<BsGearFill size="22" />} />
    </div>
  );
};

// SideBar Icon component
const SideBarIcon = (props: { icon: JSX.Element }) => {
  return <div className="sidebar-icon">{props.icon}</div>;
};

export default App;
