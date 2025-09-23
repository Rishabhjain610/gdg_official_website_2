
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Card.css";

const Card = ({ link, cover, title, character,name, alt, linkedin, github }) => (
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
      <div className="mt-4 text-base font-semibold text-white">{title}</div>
    )}
    {/* Social Icons */}
    {(linkedin || github) && (
      <div className="flex justify-center gap-4 mt-2">
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={28} className="text-blue-500 hover:text-blue-700 transition" />
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={28} className="text-gray-300 hover:text-white transition" />
          </a>
        )}
      </div>
    )}
  </div>
);

export default Card;