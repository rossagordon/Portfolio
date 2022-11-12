import React from 'react';
import { BsFillArrowRightCircleFill, BsArrowDownShort } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#000000] text-[#fff]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-7xl font-bold">Ross Gordon</h1>
        <h2 className="text-4xl sm:text-7xl font-bold">Front-End Developer</h2>
        <p className="py-4 max-w-[700px]">Richmond, VA • Drummer • Traveler</p>
        <div className="flex flex-cols-2 gap-4">
          <button className=" bg-[#fca311] border-2 border-black group px-6 py-3 my-2 flex items-center">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="text-black"
            >
              Projects
            </Link>
          </button>

          <button className="bg-[#fca311] border-2 border-black group px-6 py-3 my-2 flex items-center">
            <a href="/" target="_blank" className="text-black">
              Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
