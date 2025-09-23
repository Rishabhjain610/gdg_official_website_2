
import React from "react";
import Card from "../components/Card";
import Image from "next/image";
import Chatbot from "../components/Chatbot";
const cards = [
  //tech 
  {
    link: "Hammad Shaikh",
    cover: "/teams/Hammad_Shaikh.jpg",
    title: "TECH JCOM",
    character: "/teams/Hammad.png", // Or use same image for character
    alt: "Hammad Shaikh",
    name:"Hammad Shaikh",
    linkedin: "https://www.linkedin.com/in/hammad-shaikh047/", // <-- Add your LinkedIn URL
    github: "https://github.com/HammadShaikh-051", 
  },
  {
    link: "Bhoomi Sakhrani",
    cover: "/teams/Bhoomi.jpg",
    title: "TECH JCOM",
    character: "/teams/Bhoomi_Sakhrani.png", // Or use same image for character
    alt: "Rishabh Jain",
    name:"Bhoomi Sakhrani",
    linkedin: "https://www.linkedin.com/in/bhoomi-sakhrani/", // <-- Add your LinkedIn URL
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
  },
  {
    link: "Yashas Vaddi",
    cover: "/teams/Yashas_Vaddi.jpg",
    title: "TECH SCOM",
    character: "/teams/Yashas.png", // Or use same image for character
    alt: "Yashas Vaddi",
    name:"Yashas Vaddi",
    linkedin: "https://www.linkedin.com/in/yashasvaddi/", // <-- Add your LinkedIn URL
    github: "https://github.com/Yashasvaddi", 
  },
  {
    link: "Anish",
    cover: "/teams/Anish_Dharnidhar.jpg",
    title: "TECH HEAD",
    character: "/teams/Anish.png", // Or use same image for character
    alt: "Anish",
    name:"Anish Dharnidhar",
    linkedin: "https://www.linkedin.com/in/anish-dharnidhar/", // <-- Add your LinkedIn URL
    github: "https://github.com/Anish9320",
  },

  //operations
  {
    link: "Aditya Rajpal",
    cover: "/teams/Aditya_Rajpal.jpg",
    title: "OPERATION HEAD",
    character: "/teams/Aditya.png", // Or use same image for character
    alt: "Aditya Rajpal",
    name:"Aditya Rajpal",
    linkedin: "https://www.linkedin.com/in/aditya-rajpal-atg77/", // <-- Add your LinkedIn URL
    github: "https://github.com/Adityaaa77/",
  },
  {
    link: "Darshil Rathod",
    cover: "/teams/Darshil_Rathod.jpg",
    title: "OPERATION SCOM",
    character: "/teams/Darshil.png", // Or use same image for character
    alt: "Darshil Rathod",
    name:"Darshil Rathod",
    linkedin: "https://in.linkedin.com/in/darshil-rathod-47a417384", // <-- Add your LinkedIn URL
    github: "https://github.com/darshilrathod95-rgb",
  },
  {
    link: "Ved Dange",
    cover: "/teams/VED_DANGE.jpg",
    title: "OPERATION SCOM",
    character: "/teams/VED.png", // Or use same image for character
    alt: "Ved Dange",
    name:"Ved Dange",
    linkedin: "https://www.linkedin.com/in/veddange/", // <-- Add your LinkedIn URL
    github: "https://github.com/ved1006",
  },
  {
    link: "Riya Ratnani",
    cover: "/teams/Riya_Ratnani.jpg",
    title: "OPERATION JCOM",
    character: "/teams/Riya.png", // Or use same image for character
    alt: "Riya Ratnani",
    name:"Riya Ratnani",
    linkedin: "https://www.linkedin.com/in/riya-ratnani-b45163326/", // <-- Add your LinkedIn URL
    github: "https://github.com/riyaahhh",
  },
  {
    link: "Vinayak Kumar Singh",
    cover: "/teams/Vinayak_Kumar.jpg",
    title: "OPERATION JCOM",
    character: "/teams/Vinayak.png", // Or use same image for character
    alt: "Vinayak Kumar Singh",
    name:"Vinayak Kumar Singh",
    linkedin: "https://www.linkedin.com/in/vinu-lucifer-1a0250384/", // <-- Add your LinkedIn URL
    github: "https://github.com/VinuLucifer",
  },
  {
    link: "Shreya Khandelwal",
    cover: "/teams/Shreya_Khandelwal.png",
    title: "OPERATION JCOM",
    character: "/teams/Shreya.png", // Or use same image for character
    alt: "Shreya Khandelwal",
    name:"Shreya Khandelwal",
    linkedin: "https://www.linkedin.com/in/shreya-khandelwal-7a419b347/", // <-- Add your LinkedIn URL
    github: "https://github.com/shreya18633",
  },

  //editorial
  {
    link: "Aarjav Jain",
    cover: "/teams/Aarjav_Jain.jpg",
    title: "EDITORIAL HEAD",
    character: "/teams/Aarjav.png", // Or use same image for character
    alt: "Aarjav Jain",
    name:"Aarjav Jain",
    linkedin: "https://www.linkedin.com/in/aarjav-jain-b4b909264", // <-- Add your LinkedIn URL
    github: "https://github.com/Aarjav05",
  },
  {
    link: "Rachit Sikchi",
    cover: "/teams/Rachit_Sikchi.jpg",
    title: "EDITORIAL JCOM",
    character: "/teams/Rachit.png", // Or use same image for character
    alt: "Rachit Sikchi",
    name:"Rachit Sikchi",
    linkedin: "https://www.linkedin.com/in/rachit-sikchi-ba709a356/", // <-- Add your LinkedIn URL
    github: "https://github.com/Robot207",
  },
  {
    link: "Achal Verma",
    cover: "/teams/Achal_Verma.jpg",
    title: "EDITORIAL JCOM",
    character: "/teams/Achal.png", // Or use same image for character
    alt: "Achal Verma",
    name:"Achal Verma",
    linkedin: "https://www.linkedin.com/in/achal-v-020b1a31b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", // <-- Add your LinkedIn URL
    github: "https://github.com/4chlError",
  },
  {
    link: "Aarya Patil",
    cover: "/teams/Aarya_Patil.jpeg",
    title: "EDITORIAL SCOM",
    character: "/teams/Aarya.png", // Or use same image for character
    alt: "Aarya Patil",
    name:"Aarya Patil",
    linkedin: "https://www.linkedin.com/in/aarya-patil-526762335/", // <-- Add your LinkedIn URL
    github: "https://github.com/AaryaPatil-24",
  },

  //design
  {
    link: "Devansh Mantri",
    cover: "/teams/Devansh_Mantri.jpg",
    title: "DESIGN HEAD",
    character: "/teams/Devansh.png", // Or use same image for character
    alt: "Devansh Mantri",
    name:"Devansh Mantri",
    linkedin: "https://www.linkedin.com/in/devansh-mantri-9b285828b", // <-- Add your LinkedIn URL
    github: "https://github.com/Dave-Ackerman",
  },
  {
    link: "Gunjan Shambwani",
    cover: "/teams/GUNJAN_SHAMBWANI.jpg",
    title: "DESIGN SCOM",
    character: "/teams/GUNJAN.png", // Or use same image for character
    alt: "Gunjan Shambwani",
    name:"Gunjan Shambwani",
    linkedin: "https://www.linkedin.com/in/gunjan-shambwani-32457a340/", // <-- Add your LinkedIn URL
    github: "https://github.com/gunjan555",
  },
  {
    link: "Shriya Rane",
    cover: "/teams/Shriya_Rane.jpg",
    title: "DESIGN JCOM",
    character: "/teams/Shriya.png", // Or use same image for character
    alt: "Shriya Rane",
    name:"Shriya Rane",
    linkedin: "https://www.linkedin.com/in/shriya-rane-27236030b/", // <-- Add your LinkedIn URL
    github: "https://github.com/account4monazite",
  },
  {
    link: "Shreeya Satav",
    cover: "/teams/SHREEYA_SATAV.jpg",
    title: "DESIGN JCOM",
    character: "/teams/SHREEYA.png", // Or use same image for character
    alt: "Shreeya Satav",
    name:"Shreeya Satav",
    linkedin: "https://www.linkedin.com/in/shreeya-satav-7a1226379/", // <-- Add your LinkedIn URL
    github: "https://github.com/ShreeyaSS7",
  },

  //lead
  {
    link: "Ayush Kunder",
    cover: "/teams/AYUSH_KUNDER.jpg",
    title: "LEAD",
    character: "/teams/AYUSH.png", // Or use same image for character
    alt: "Ayush Kunder",
    name:"Ayush Kunder",
    linkedin: "https://www.linkedin.com/in/ayushkunder/", // <-- Add your LinkedIn URL
    github: "https://github.com/ayush216310",
  },

  //cloud
  {
    link: "Dev Patel",
    cover: "/teams/Dev_Patel.jpg",
    title: "CLOUD HEAD",
    character: "/teams/Dev.png", // Or use same image for character
    alt: "Dev Patel",
    name:"Dev Patel",
    linkedin: "https://www.linkedin.com/in/dev-patel-89250b353/", // <-- Add your LinkedIn URL
    github: "https://github.com/Dev-Patel23",
  },
];

const TeamsPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center text-white px-4 pt-24 bg-gradient-to-br from-blue-900/20 via-transparent to-red-900/20">
      <h1 className="text-5xl font-bold mb-4 mt-7">Our
        <span> </span>
        <span className="text-blue-500">T</span>
        <span className="text-yellow-500">e</span>
        <span className="text-red-500">a</span>
        <span className="text-blue-500">m</span>
      </h1>
      
    
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl w-full">
        {cards.map((card, idx) => (
          <Card key={idx} {...card} />
        ))}
      </div>
      <Chatbot/>
    </div>
  );
};

export default TeamsPage;