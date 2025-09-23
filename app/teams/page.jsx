
import React from "react";
import Card from "../components/Card";
import Image from "next/image";
const cards = [
  {
    link: "https://www.mythrillfiction.com/the-dark-rider",
    cover: "https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg",
    title: "https://ggayane.github.io/css-experiments/cards/dark_rider-title.png",
    character: "https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp",
    alt: "Dark Rider"
  },
  {
    link: "Bhoomi Sakhrani",
    cover: "/teams/Bhoomi.jpg",
    title: "TECH JCOM",
    character: "/teams/Bhoomi_Sakhrani.png", // Or use same image for character
    alt: "Rishabh Jain",
    name:"Bhoomi Sakhrani",
    linkedin: "https://www.linkedin.com/in/rishabhjain610", // <-- Add your LinkedIn URL
    github: "https://github.com/itzBhoomi", 
   
  },
  {
    link: "Rishabh Jain",
    cover: "/teams/Rishabh_Jain_Tech_SCOM.jpg", // Your image in public folder
    title: "TECH SCOM", // You can use a name image or leave blank
    character: "/teams/Rishabh_Jain.png", // Or use same image for character
    alt: "Rishabh Jain",
    name:"Rishabh Jain",
    linkedin: "https://www.linkedin.com/in/rishabhjain610", // <-- Add your LinkedIn URL
    github: "https://github.com/Rishabhjain610",
  }
];

const TeamsPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center text-white px-4 pt-24">
      <h1 className="text-5xl font-bold mb-4">Our
        <span> </span>
        <span className="text-blue-500">T</span>
        <span className="text-yellow-500">e</span>
        <span className="text-red-500">a</span>
        <span className="text-green-500">m</span>
      </h1>
      <p className="text-lg text-gray-300">
        Meet the people behind our website.
      </p>
    
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl w-full">
        {cards.map((card, idx) => (
          <Card key={idx} {...card} />
        ))}
      </div>
    </div>
  );
};

export default TeamsPage;