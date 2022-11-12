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
            I’m a Front-End Developer based in Richmond, Virginia. I’m
            passionate about creating attractive, easy-to-use websites and
            applications. Originally, my background is in music. I spent several
            years touring as a drummer in North America and Europe. When my
            touring slowed down, I began to work technical support roles at
            Apple, where I became aware of my interest in web development.
          </p>
          <p className="mb-4 text-xl">
            After a few months of online courses, I enrolled and graduated from
            Nucamp Coding Bootcamp (Full Stack + Mobile). I plan to use my
            acquired skills paired with my knowledge in troubleshooting to
            continuously learn and grow as a developer. In my free time, I enjoy
            playing drums, traveling to new countries, and getting outside.
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
