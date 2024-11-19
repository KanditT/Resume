import React, { useState } from "react";
import "./App.css";
import { FiDownload } from "react-icons/fi";
import EducationCard from "./EducationCard";
import ProjectCard from "./ProjectCard";

function App() {
  const [activeSkill, setActiveSkill] = useState(""); 
  const [skillType, setSkillType] = useState(""); 

  const handleButtonClick = (type) => {
    if (activeSkill === type) {
      setActiveSkill("");
      setSkillType("");
    } else {
      setActiveSkill(type);
      setSkillType(type);
    }
  };

  return (
    <div className="main-feild">
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
          <h1 className="my-education text-3xl font-bold">Education</h1>
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
          <div  className="flex flex-row gap-3 max-w-sm ">
            <h1 id="skills" className="scroll-m-24 text-3xl font-semibold">Skills</h1>
            <div className="flex gap-4">
              <button
                className={`px-4 rounded-lg border hover:bg-green-200 transition-colors ${activeSkill === "intermediate"
                  ? "bg-green-500 text-white border-red-500"
                  : "bg-gray-100 text-gray-800 border-gray-300"
                  }`}
                onClick={() => handleButtonClick("intermediate")}
              >
                Intermediate
              </button>
              <button
                className={`px-4 rounded-lg border hover:bg-orange-200  transition-colors ${activeSkill === "beginner"
                  ? "bg-orange-400 text-white border-red-500"
                  : "bg-gray-100 text-gray-800 border-gray-300"
                  }`}
                onClick={() => handleButtonClick("beginner")}
              >
                beginner
              </button>
            </div>
          </div>
          <div className="my-6 max-w-sm">
            <div className="mb-6 p-0">
              {[
                { name: "Thai", bg: "bg-blue-400 text-white" },
                { name: "English", bg: skillType === "intermediate" ? "bg-green-500 text-white" : "bg-gray-100" },
                { name: "Java", bg: skillType === "intermediate" ? "bg-green-500 text-white" : "bg-gray-100" },
                { name: "Python", bg: skillType === "intermediate" ? "bg-green-500 text-white" : "bg-gray-100" },
                { name: "GDScript", bg: skillType === "beginner" ? "bg-orange-400 text-white" : "bg-gray-100" },
                { name: "SQL", bg: skillType === "beginner" ? "bg-orange-400 text-white" : "bg-gray-100" },
                { name: "Flutter", bg: skillType === "beginner" ? "bg-orange-400 text-white" : "bg-gray-100" },
                { name: "C#", bg: skillType === "beginner" ? "bg-orange-400 text-white" : "bg-gray-100" },
                { name: "Assembly", bg: skillType === "beginner" ? "bg-orange-400 text-white" : "bg-gray-100" },
                { name: "HTML", bg: skillType === "intermediate" ? "bg-green-500 text-white" : "bg-gray-100" },
                { name: "CSS", bg: skillType === "intermediate" ? "bg-green-500 text-white" : "bg-gray-100" },
                { name: "JS", bg: skillType === "intermediate" ? "bg-green-500 text-white" : "bg-gray-100" },
                { name: "Tailwind", bg: skillType === "intermediate" ? "bg-green-500 text-white" : "bg-gray-100" },
                { name: "MySQL", bg: skillType === "beginner" ? "bg-orange-400 text-white" : "bg-gray-100" },
                { name: "React", bg: skillType === "beginner" ? "bg-orange-400 text-white" : "bg-gray-100" },
                { name: "Photoshop", bg: skillType === "intermediate" ? "bg-green-500 text-white" : "bg-gray-100" },
                { name: "Godot", bg: skillType === "intermediate" ? "bg-green-500 text-white" : "bg-gray-100" },
                { name: "Figma", bg: skillType === "beginner" ? "bg-orange-400 text-white" : "bg-gray-100" },
                { name: "Unity", bg: skillType === "beginner" ? "bg-orange-400 text-white" : "bg-gray-100" },
                { name: "Illustrator", bg: skillType === "beginner" ? "bg-orange-400 text-white" : "bg-gray-100" },
                { name: "Adaptability", bg: skillType === "intermediate" ? "bg-green-500 text-white" : "bg-gray-100" },
                { name: "Communication", bg: skillType === "beginner" ? "bg-orange-400 text-white" : "bg-gray-100" },
                { name: "Embracing", bg: skillType === "intermediate" ? "bg-green-500 text-white" : "bg-gray-100" },
                { name: "Time Management", bg: skillType === "intermediate" ? "bg-green-500 text-white" : "bg-gray-100" },
              ].map((skill) => (
                <span
                  key={skill.name}
                  className={`inline-block px-4 py-2 border rounded-lg text-sm m-1 ${skill.bg}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
          {/* Experaince */}
        </div>
        <div className="my-experience flex-auto">
          <h1 id="projects" className="projects-title scroll-m-24 text-3xl font-semibold pl-6">Experiences</h1>
          <div className="projects-container">
            <ProjectCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
