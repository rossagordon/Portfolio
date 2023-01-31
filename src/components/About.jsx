import React from 'react';
import Typing from '../assets/typing.png';

const About = () => {
  return (
    <div
      name="about"
      className="w-full sm:h-[130vh] md:h-[120vh] bg-[#E5E5E5 ] text-[#000]"
    >
      <div className="mx-auto flex flex-col md:flex-row items-center w-full h-full mb-5i">
        {/* Left Side */}
        <div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
          <h1 className="font-bold text-3xl my-4">
            I'm Ross. Welcome to my portfolio.
          </h1>
          <p className="mb-4 text-xl">
            As a Front-End Developer based in Richmond, VA, I excel in creating
            aesthetically pleasing and user-friendly websites and applications.
            My journey began as a drummer, touring across North America and
            Europe, which eventually led me to technical support roles at Apple,
            where I discovered my passion for web development.
          </p>
          <p className="mb-4 text-xl">
            With a Full Stack + Mobile certificate from Nucamp Coding Bootcamp
            and experience as an Apple Genius, I bring a unique combination of
            technical expertise and customer-centric approach to my work.
            Currently, I am participating in a Career Experience program,
            working as a Front-End Developer for Apple. In my free time, I enjoy
            drumming, traveling, and technology.
          </p>
        </div>
        {/* <!--Right Col--> */}
        <div className="w-full lg:w-1/2 lg:py-6 text-center">
          <img
            src={Typing}
            className="mt-[-100px] w-[85%] f-[85%] mx-auto pt-8"
            alt="Typing"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
{
  /* <a href="https://storyset.com/work">Work illustrations by Storyset</a> */
}
