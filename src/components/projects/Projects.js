import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree, projectFour } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
    let gitMinion = "https://github.com/nurahamed/Banana-talk";
    let projectLiveMinion = "https://englishtominionslanguage.netlify.app/";
    let oldPortfolio = "https://nurahamedportfolio.netlify.app/";
    let githubLinkPf = "https://github.com/nurahamed/portfolio";
    const liveWeather = "https://climatecondition1.netlify.app/";
    let gitWeather = "https://github.com/nurahamed/weather-app"
    let project3Blog = "https://github.com/nurahamed/blog";

  return (
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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title=" Fun Text Converter"
          des="You can convert your text to minions language, yoda and groot language"
          src={projectOne}
          gitLink = {gitMinion}
          liveLink = {projectLiveMinion}
        />
        <ProjectsCard
          title="Portfolio website"
          des=" I have done many small project using HTML, CSS and JavaScript and those are hosted online."
          src={projectTwo}
          gitLink = { githubLinkPf}
          liveLink = {oldPortfolio}
        />
        <ProjectsCard
          title="Weather App"
          des="You can check your city weather condition hourly and 3 days forecast"
          src={projectThree}
          gitLink = {gitWeather}
          liveLink = {liveWeather}
        />
        <ProjectsCard
          title="Blog App"
          des="Under development"
          src={projectFour}
          gitLink = {project3Blog}
          liveLink = {"/"}
        />
      </div>
    </section>
  );
};

export default Projects;
