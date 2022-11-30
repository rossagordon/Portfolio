import React from 'react';
import Pourover from '../assets/espresso.jpg';
import Scorpion from '../assets/scorpion.png';
import Edgewood from '../assets/green.png';
import Seal from '../assets/seal.png';

const Projects = () => {
  return (
    <div name="projects" className="bg-[#E5E5E5v] w-full text-black">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-5xl font-bold inline">Projects</p>
          <p className="py-6 text-xl">Here are a few of my recent projects:</p>
        </div>

        {/* Projects */}
        <div className="grid sm:grid-cols-2  md:grid-cols-3 gap-4 mt-[-20px] text-black">
          {/* Project 1 • AI Image Generator */}
          <div className="rounded-md shadow-lg bg-[#fff]">
            <a href="https://coffeeshopsite.netlify.app" target="_blank">
              <img
                src={Pourover}
                className="rounded-lg hover:scale-105 duration-300"
                alt="A hand poured latte next to a laptop"
              />
            </a>
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2 text-center">
                AI Image Generator
              </div>
              <p className="pb-2">Description</p>
              <p className="font-extrabold">Technologies Used:</p>
              <p>Lorem ipsum dolor sit.</p>
            </div>
            <div className="text-center mt-5">
              <a href="https://coffeeshopsite.netlify.app/" target="_blank">
                <button className="text-center rounded-lg px-2 py-2 m-2 bg-[#fff] text-[#000] border font-bold text-lg hover:bg-[#000] hover:text-[#fff]">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/rossagordon/Coffee-Shop-Landing-Page"
                target="_blank"
              >
                <button className="text-center rounded-lg px-2 py-2 m-2 bg-[#fff] text-[#000] border font-bold text-lg hover:bg-[#000] hover:text-[#fff]">
                  Code
                </button>
              </a>
            </div>
          </div>

          {/* Project 2 • CRUD App */}
          <div className="rounded-md shadow-lg bg-[#fff]">
            <a href="https://coffeeshopsite.netlify.app" target="_blank">
              <img
                src={Pourover}
                className="rounded-lg hover:scale-105 duration-300"
                alt="A hand poured latte next to a laptop"
              />
            </a>
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2 text-center">CRUD App</div>
              <p className="pb-2">Description</p>
              <p className="font-extrabold">Technologies Used:</p>
              <p>Lorem ipsum dolor sit.</p>
            </div>
            <div className="text-center mt-5">
              <a href="https://coffeeshopsite.netlify.app/" target="_blank">
                <button className="text-center rounded-lg px-2 py-2 m-2 bg-[#fff] text-[#000] border font-bold text-lg hover:bg-[#000] hover:text-[#fff]">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/rossagordon/Coffee-Shop-Landing-Page"
                target="_blank"
              >
                <button className="text-center rounded-lg px-2 py-2 m-2 bg-[#fff] text-[#000] border font-bold text-lg hover:bg-[#000] hover:text-[#fff]">
                  Code
                </button>
              </a>
            </div>
          </div>

          {/* Project 3 • Crypto Tracker */}
          <div className="rounded-md shadow-lg bg-[#fff]">
            <a href="https://coffeeshopsite.netlify.app" target="_blank">
              <img
                src={Pourover}
                className="rounded-lg hover:scale-105 duration-300"
                alt="A hand poured latte next to a laptop"
              />
            </a>
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2 text-center">
                Crypto Tracker
              </div>
              <p className="pb-2">Description</p>
              <p className="font-extrabold">Technologies Used:</p>
              <p>Lorem ipsum dolor sit.</p>
            </div>
            <div className="text-center mt-5">
              <a href="https://coffeeshopsite.netlify.app/" target="_blank">
                <button className="text-center rounded-lg px-2 py-2 m-2 bg-[#fff] text-[#000] border font-bold text-lg hover:bg-[#000] hover:text-[#fff]">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/rossagordon/Coffee-Shop-Landing-Page"
                target="_blank"
              >
                <button className="text-center rounded-lg px-2 py-2 m-2 bg-[#fff] text-[#000] border font-bold text-lg hover:bg-[#000] hover:text-[#fff]">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Landing Pages */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-5xl font-bold inline">Landing Pages</p>
          <p className="py-6 text-xl">
            Here are a few landing pages I've made:
          </p>
        </div>

        {/* Projects */}
        <div className="grid sm:grid-cols-2  md:grid-cols-3 gap-4 mt-[-20px] text-black">
          {/* Project 1 • Forum of Passion */}
          <div className="rounded-md shadow-lg bg-[#fff]">
            <a href="https://www.edgewoodcontracting.com" target="_blank">
              <img
                src={Edgewood}
                className="rounded-lg hover:scale-105 duration-300"
                alt="A hand poured latte next to a laptop"
              />
            </a>
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2 text-center">
                Forum of Passion
              </div>
              <p className="pb-2">Description</p>
              <p className="font-extrabold">Technologies Used:</p>
              <p>React • Astro • Tailwind</p>
            </div>
            <div className="text-center mt-5">
              <a href="https://www.edgewoodcontracting.com" target="_blank">
                <button className="text-center rounded-lg px-2 py-2 m-2 bg-[#fff] text-[#000] border font-bold text-lg hover:bg-[#000] hover:text-[#fff]">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/rossagordon/Edgewood-Contracting"
                target="_blank"
              >
                <button className="text-center rounded-lg px-2 py-2 m-2 bg-[#fff] text-[#000] border font-bold text-lg hover:bg-[#000] hover:text-[#fff]">
                  Code
                </button>
              </a>
            </div>
          </div>

          {/* Project 2 • Edgewood Contracting */}
          <div className="rounded-md shadow-lg bg-[#fff]">
            <a href="https://www.edgewoodcontracting.com" target="_blank">
              <img
                src={Edgewood}
                className="rounded-lg hover:scale-105 duration-300"
                alt="A hand poured latte next to a laptop"
              />
            </a>
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2 text-center">
                Edgewood Contracting
              </div>
              <p className="pb-2">Description</p>
              <p className="font-extrabold">Technologies Used:</p>
              <p>React • Tailwind CSS</p>
            </div>
            <div className="text-center mt-5">
              <a href="https://www.edgewoodcontracting.com" target="_blank">
                <button className="text-center rounded-lg px-2 py-2 m-2 bg-[#fff] text-[#000] border font-bold text-lg hover:bg-[#000] hover:text-[#fff]">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/rossagordon/Edgewood-Contracting"
                target="_blank"
              >
                <button className="text-center rounded-lg px-2 py-2 m-2 bg-[#fff] text-[#000] border font-bold text-lg hover:bg-[#000] hover:text-[#fff]">
                  Code
                </button>
              </a>
            </div>
          </div>

          {/* Project 3 • Lotus of my Heart */}
          <div className="rounded-md shadow-lg bg-[#fff]">
            <a href="https://www.lotusofmyheart.net/" target="_blank">
              <img
                src={Scorpion}
                className="rounded-lg hover:scale-105 duration-300"
                alt="A hand poured latte next to a laptop"
              />
            </a>
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2 text-center">
                Lotus of my Heart
              </div>
              <p className="pb-2">Description</p>
              <p className="font-extrabold">Technologies Used:</p>
              <p>React • Tailwind CSS</p>
            </div>
            <div className="text-center mt-5">
              <a href="https://www.lotusofmyheart.net/" target="_blank">
                <button className="text-center rounded-lg px-2 py-2 m-2 bg-[#fff] text-[#000] border font-bold text-lg hover:bg-[#000] hover:text-[#fff]">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/rossagordon/Lotus-of-My-Heart"
                target="_blank"
              >
                <button className="text-center rounded-lg px-2 py-2 m-2 bg-[#fff] text-[#000] border font-bold text-lg hover:bg-[#000] hover:text-[#fff]">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
