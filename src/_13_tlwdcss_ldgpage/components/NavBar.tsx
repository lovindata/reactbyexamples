import logo from "../img/logo.svg";
import { useState } from "react";

// Component
export const NavBar = () => {
  // Logic
  const [hamState, setHamState] = useState<boolean>(false);

  // Render
  return (
    <nav className="container mx-auto p-6">
      {/* Within the navigation bar */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div>
          <img src={logo} alt="" className="cursor-pointer" />
        </div>

        {/* Menus */}
        <div className="hidden space-x-6 md:flex">
          <a href="/#" className="hover:text-darkGrayishBlue">
            Pricing
          </a>
          <a href="/#" className="hover:text-darkGrayishBlue">
            Product
          </a>
          <a href="/#" className="hover:text-darkGrayishBlue">
            About Us
          </a>
          <a href="/#" className="hover:text-darkGrayishBlue">
            Careers
          </a>
          <a href="/#" className="hover:text-darkGrayishBlue">
            Community
          </a>
        </div>

        {/* Get started button*/}
        <div className="hidden cursor-pointer rounded-full bg-brightRed px-6 pb-3 pt-2 text-white hover:bg-brightRedLight md:block">
          Get Started
        </div>

        {/* Hamburger icon */}
        <button
          className={`hamburger md:hidden ${hamState ? "hamburger-open" : ""}`}
          onClick={() => setHamState(!hamState)}>
          <span className="hamburger-top"></span>
          <span className="hamburger-mid"></span>
          <span className="hamburger-bot"></span>
        </button>
      </div>

      {/* Hamburger menu */}
      <div className="md:hidden">
        {/*
      - `left-6` means content of 24px on the left (idem idea for right)
      - `absolute` means only relative to its parent tag (like the other tags does not exists == superposition)
      */}
        <div
          className={`absolute left-6 right-6 mt-10 ${
            hamState ? "flex" : "hidden"
          } flex-col items-center space-y-6 bg-white py-8 font-bold drop-shadow-md`}>
          <a href="/#">Pricing</a>
          <a href="/#">Product</a>
          <a href="/#">About Us</a>
          <a href="/#">Careers</a>
          <a href="/#">Community</a>
        </div>
      </div>
    </nav>
  );
};
