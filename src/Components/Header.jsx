import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import iconImg from "../assets/icon/pngwing.com.png";
import NavLinks from "./NavLinks";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 673) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`shadow-md fixed w-full top-0 px-6 py-3 flex z-50 transition-colors duration-500 ease-in ${
        scrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="flex flex-row justify-between w-full items-center">
        <Link to="/" className="flex items-center">
          <img src={iconImg} alt="Georgia Flag" className="w-10 object-cover" />
          <span
            className={`ml-2 transition-colors text-xl duration-500 ease-in ${
              scrolled ? "text-black" : " text-white"
            }`}
          >
            GEORGIA
          </span>
        </Link>
        <button onClick={() => setOpen(!open)}>
          {/* <FontAwesomeIcon
            //[object OBJECT] დასაფიქსია
            icon={`${open} ? ${faXmark} : ${faBars}`}
            size="lg"
            color={"#3b82f6"}
          /> */}
        </button>
        <NavLinks scrolled={scrolled} />
      </div>
    </div>
  );
};

export default Header;
