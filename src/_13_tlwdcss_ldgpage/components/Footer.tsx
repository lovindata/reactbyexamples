import logo from "../img/logo-white.svg";
import fbIcon from "../img/icon-facebook.svg";
import ytIcon from "../img/icon-notad-youtube.svg";
import twitterIcon from "../img/icon-twitter.svg";
import pinterestIcon from "../img/icon-pinterest.svg";
import instaIcon from "../img/icon-notad-instagram.svg";

// Component
export const Footer = () => (
  <footer className="bg-veryDarkBlue">
    <div className="container mx-auto flex flex-col-reverse justify-between space-y-8 px-6 py-10 md:flex-row md:space-y-0">
      {/* Logos */}
      <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:items-start md:space-y-0">
        <p className="my-6 text-white md:hidden">Copyright © 2022, All Rights Reserved</p>
        <div>
          <img src={logo} alt="" className="h-8 cursor-pointer" />
        </div>
        <div className="flex flex-row space-x-4">
          <img src={fbIcon} alt="" className="h-8 cursor-pointer" />
          <img src={ytIcon} alt="" className="h-8 cursor-pointer" />
          <img src={twitterIcon} alt="" className="h-8 cursor-pointer" />
          <img src={pinterestIcon} alt="" className="h-8 cursor-pointer" />
          <img src={instaIcon} alt="" className="h-8 cursor-pointer" />
        </div>
      </div>

      {/* Links */}
      <div className="flex flex-row justify-around space-x-32 text-white">
        <div className="flex flex-col space-y-3">
          <a href="/#">Home</a>
          <a href="/#">Pricing</a>
          <a href="/#">Products</a>
          <a href="/#">About</a>
        </div>
        <div className="flex flex-col space-y-3">
          <a href="/#">Careers</a>
          <a href="/#">Community</a>
          <a href="/#">Privacy Policy</a>
        </div>
      </div>

      {/* Ends */}
      <div className="flex flex-col justify-between">
        <form>
          <div className="flex space-x-3">
            <input
              type="text"
              className="flex-1 rounded-full px-4 focus:outline-none"
              placeholder="Updated in your inbox"
            />
            <button
              onSubmit={() => {}}
              className="cursor-pointer rounded-full bg-brightRed px-6 py-2 text-white hover:bg-brightRedLight">
              Go
            </button>
          </div>
        </form>
        <p className="hidden text-white md:block">Copyright © 2022, All Rights Reserved</p>
      </div>
    </div>
  </footer>
);
