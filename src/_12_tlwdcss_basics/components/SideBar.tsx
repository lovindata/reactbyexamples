// Some icons from 'react-icons'
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

// SideBar component
export const SideBar = () => {
  // Render
  return (
    /*
      - `flex-col` main axis vertically & cross axis horizontally
      - `h-screen` take the entire height of the viewport
      */
    <div className="flex h-screen w-16 flex-col justify-center bg-gray-100 shadow-lg dark:bg-gray-900">
      <SideBarIcon icon={<FaFire size="28" />} text={"tooltip fire 🔥"} />
      <SideBarIcon icon={<BsPlus size="32" />} text={"tooltip plus 🌈"} />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} text={"tooltip light ✨"} />
      <SideBarIcon icon={<FaPoo size="20" />} text={"tooltip poo 💩"} />
      <SideBarIcon icon={<BsGearFill size="22" />} text={"tooltip gear 🔧"} />
    </div>
  );
};

// SideBar Icon component
const SideBarIcon = (props: { icon: JSX.Element; text: string }) => {
  return (
    <div className="sidebar-icon group">
      {/* 👆 `group` means child elements will be styled based on itself changing state*/}
      {props.icon}
      <span className="sidebar-tooltip group-hover:scale-100">{props.text}</span>
      {/* 👆 `group-hover` means if where the `group` is hovered then `scale-100`*/}
    </div>
  );
};
