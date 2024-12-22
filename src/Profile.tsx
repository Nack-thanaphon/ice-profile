import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaGraduationCap,
  FaBriefcase,
  FaPaintBrush,
  FaUserAlt,
  FaLightbulb,
} from "react-icons/fa";

interface ContactInfo {
  email: string;
  phone: string;
}

interface Skill {
  name: string;
  rating: number; // rating out of 5
}

interface JobExperience {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

interface Content {
  name: string;
  subtitle: string;
  address: string;
  dob: string;
  contact: ContactInfo;
  education: string;
  skills: Skill[];
  languages: { name: string; level: string }[];
  hobbies: string[];
  abilities: string[];
  experience: JobExperience[];
}

const textContent: Record<string, Content> = {
  en: {
    name: "Thunyapond Sukthahin",
    subtitle: "Hi! My name is Iceya. Hit me up and I’ll be happy to help with your design ideas!",
    address: "Bangkok, Thailand",
    dob: "D.O.B: 01/02/1993",
    contact: {
      email: "t.thunyapond@gmail.com",
      phone: "089-927-6462",
    },
    education: "Bachelor of Visual Communication Design, Rangsit University (2011–2015)",
    skills: [
      { name: "Photoshop", rating: 3 },
      { name: "Illustrator", rating: 4 },
      { name: "InDesign", rating: 2 },
    ],
    languages: [
      { name: "Thai", level: "Native" },
      { name: "English", level: "Basic" },
      { name: "Japanese", level: "Learning" },
    ],
    hobbies: ["Playing with cats", "Planting", "Cooking", "Enjoying cocoa"],
    abilities: ["Empathy", "Creativity", "Positive Attitude", "Teamwork"],
    experience: [
      {
        title: "Graphic Designer – Stylist",
        company: "Amarin Corporations",
        location: "Taling Chan",
        period: "Apr 2023 – Present",
        responsibilities: [
          "Designing event graphics in collaboration with the structural designer.",
          "Create key visual designs and corporate identity elements for organizing the event.",
          "Fashion stylist / Food stylist / Room stylist.",
        ],
      },
      {
        title: "Graphic Designer",
        company: "Montivory",
        location: "Sathon",
        period: "Aug 2018 – Oct 2022",
        responsibilities: [
          "Infographics, stationery, banners.",
          "Create design posts on social media.",
          "Coordinate projects and internal events.",
        ],
      },
      {
        title: "Digital Media Graphic Designer",
        company: "Sirimedia",
        location: "Sathon",
        period: "Oct 2015 – Aug 2018",
        responsibilities: [
          "Design e-magazines and product interactive catalog for tablet and mobile.",
        ],
      },
    ],
  },
  th: {
    name: "Thunyapond Sukthahin",
    subtitle: "Hi! My name is Iceya. Hit me up and I’ll be happy to help with your design ideas!",
    address: "Bangkok, Thailand",
    dob: "D.O.B: 01/02/1993",
    contact: {
      email: "t.thunyapond@gmail.com",
      phone: "089-927-6462",
    },
    education: "Bachelor of Visual Communication Design, Rangsit University (2011–2015)",
    skills: [
      { name: "Photoshop", rating: 3 },
      { name: "Illustrator", rating: 4 },
      { name: "InDesign", rating: 2 },
    ],
    languages: [
      { name: "Thai", level: "Native" },
      { name: "English", level: "Basic" },
      { name: "Japanese", level: "Learning" },
    ],
    hobbies: ["Playing with cats", "Planting", "Cooking", "Enjoying cocoa"],
    abilities: ["Empathy", "Creativity", "Positive Attitude", "Teamwork"],
    experience: [
      {
        title: "Graphic Designer – Stylist",
        company: "Amarin Corporations",
        location: "Taling Chan",
        period: "Apr 2023 – Present",
        responsibilities: [
          "Designing event graphics in collaboration with the structural designer.",
          "Create key visual designs and corporate identity elements for organizing the event.",
          "Fashion stylist / Food stylist / Room stylist.",
        ],
      },
      {
        title: "Graphic Designer",
        company: "Montivory",
        location: "Sathon",
        period: "Aug 2018 – Oct 2022",
        responsibilities: [
          "Infographics, stationery, banners.",
          "Create design posts on social media.",
          "Coordinate projects and internal events.",
        ],
      },
      {
        title: "Digital Media Graphic Designer",
        company: "Sirimedia",
        location: "Sathon",
        period: "Oct 2015 – Aug 2018",
        responsibilities: [
          "Design e-magazines and product interactive catalog for tablet and mobile.",
        ],
      },
    ],
  },
};

const Profile: React.FC = () => {
  const [language, setLanguage] = useState<"en" | "th">("en");

  const toggleLanguage = (): void => {
    setLanguage(language === "en" ? "th" : "en");
  };

  const content = textContent[language];

  return (
    <div className="max-w-3xl mx-auto font-sans bg-white space-y-10 py-10 p-3 rounded-lg">
      <div className="text-right">
        <button onClick={toggleLanguage} className="text-blue-500">
          {language === "en" ? "ภาษาไทย" : "English"}
        </button>
      </div>

      {/* Profile Header */}
      <div className="text-center">
        <img
          src="profile.jpg"
          alt="Profile"
          className="w-48 h-48 object-cover rounded-full mx-auto"
        />
        <h1 className="text-4xl font-bold text-gray-800 mt-4">{content.name}</h1>
        <p className="text-gray-600 mt-2">{content.subtitle}</p>
        <p className="mt-2 text-gray-600">{content.address}</p>
        <p className="mt-2 text-gray-600">{content.dob}</p>
        <p className="mt-2 text-gray-600 flex items-center justify-center">
          <FaPhone className="mr-2" />
          <a href={`tel:${content.contact.phone}`} className="text-blue-500">
            {content.contact.phone}
          </a>
        </p>
        <p className="mt-2 text-gray-600 flex items-center justify-center">
          <FaEnvelope className="mr-2" />
          <a href={`mailto:${content.contact.email}`} className="text-blue-500">
            {content.contact.email}
          </a>
        </p>
      </div>

      {/* Education */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaGraduationCap className="mr-2" />{" "}
          {language === "en" ? "Education" : "ประวัติการศึกษา"}
        </h2>
        <p className="mt-2 text-gray-600">{content.education}</p>
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPaintBrush className="mr-2" /> {language === "en" ? "Skills" : "ทักษะ"}
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          {content.skills.map((skill, index) => (
            <li key={index}>
              {skill.name} {"★".repeat(skill.rating) + "☆".repeat(5 - skill.rating)}
            </li>
          ))}
        </ul>
      </div>

      {/* Experience */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaBriefcase className="mr-2" />{" "}
          {language === "en" ? "Experience" : "ประสบการณ์การทำงาน"}
        </h2>
        {content.experience.map((job, index) => (
          <div key={index} className="mt-4">
            <h3 className="font-semibold text-lg">{job.title}</h3>
            <p className="text-gray-600">
              {job.company}, {job.location} ({job.period})
            </p>
            <ul className="list-disc list-inside ml-4 text-gray-600">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Hobbies */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaLightbulb className="mr-2" />{" "}
          {language === "en" ? "Hobbies" : "งานอดิเรก"}
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          {content.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>

      {/* Abilities */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaUserAlt className="mr-2" />{" "}
          {language === "en" ? "Abilities" : "ความสามารถ"}
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          {content.abilities.map((ability, index) => (
            <li key={index}>{ability}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
