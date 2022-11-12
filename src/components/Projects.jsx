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
          <p className="text-2xl">
            I am always working on new projects. Currently, I'm working on my
            React skills.
          </p>
        </div>

        {/* Projects */}
        <div className="grid sm:grid-cols-2  md:grid-cols-3 gap-4 mt-[-20px] text-black">
          {/* Project 1 • Good Coffee */}
          <div className="rounded-md shadow-lg bg-[#fff]">
            <a href="https://coffeeshopsite.netlify.app" target="_blank">
              <img
                src={Pourover}
                className="rounded-lg hover:scale-105 duration-300"
                alt="A hand poured latte next to a laptop"
              />
            </a>
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2 text-center">Title</div>
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

          {/* Project 2 • Title */}
          <div className="rounded-md shadow-lg bg-[#fff]">
            <a href="https://coffeeshopsite.netlify.app" target="_blank">
              <img
                src={Pourover}
                className="rounded-lg hover:scale-105 duration-300"
                alt="A hand poured latte next to a laptop"
              />
            </a>
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2 text-center">Title</div>
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

          {/* Project 3 • Title */}
          <div className="rounded-md shadow-lg bg-[#fff]">
            <a href="https://coffeeshopsite.netlify.app" target="_blank">
              <img
                src={Pourover}
                className="rounded-lg hover:scale-105 duration-300"
                alt="A hand poured latte next to a laptop"
              />
            </a>
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2 text-center">Title</div>
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
          <p className="py-6 text-xl">Here are a few of my recent projects:</p>
          <p className="text-2xl">
            I am always working on new projects. Currently, I'm working on my
            React skills.
          </p>
        </div>

        {/* Projects */}
        <div className="grid sm:grid-cols-2  md:grid-cols-3 gap-4 mt-[-20px] text-black">
          {/* Project 1 • Good Coffee */}
          <div className="rounded-md shadow-lg bg-[#fff]">
            <a href="https://coffeeshopsite.netlify.app" target="_blank">
              <img
                src={Pourover}
                className="rounded-lg hover:scale-105 duration-300"
                alt="A hand poured latte next to a laptop"
              />
            </a>
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2 text-center">Title</div>
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

          {/* Project 2 • Title */}
          <div className="rounded-md shadow-lg bg-[#fff]">
            <a href="https://coffeeshopsite.netlify.app" target="_blank">
              <img
                src={Pourover}
                className="rounded-lg hover:scale-105 duration-300"
                alt="A hand poured latte next to a laptop"
              />
            </a>
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2 text-center">Title</div>
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

          {/* Project 3 • Title */}
          <div className="rounded-md shadow-lg bg-[#fff]">
            <a href="https://coffeeshopsite.netlify.app" target="_blank">
              <img
                src={Pourover}
                className="rounded-lg hover:scale-105 duration-300"
                alt="A hand poured latte next to a laptop"
              />
            </a>
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2 text-center">Title</div>
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
    </div>
  );
};

export default Projects;
