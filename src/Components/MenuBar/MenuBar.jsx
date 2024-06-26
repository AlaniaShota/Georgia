import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLinks } from "./index";
import iconImg from "../../assets/icon/pngwing.com.png";

export const MenuBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div
      className={`shadow-md fixed w-full top-0 px-6 py-3 min-2xl:px-20 min-2xl:py-5 flex  z-50 transition-colors duration-500 ease-in 
  ${scrolled ? "bg-white" : "bg-transparent"}
  `}
    >
      <div className="flex flex-row justify-between w-full items-center">
        <Link to="/" className="flex items-center">
          <img src={iconImg} alt="Georgia Flag" className="w-10 object-cover" />
          <span
            className={`ml-4 transition-colors text-xl min-2xl:text-2xl duration-500 ease-in ${
              scrolled ? "text-black" : " text-white"
            }`}
          >
            GEORGIA
          </span>
        </Link>
        <NavLinks scrolled={scrolled} />
      </div>
    </div>
  );
};
