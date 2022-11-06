import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = () => {
  // Navbar Toggle
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000000] text-white">
      <div>
        <h1 className="font-bold">RG</h1>
      </div>

      {/* Navbar */}
      <ul className="hidden md:flex">
        <li className="hover:underline px-4">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:underline px-4">
          <Link to="home" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:underline px-4">
          <Link to="home" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="hover:underline px-4">
          <Link to="home" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <AiOutlineMenu /> : <AiOutlineClose />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#000000]'
        }
      >
        <li className="py-6 text-4xl">
          <Link to="home" smooth={true} duration={500} onClick={handleClick}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="about" smooth={true} duration={500} onClick={handleClick}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={handleClick}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="contact" smooth={true} duration={500} onClick={handleClick}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
