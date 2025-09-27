import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Card.css";

const Card = ({
  link,
  cover,
  title,
  character,
  name,
  alt,
  linkedin,
  github,
}) => (
  <div className="flex flex-col items-center">
    <a href={link} target="_blank" rel="noopener noreferrer" aria-label={alt}>
      <div className="card">
        <div className="wrapper">
          <img src={cover} alt={`${alt} cover`} className="cover-image" />
        </div>
        {name && (
          <div className="absolute bottom-4   px-3 py-1 rounded text-white font-bold text-lg z-10">
            {name}
          </div>
        )}
        <img src={character} alt={`${alt} character`} className="character" />
      </div>
    </a>
    {/* Designation */}
    {title && (
      <div className="mt-6 mb-2 text-base md:text-lg font-semibold text-white tracking-wide text-center bg-gradient-to-r from-blue-900/40 via-transparent to-red-900/40 px-4 py-2 rounded-full shadow w-4/5">
        {title}
      </div>
    )}
    {/* Divider */}
    {(linkedin || github) && (
      <div className="w-3/4 h-px bg-gradient-to-r from-blue-500 via-gray-700 to-red-500 my-2 opacity-70 rounded-full" />
    )}
    {/* Social Icons */}
    {(linkedin || github) && (
      <div className="flex justify-center gap-6 mt-2 mb-2 w-full">
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full bg-white/10 p-2 hover:bg-blue-600 transition duration-200 shadow hover:scale-110 border border-blue-500 flex items-center justify-center"
            style={{ minWidth: 40 }}
          >
            <FaLinkedin
              size={28}
              className="text-blue-500 hover:text-white transition duration-200"
            />
            <span className="sr-only">LinkedIn</span>
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full bg-white/10 p-2 hover:bg-gray-800 transition duration-200 shadow hover:scale-110 border border-gray-500 flex items-center justify-center"
            style={{ minWidth: 40 }}
          >
            <FaGithub
              size={28}
              className="text-gray-300 hover:text-white transition duration-200"
            />
            <span className="sr-only">GitHub</span>
          </a>
        )}
      </div>
    )}
  </div>
);

export default Card;
