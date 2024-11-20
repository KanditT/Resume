import "./App.css";
import { FiDownload } from "react-icons/fi";
import EducationCard from "./EducationCard";
import ProjectCard from "./ProjectCard";
import SkillCard from "./SkillCard";

function App() {

  return (
    <div className="main-feild">
      {/* MYSELF */}
      <div className="my-info">
        <div></div>
        <div className="my-picture">
          <img
            src="myImage.png"
            alt="My Profile"
            className="my-image"
          />
        </div>
        <div className="my-text">
          <h2 className="my-name">Kandit Tanthanathewin</h2>
          <p className="my-faculty">Computer Engineering</p>
          <p className="my-opinion">
            I am currently a third-year student pursuing a Bachelor’s degree in Computer Engineering at Khon Kaen University. I am seeking a frontend position where I can apply and develop my skills continuously.
          </p>
          <div className="buttons-container">
            <a
              href="/resume_kandit.pdf"
              download="resume_kandit.pdf"
              className="button resume"
            >
              Resume <FiDownload />
            </a>
          </div>
        </div>
      </div>
      {/* INFORMATION */}
      <div  id="educations" className="my-overview scroll-m-24 mt-20 flex flex-col md:flex-row">
        {/* Education */}
        <div className="my-history flex-auto max-w-sm ">
          <h1 className="my-education text-3xl font-bold">Educations</h1>
          <div className="flex flex-col gap-3 my-6 ">
            <EducationCard
              title="Bachelor of Computer Engineering"
              institution="Khon Kaen University, Khon Kaen, Thailand"
              duration="Feb 2022 - Present"
              gpax="3.32"
              link="https://www.kku.ac.th/"
            />
            <EducationCard
              title="High School"
              institution="Khon Kaen Wittayayon School"
              duration="Graduated"
              gpax="3.68"
              link="http://www.kkw.ac.th/"
            />
          </div>
          {/* SKILLS */}
          <div  className="flex flex-row gap-3 max-w-sm  ">
            
            <h1 id="skills" className="scroll-m-24 text-3xl font-semibold  mb-6">Skills</h1>
 
          </div>
          <SkillCard />
          {/* Experaince */}
        </div>
        <div className="my-experience flex-auto">
          <h1 id="projects" className="projects-title scroll-m-24 text-3xl font-semibold pl-6 flex justify-center">Experiences</h1>
          <div className="projects-container">
            <ProjectCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
