
import React from "react";
import Card from "../components/Card";
import Image from "next/image";

const cards = [
  // Lead
  {
    link: "Ayush Kunder",
    cover: "/teams/AYUSH_KUNDER.jpg",
    title: "LEAD",
    character: "/teams/AYUSH.png",
    alt: "Ayush Kunder",
    name: "Ayush Kunder",
    linkedin: "https://www.linkedin.com/in/ayushkunder/",
    github: "https://github.com/ayush216310",
  },
  // Cloud Head
  {
    link: "Dev Patel",
    cover: "/teams/Dev_Patel.jpg",
    title: "CLOUD HEAD",
    character: "/teams/Dev.png",
    alt: "Dev Patel",
    name: "Dev Patel",
    linkedin: "https://www.linkedin.com/in/dev-patel-89250b353/",
    github: "https://github.com/Dev-Patel23",
  },
  // Design Head
  {
    link: "Devansh Mantri",
    cover: "/teams/Devansh_Mantri.jpg",
    title: "DESIGN HEAD",
    character: "/teams/Devansh.png",
    alt: "Devansh Mantri",
    name: "Devansh Mantri",
    linkedin: "https://www.linkedin.com/in/devansh-mantri-9b285828b",
    github: "https://github.com/Dave-Ackerman",
  },
  // Editorial Head
  {
    link: "Aarjav Jain",
    cover: "/teams/Aarjav_Jain.jpg",
    title: "EDITORIAL HEAD",
    character: "/teams/Aarjav.png",
    alt: "Aarjav Jain",
    name: "Aarjav Jain",
    linkedin: "https://www.linkedin.com/in/aarjav-jain-b4b909264",
    github: "https://github.com/Aarjav05",
  },
  // Operation Head
  {
    link: "Aditya Rajpal",
    cover: "/teams/Aditya_Rajpal.jpg",
    title: "OPERATION HEAD",
    character: "/teams/Aditya.png",
    alt: "Aditya Rajpal",
    name: "Aditya Rajpal",
    linkedin: "https://www.linkedin.com/in/aditya-rajpal-atg77/",
    github: "https://github.com/Adityaaa77/",
  },
  // Tech Head
  {
    link: "Anish",
    cover: "/teams/Anish_Dharnidhar.jpg",
    title: "TECH HEAD",
    character: "/teams/Anish.png",
    alt: "Anish",
    name: "Anish Dharnidhar",
    linkedin: "https://www.linkedin.com/in/anish-dharnidhar/",
    github: "https://github.com/Anish9320",
  },
  // Design SCOM
  {
    link: "Gunjan Shambwani",
    cover: "/teams/GUNJAN_SHAMBWANI.jpg",
    title: "DESIGN SCOM",
    character: "/teams/GUNJAN.png",
    alt: "Gunjan Shambwani",
    name: "Gunjan Shambwani",
    linkedin: "https://www.linkedin.com/in/gunjan-shambwani-32457a340/",
    github: "https://github.com/gunjan555",
  },
  // Editorial SCOM
  {
    link: "Aarya Patil",
    cover: "/teams/Aarya_Patil.jpeg",
    title: "EDITORIAL SCOM",
    character: "/teams/Aarya.png",
    alt: "Aarya Patil",
    name: "Aarya Patil",
    linkedin: "https://www.linkedin.com/in/aarya-patil-526762335/",
    github: "https://github.com/AaryaPatil-24",
  },
  // Operation SCOM
  {
    link: "Darshil Rathod",
    cover: "/teams/Darshil_Rathod.jpg",
    title: "OPERATION SCOM",
    character: "/teams/Darshil.png",
    alt: "Darshil Rathod",
    name: "Darshil Rathod",
    linkedin: "https://in.linkedin.com/in/darshil-rathod-47a417384",
    github: "https://github.com/darshilrathod95-rgb",
  },
  {
    link: "Ved Dange",
    cover: "/teams/VED_DANGE.jpg",
    title: "OPERATION SCOM",
    character: "/teams/VED.png",
    alt: "Ved Dange",
    name: "Ved Dange",
    linkedin: "https://www.linkedin.com/in/veddange/",
    github: "https://github.com/ved1006",
  },
  // Tech SCOM
  {
    link: "Rishabh Jain",
    cover: "/teams/Rishabh_Jain.jpg",
    title: "TECH SCOM",
    character: "/teams/Rishabh_Jain.png",
    alt: "Rishabh Jain",
    name: "Rishabh Jain",
    linkedin: "https://www.linkedin.com/in/rishabhjain610",
    github: "https://github.com/Rishabhjain610",
  },
  {
    link: "Yashas Vaddi",
    cover: "/teams/Yashas_Vaddi.jpg",
    title: "TECH SCOM",
    character: "/teams/Yashas.png",
    alt: "Yashas Vaddi",
    name: "Yashas Vaddi",
    linkedin: "https://www.linkedin.com/in/yashasvaddi/",
    github: "https://github.com/Yashasvaddi",
  },
  // Design JCOM
  {
    link: "Shreeya Satav",
    cover: "/teams/SHREEYA_SATAV.jpg",
    title: "DESIGN JCOM",
    character: "/teams/SHREEYA.png",
    alt: "Shreeya Satav",
    name: "Shreeya Satav",
    linkedin: "https://www.linkedin.com/in/shreeya-satav-7a1226379/",
    github: "https://github.com/ShreeyaSS7",
  },
  {
    link: "Shriya Rane",
    cover: "/teams/Shriya_Rane.jpg",
    title: "DESIGN JCOM",
    character: "/teams/Shriya.png",
    alt: "Shriya Rane",
    name: "Shriya Rane",
    linkedin: "https://www.linkedin.com/in/shriya-rane-27236030b/",
    github: "https://github.com/account4monazite",
  },

  // Editorial JCOM
  {
    link: "Achal Verma",
    cover: "/teams/Achal_Verma.jpg",
    title: "EDITORIAL JCOM",
    character: "/teams/Achal.png",
    alt: "Achal Verma",
    name: "Achal Verma",
    linkedin: "https://www.linkedin.com/in/achal-v-020b1a31b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/4chlError",
  },
  {
    link: "Rachit Sikchi",
    cover: "/teams/Rachit_Sikchi.jpg",
    title: "EDITORIAL JCOM",
    character: "/teams/Rachit.png",
    alt: "Rachit Sikchi",
    name: "Rachit Sikchi",
    linkedin: "https://www.linkedin.com/in/rachit-sikchi-ba709a356/",
    github: "https://github.com/Robot207",
  },
  
  // Operation JCOM
  {
    link: "Riya Ratnani",
    cover: "/teams/Riya_Ratnani.jpg",
    title: "OPERATION JCOM",
    character: "/teams/Riya.png",
    alt: "Riya Ratnani",
    name: "Riya Ratnani",
    linkedin: "https://www.linkedin.com/in/riya-ratnani-b45163326/",
    github: "https://github.com/riyaahhh",
  },
  {
    link: "Shreya Khandelwal",
    cover: "/teams/Shreya_Khandelwal.png",
    title: "OPERATION JCOM",
    character: "/teams/Shreya.png",
    alt: "Shreya Khandelwal",
    name: "Shreya Khandelwal",
    linkedin: "https://www.linkedin.com/in/shreya-khandelwal-7a419b347/",
    github: "https://github.com/shreya18633",
  },
  {
    link: "Vinayak Kumar Singh",
    cover: "/teams/Vinayak_Kumar.jpg",
    title: "OPERATION JCOM",
    character: "/teams/Vinayak.png",
    alt: "Vinayak Kumar Singh",
    name: "Vinayak Kumar Singh",
    linkedin: "https://www.linkedin.com/in/vinu-lucifer-1a0250384/",
    github: "https://github.com/VinuLucifer",
  },
  
  // Tech JCOM
    {
    link: "Bhoomi Sakhrani",
    cover: "/teams/Bhoomi.jpg",
    title: "TECH JCOM",
    character: "/teams/Bhoomi_Sakhrani.png",
    alt: "Bhoomi Sakhrani",
    name: "Bhoomi Sakhrani",
    linkedin: "https://www.linkedin.com/in/bhoomi-sakhrani/",
    github: "https://github.com/itzBhoomi",
  },
  {
    link: "Hammad Shaikh",
    cover: "/teams/Hammad_Shaikh.jpg",
    title: "TECH JCOM",
    character: "/teams/Hammad.png",
    alt: "Hammad Shaikh",
    name: "Hammad Shaikh",
    linkedin: "https://www.linkedin.com/in/hammad-shaikh047/",
    github: "https://github.com/HammadShaikh-051",
  }

];

const TeamsPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center text-white px-4 py-24 bg-gradient-to-br from-blue-900/20 via-transparent to-red-900/20">
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
     
    </div>
  );
};

export default TeamsPage;