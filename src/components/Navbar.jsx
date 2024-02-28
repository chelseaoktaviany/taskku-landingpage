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
    <div className="h-[80px] w-full border-b bg-white">
      <div className="m-auto flex size-full max-w-[400px] items-center justify-between sm:max-w-[600px] md:max-w-[1280px]">
        <a href="/">
          <img src={logo} className="h-[25px]" />
        </a>

        <div className="hidden items-center md:flex">
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
            className="rounded-md bg-[#7860C3] px-8 py-3 font-bold text-[#F4F4F4] hover:bg-[#624ba7]"
            href="#download"
          >
            Get demo
          </a>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          <img src={toggle ? close : hamburger} className="size-[25px]" />
        </div>
      </div>

      <div
        className={
          toggle ? "absolute z-10 w-full bg-white p-4 px-8 md:hidden" : "hidden"
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
          <div className="my-4 flex flex-col gap-4">
            <a
              className="rounded-md bg-[#7860C3] px-8 py-5 font-bold text-[#F4F4F4]"
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
