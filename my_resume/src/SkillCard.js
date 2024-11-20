import React, { useState } from 'react';

const SkillCard = () => {
    const [skillType, setSkillType] = useState('all');

    const skillCategories = {
        'Programming Languages': [
            { name: 'Java', level: 'intermediate' },
            { name: 'Python', level: 'intermediate' },
            { name: 'GDScript', level: 'beginner' },
            { name: 'SQL', level: 'beginner' },
            { name: 'C#', level: 'beginner' },
            { name: 'Assembly', level: 'beginner' }
        ],
        'Web Development': [
            { name: 'HTML', level: 'intermediate' },
            { name: 'CSS', level: 'intermediate' },
            { name: 'JavaScript', level: 'intermediate' },
            { name: 'Tailwind', level: 'intermediate' },
            { name: 'React', level: 'beginner' },
            { name: 'Flutter', level: 'beginner' }
        ],
        'Tools & Software': [
            { name: 'Photoshop', level: 'intermediate' },
            { name: 'Godot', level: 'intermediate' },
            { name: 'Figma', level: 'beginner' },
            { name: 'Unity', level: 'beginner' },
            { name: 'Illustrator', level: 'beginner' }
        ],
        'Languages & Soft Skills': [
            { name: 'Thai', level: 'native' },
            { name: 'English', level: 'intermediate' },
            { name: 'Adaptability', level: 'native' },
            { name: 'Embracing', level: 'native' },
            { name: 'Communication', level: 'native' },
            { name: 'Time Management', level: 'native' }
        ]
    };

    const getSkillColor = (level) => {
        switch (level) {
            case 'native':
                return 'bg-purple-500 text-white';
            case 'intermediate':
                return 'bg-blue-500 text-white';
            case 'beginner':
                return 'bg-orange-400 text-white';
            default:
                return 'bg-gray-100';
        }
    };

    return (
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="mb-6">
                <div className="flex gap-2">
                    <button
                        onClick={() => setSkillType('all')}
                        className={`px-4 py-2 rounded-lg text-sm ${skillType === 'all' ? 'bg-gray-800 text-white' : 'bg-gray-100'
                            }`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setSkillType('intermediate')}
                        className={`px-4 py-2 rounded-lg text-sm ${skillType === 'intermediate' ? 'bg-blue-500 text-white' : 'bg-gray-100'
                            }`}
                    >
                        Intermediate
                    </button>
                    <button
                        onClick={() => setSkillType('beginner')}
                        className={`px-4 py-2 rounded-lg text-sm ${skillType === 'beginner' ? 'bg-orange-400 text-white' : 'bg-gray-100'
                            }`}
                    >
                        Beginner
                    </button>
                </div>
            </div>

            <div className="space-y-6">
                {Object.entries(skillCategories).map(([category, skills]) => (
                    <div key={category}>
                        <h3 className="text-lg font-semibold mb-3">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills
                                .filter(skill => skillType === 'all' || skill.level === skillType)
                                .map(skill => (
                                    <span
                                        key={skill.name}
                                        className={`px-4 py-2 rounded-lg text-sm ${getSkillColor(skill.level)}`}
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillCard;

// OLD VERSION SKILL
// const [activeSkill, setActiveSkill] = useState(""); 
// const [skillType, setSkillType] = useState(""); 

// const handleButtonClick = (type) => {
//   if (activeSkill === type) {
//     setActiveSkill("");
//     setSkillType("");
//   } else {
//     setActiveSkill(type);
//     setSkillType(type);
//   }
// };

// {/* <div className="flex gap-4">
// <button
//   className={`px-4 rounded-lg border hover:bg-green-200 hover:text-black transition-colors ${activeSkill === "intermediate"
//     ? "bg-green-500 text-white border-orange-500 border-2"
//     : "bg-blue-600 text-white border-gray-300"
//     }`}
//   onClick={() => handleButtonClick("intermediate")}
// >
//   Intermediate
// </button>
// <button
//   className={`px-4 rounded-lg border hover:bg-orange-200 hover:text-black transition-colors ${activeSkill === "beginner"
//     ? "bg-orange-400 text-white border-red-500 border-2"
//     : "bg-blue-600 text-white border-gray-300"
//     }`}
//   onClick={() => handleButtonClick("beginner")}
// >
//   Beginner
// </button>
// </div> */}

// {/* <div className="my-6 max-w-sm">
//             <div className="mb-6 p-0">
//               {[
//                 { name: "Thai", bg: "bg-gray-400 text-white" },
//                 { name: "English", bg: skillType === "intermediate" ? "bg-green-500 text-white" : "bg-gray-100" },
//                 { name: "Java", bg: skillType === "intermediate" ? "bg-green-500 text-white" : "bg-gray-100" },
//                 { name: "Python", bg: skillType === "intermediate" ? "bg-green-500 text-white" : "bg-gray-100" },
//                 { name: "GDScript", bg: skillType === "beginner" ? "bg-orange-400 text-white" : "bg-gray-100" },
//                 { name: "SQL", bg: skillType === "beginner" ? "bg-orange-400 text-white" : "bg-gray-100" },
//                 { name: "Flutter", bg: skillType === "beginner" ? "bg-orange-400 text-white" : "bg-gray-100" },
//                 { name: "C#", bg: skillType === "beginner" ? "bg-orange-400 text-white" : "bg-gray-100" },
//                 { name: "Assembly", bg: skillType === "beginner" ? "bg-orange-400 text-white" : "bg-gray-100" },
//                 { name: "HTML", bg: skillType === "intermediate" ? "bg-green-500 text-white" : "bg-gray-100" },
//                 { name: "CSS", bg: skillType === "intermediate" ? "bg-green-500 text-white" : "bg-gray-100" },
//                 { name: "JS", bg: skillType === "intermediate" ? "bg-green-500 text-white" : "bg-gray-100" },
//                 { name: "Tailwind", bg: skillType === "intermediate" ? "bg-green-500 text-white" : "bg-gray-100" },
//                 { name: "MySQL", bg: skillType === "beginner" ? "bg-orange-400 text-white" : "bg-gray-100" },
//                 { name: "React", bg: skillType === "beginner" ? "bg-orange-400 text-white" : "bg-gray-100" },
//                 { name: "Photoshop", bg: skillType === "intermediate" ? "bg-green-500 text-white" : "bg-gray-100" },
//                 { name: "Godot", bg: skillType === "intermediate" ? "bg-green-500 text-white" : "bg-gray-100" },
//                 { name: "Figma", bg: skillType === "beginner" ? "bg-orange-400 text-white" : "bg-gray-100" },
//                 { name: "Unity", bg: skillType === "beginner" ? "bg-orange-400 text-white" : "bg-gray-100" },
//                 { name: "Illustrator", bg: skillType === "beginner" ? "bg-orange-400 text-white" : "bg-gray-100" },
//                 { name: "Adaptability", bg: skillType === "intermediate" ? "bg-green-500 text-white" : "bg-gray-100" },
//                 { name: "Communication", bg: skillType === "beginner" ? "bg-orange-400 text-white" : "bg-gray-100" },
//                 { name: "Embracing", bg: skillType === "intermediate" ? "bg-green-500 text-white" : "bg-gray-100" },
//                 { name: "Time Management", bg: skillType === "intermediate" ? "bg-green-500 text-white" : "bg-gray-100" },
//               ].map((skill) => (
//                 <span
//                   key={skill.name}
//                   className={`inline-block px-4 py-2 border rounded-lg text-sm m-1 ${skill.bg}`}
//                 >
//                   {skill.name}
//                 </span>
//               ))}
//             </div>
//           </div> */}