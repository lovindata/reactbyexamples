import logo from "../img/logo.svg";

// Component
export const NavBar = () => (
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
    </div>
  </nav>
);
