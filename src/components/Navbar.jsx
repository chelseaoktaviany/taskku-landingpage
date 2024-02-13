import { useState } from "react";
import logo from "../assets/svg/logo.svg";
import hamburger from "../assets/svg/hamburger.svg";
import close from "../assets/svg/close.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="w-full h-[80px] bg-white border-b">
      <div className="md:max-w-[1280px] sm:max-w-[600px] max-w-[400px] m-auto w-full h-full flex justify-between items-center">
        <a href="/">
          <img src={logo} className="h-[25px]" />
        </a>

        <div className="hidden md:flex items-center">
          <ul className="flex gap-8">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#testimonial">Testimonial</a>
            </li>
            <li>
              <a href="#download">Download</a>
            </li>
            <li>
              <a href="#newsletter">Newsletter</a>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex">
          <a
            className="px-8 py-3 rounded-md bg-[#7860C3] text-[#F4F4F4] font-bold hover:bg-[#624ba7]"
            href="#download"
          >
            Get demo
          </a>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          <img src={toggle ? close : hamburger} className="w-[25px] h-[25px]" />
        </div>
      </div>

      <div
        className={
          toggle ? "absolute z-10 p-4 bg-white w-full px-8 md:hidden" : "hidden"
        }
      >
        <ul>
          <li className="p-4 hover:bg-gray-100">
            <a href="#home">Home</a>
          </li>
          <li className="p-4 hover:bg-gray-100">
            <a href="#about">About</a>
          </li>
          <li className="p-4 hover:bg-gray-100">
            <a href="#testimonial">Testimonial</a>
          </li>
          <li className="p-4 hover:bg-gray-100">
            <a href="#download">Download</a>
          </li>
          <li className="p-4 hover:bg-gray-100">
            <a href="#newsletter">Newsletter</a>
          </li>
          <div className="flex flex-col my-4 gap-4">
            <a
              className="px-8 py-5 rounded-md bg-[#7860C3] text-[#F4F4F4] font-bold"
              href="#download"
            >
              Get demo
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
