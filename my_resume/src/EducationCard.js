import { FiArrowRight } from "react-icons/fi";

const EducationCard = ({ title, institution, duration, gpax, link }) => {
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
            <button className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-left">
                {title}
            </button>
            <p className="mb-3 font-normal text-gray-700">{institution}</p>
            <div className="mb-3 flex flex-row justify-between font-normal text-gray-700">
                <i>{duration}</i>
                <p>GPAX: {gpax}</p>
            </div>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
                About
                <FiArrowRight className="w-3.5 h-3.5 ms-2" />
            </a>
        </div>
    );
};

export default EducationCard;
