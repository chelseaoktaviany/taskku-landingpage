import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import Wave from "react-wavify";

const Footer = () => {
  const date = new Date();

  return (
    <div className="relative w-full bg-[#5e51b3] py-20">
      <div className="md:max-w-[1280px] sm:max-w-[600px] max-w-[400px] m-auto">
        <Wave
          fill="#5e51b3"
          style={{
            position: "absolute",
            top: "-50px",
            left: 0,
            height: "50px",
          }}
          amplitude={20}
          speed={0.3}
          points={4}
        />
        <h1 className="py-3 text-2xl font-bold text-[#f4f4f4] text-center">
          Contact Us
        </h1>
        <div className="py-3 flex justify-center items-center gap-5">
          <a href="">
            <FaFacebook size={28} color={"#f4f4f4"} />
          </a>
          <a href="">
            <FaLinkedin size={28} color={"#f4f4f4"} />
          </a>
          <a href="">
            <FaInstagram size={28} color={"#f4f4f4"} />
          </a>
        </div>
        <div className="p-4 flex justify-center items-center">
          <ul className="flex gap-5">
            <li>
              <a href="#home" className="text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-white">
                About
              </a>
            </li>
            <li>
              <a href="#testimonial" className="text-white">
                Testimonial
              </a>
            </li>
            <li>
              <a href="#download" className="text-white">
                Download
              </a>
            </li>
            <li>
              <a href="#newsletter" className="text-white">
                Newsletter
              </a>
            </li>
          </ul>
        </div>
        <p className="text-gray-300 text-center font-normal">
          Copyright &copy; {date.getFullYear()}. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
