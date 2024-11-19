import React from "react";
import { FaYoutube, FaSlideshare, FaVideo, FaFileAlt, FaFacebookF, FaGlobe } from "react-icons/fa";

export default function ExperienceCards() {
    const cards = [
        {
            title: "Web Application Development",
            date: "June 2024 - Oct 2024",
            project: "ChatCane (Web Chatbot for Sugarcane Information)",
            details: [
                "Role: UX/UI Designer and Frontend Developer (React & Tailwind)",
                "Objective: Design and implement necessary functionalities for an engaging, informative chatbot experience.",
            ],
            icons: [
                { icon: <FaYoutube size={20} className="text-red-600 hover:text-black" />, link: "https://www.youtube.com/watch?v=g6kkkPRgGN8" },
                { icon: <FaSlideshare size={20} className="text-purple-500 hover:text-yellow-400" />, link: "https://www.canva.com/design/DAGUxfxm40E/f2yrbW7FwDc6OWPn7-UFNQ/view?utm_content=DAGUxfxm40E&utm_campaign=designshare&utm_medium=link&utm_source=editor" },
            ],
        },
        {
            title: "VDO Game Design",
            date: "June 2024 - Oct 2024",
            project: "DeepFall Village (2D Side-Scrolling Platformer)",
            details: [
                "Engine: Godot",
                "Code player scripts with a state machine",
                "Design interactive objects and enemies",
            ],
            icons: [
                { icon: <FaVideo size={20} />, link: "https://drive.google.com/file/d/1ZLcw-YcvqlyXw4TsrgrQ8VyYGJ8c2kwy/view?usp=sharing" },
                { icon: <FaFileAlt size={20} />, link: "https://drive.google.com/file/d/1B5ThJnCbORihm2lM2c839ncBvJMFAbEB/view?usp=sharing" },
            ],
        },
        {
            title: "Adv Computer Programming",
            date: "Nov 2022 - Mar 2022",
            project: "EN-Library (Web - App KKU Engineer Library)",
            details: [
                "UX/UI Design and Frontend Development",
                "Create 3D models for a clear visualization of selectable library rooms.",
            ],
            icons: [
                { icon: <FaGlobe size={20} />, link: "https://en-library.kku.ac.th/" },
                { icon: <FaSlideshare size={20} className="text-purple-500 hover:text-yellow-400" />, link: "https://www.canva.com/design/DAFa7TydqSA/t71impswKahFZMSH5o6lVw/view?utm_content=DAFa7TydqSA&utm_campaign=designshare&utm_medium=link&utm_source=editor" },
            ],
        },
        {
            title: "Computer Engineering Summer Camp (CESCa)",
            date: "April 2023 & May 2024",
            details: [
                "CESCa18: Staff, Funding Department",
                "CESCa19: Staff, Accounting Management Department",
            ],
            icons: [
                { icon: <FaFacebookF size={20} />, link: "https://www.facebook.com/CESCa.KKU" },
            ],
        },
        {
            title: "2023 Freshmen Orientation",
            date: "June 2023",
            project: "Bachelor’s in Computer Engineering, Khon Kaen University",
            details: [
                "Prepared slides to guide and support freshmen, providing essential information.",
            ],
            icons: [],
        },
        {
            title: "Head Student of Computer Engineering CoE32",
            date: "Dec 2022 - Present",
            details: [
                "Serve as the liaison between students and faculty, facilitating communication with teachers.",
                "Share important information and updates with peers.",
                "Organize and support student activities and initiatives.",
            ],
            icons: [],
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="p-6 bg-white border border-gray-300 rounded-lg shadow-md flex flex-col justify-between"
                >
                    <div>
                        <h3 className="text-xl font-bold text-gray-800">{card.title}</h3>
                        <i className="text-sm text-gray-500 mt-1">{card.date}</i>
                        {card.project && (
                            <p className="mt-4 text-gray-700">
                                <strong>Project:</strong> {card.project}
                            </p>
                        )}
                        <ul className="mt-4 list-disc list-inside text-gray-700">
                            {card.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                    {card.icons.length > 0 && (
                        <div className="flex justify-end mt-6 space-x-4">
                            {card.icons.map((iconItem, i) => (
                                <a
                                    key={i}
                                    href={iconItem.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800"
                                >
                                    {iconItem.icon}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
