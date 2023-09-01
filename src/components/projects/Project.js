import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const Projects = () => {
  let githubLink = "https://www.facebook.com/nur.ahamed.3538/";
  let projectLive = "https://www.facebook.com/nur.ahamed.3538/";

  return (
    <>
      <section
        id="projects"
        className="w-full py-20 border-b-[1px] border-b-black"
      >
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        {/* project 1 */}
        <div className="w-full flex flex-row ">
          <div className="w-1/3 my-2 p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
            <div className="grid xl:py-1  grid-row-1 md:grid-row-2 xl:grid-row-3 gap-6 xl:gap-0">
              {/* changes */}
              <div className="w-full h-[90%] overflow-hidden rounded-lg">
                <img
                  className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
                  src={projectOne}
                  alt="src"
                />
              </div>
              <div className="w-full mt-1 flex flex-row  gap-6">
                <div className="">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base uppercase text-designColor font-normal">
                      Fun Text Converter
                    </h3>
                    <div className="flex gap-2">
                      <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                        <BsGithub
                          onClick={() => window.open(githubLink , "_blank")}
                        />
                      </span>
                      <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                        <FaGlobe
                          onClick={() => window.open( projectLive, "_blank")}
                        />
                      </span>
                    </div>
                  </div>
                  <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                    You can convert your text to minions language, yoda and
                    groot language
                  </p>
                </div>
              </div>
            </div>
          </div>
        {/* project two  */}
        <div className="w-1/3 my-2 p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
            <div className="grid xl:py-1  grid-row-1 md:grid-row-2 xl:grid-row-3 gap-6 xl:gap-0">
              {/* changes */}
              <div className="w-full h-[90%] overflow-hidden rounded-lg">
                <img
                  className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
                  src={projectOne}
                  alt="src"
                />
              </div>
              <div className="w-full mt-1 flex flex-row  gap-6">
                <div className="">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base uppercase text-designColor font-normal">
                      Fun Text Converter
                    </h3>
                    <div className="flex gap-2">
                      <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                        <BsGithub
                          onClick={() => window.open(githubLink , "_blank")}
                        />
                      </span>
                      <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                        <FaGlobe
                          onClick={() => window.open(projectLive , "_blank")}
                        />
                      </span>
                    </div>
                  </div>
                  <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                    You can convert your text to minions language, yoda and
                    groot language
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* project three  */}
        <div className="w-1/3 my-2 p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
            <div className="grid xl:py-1  grid-row-1 md:grid-row-2 xl:grid-row-3 gap-6 xl:gap-0">
              {/* changes */}
              <div className="w-full h-[90%] overflow-hidden rounded-lg">
                <img
                  className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
                  src={projectOne}
                  alt="src"
                />
              </div>
              <div className="w-full mt-1 flex flex-row  gap-6">
                <div className="">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base uppercase text-designColor font-normal">
                      Fun Text Converter
                    </h3>
                    <div className="flex gap-2">
                      <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                        <BsGithub
                          onClick={() => window.open(githubLink , "_blank")}
                        />
                      </span>
                      <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                        <FaGlobe
                          onClick={() => window.open(projectLive , "_blank")}
                        />
                      </span>
                    </div>
                  </div>
                  <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                    You can convert your text to minions language, yoda and
                    groot language
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default Projects;
