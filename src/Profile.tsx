import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaGraduationCap,
  FaBriefcase,
  FaPaintBrush,
  FaUserAlt,
  FaLightbulb,
  FaExternalLinkAlt,
  FaFileDownload,
} from "react-icons/fa";
import { motion } from "framer-motion";

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

interface PortfolioItem {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
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
  portfolio: PortfolioItem[];
}

const textContent: Record<string, Content> = {
  en: {
    name: "Thunyapond Sukthahin",
    subtitle: "Hi! My name is Iceya. Hit me up and I’ll be happy to help with your design ideas!",
    address: "Bangkok, Thailand",
    dob: "01/02/1993",
    contact: {
      email: "t.thunyapond@gmail.com",
      phone: "089-927-6462",
    },
    education: "Bachelor of Visual Communication Design, Rangsit University (2011–2015)",
    skills: [
      // Layout & Composition
      // { name: "Layout Design", rating: 4 },
      // { name: "Grid Systems", rating: 4 },
      // { name: "Typography", rating: 4 },
      // { name: "Visual Hierarchy", rating: 4 },

      // Design Software
      { name: "Photoshop", rating: 3 },
      { name: "Illustrator", rating: 4 },
      { name: "InDesign", rating: 3 },
      { name: "Figma", rating: 3 },

      // Visual Design
      { name: "Color Theory", rating: 4 },
      { name: "Composition", rating: 4 },
      // { name: "UI/UX Design", rating: 3 },
      { name: "Brand Identity", rating: 4 },

      // Media
      { name: "Photography", rating: 3 },
      { name: "Digital Publishing", rating: 3 },
      { name: "Print Design", rating: 4 },
      { name: "Social Media", rating: 3 }
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
    portfolio: [
      {
        title: "งานออกแบบอีเวนต์",
        description: "แบรนด์ดิ้งและสื่อสำหรับงานอีเวนต์องค์กร",
        imageUrl: "/example-1.png",
        link: "https://www.canva.com/design/DAGNvCSxQlE/1A-jsiWoC4HKNdPZUrtX6Q/view?utm_content=DAGNvCSxQlE&utm_campaign=designshare&utm_medium=link&utm_source=editor#12"
      },
      {
        title: "สื่อสิ่งพิมพ์ดิจิทัล",
        description: "ออกแบบนิตยสารแบบอินเตอร์แอคทีฟ",
        imageUrl: "example-2.png",
        link: "https://www.canva.com/design/DAGNvCSxQlE/1A-jsiWoC4HKNdPZUrtX6Q/view?utm_content=DAGNvCSxQlE&utm_campaign=designshare&utm_medium=link&utm_source=editor#10"
      }
    ]
  },
  th: {
    name: "ธันยพร สุขท่าหิน",
    subtitle: "สวัสดีค่ะ ฉันชื่อไอซ์ยา ติดต่อมาได้เลยนะคะ ยินดีช่วยเหลือเรื่องไอเดียการออกแบบค่ะ!",
    address: "กรุงเทพมหานคร, ประเทศไทย",
    dob: "01/02/2536",
    contact: {
      email: "t.thunyapond@gmail.com",
      phone: "089-927-6462",
    },
    education: "ปริญญาตรี นิเทศศิลป์ มหาวิทยาลัยรังสิต (2554-2558)",
    skills: [
      { name: "Lightroom", rating: 3 },
      { name: "Photography", rating: 3 }
    ],
    languages: [
      { name: "ไทย", level: "ภาษาแม่" },
      { name: "อังกฤษ", level: "พื้นฐาน" },
      { name: "ญี่ปุ่น", level: "กำลังเรียนรู้" },
    ],
    hobbies: ["เล่นกับแมว", "ปลูกต้นไม้", "ทำอาหาร", "ดื่มโกโก้"],
    abilities: ["เข้าอกเข้าใจผู้อื่น", "ความคิดสร้างสรรค์", "ทัศนคติเชิงบวก", "การทำงานเป็นทีม"],
    experience: [
      {
        title: "นักออกแบบกราฟิก – สไตลิสต์",
        company: "อมรินทร์ คอร์ปอเรชั่น",
        location: "ตลิ่งชัน",
        period: "เม.ย. 2566 – ปัจจุบัน",
        responsibilities: [
          "ออกแบบกราฟิกสำหรับอีเวนต์ ร่วมกับดีไซเนอร์โครงสร้าง",
          "สร้างคีย์วิชวลและอัตลักษณ์องค์กรสำหรับการจัดงาน",
          "สไตลิสต์แฟชั่น / สไตลิสต์อาหาร / สไตลิสต์ห้อง",
        ],
      },
      {
        title: "นักออกแบบกราฟิก",
        company: "มอนติวอรี่",
        location: "สาทร",
        period: "ส.ค. 2561 – ต.ค. 2565",
        responsibilities: [
          "อินโฟกราฟิก เครื่องเขียน ป้ายแบนเนอร์",
          "สร้างคอนเทนต์ดีไซน์บนโซเชียลมีเดีย",
          "ประสานงานโปรเจกต์และอีเวนต์ภายใน",
        ],
      },
      {
        title: "นักออกแบบกราฟิกสื่อดิจิทัล",
        company: "ศิริมีเดีย",
        location: "สาทร",
        period: "ต.ค. 2558 – ส.ค. 2561",
        responsibilities: [
          "ออกแบบนิตยสารอิเล็กทรอนิกส์และแคตตาล็อกสินค้าแบบอินเตอร์แอคทีฟสำหรับแท็บเล็ตและมือถือ",
        ],
      },
    ],
    portfolio: [
      {
        title: "งานออกแบบอีเวนต์",
        description: "แบรนด์ดิ้งและสื่อสำหรับงานอีเวนต์องค์กร",
        imageUrl: "/example-1.png",
        link: "https://www.canva.com/design/DAGNvCSxQlE/1A-jsiWoC4HKNdPZUrtX6Q/view?utm_content=DAGNvCSxQlE&utm_campaign=designshare&utm_medium=link&utm_source=editor#12"
      },
      {
        title: "สื่อสิ่งพิมพ์ดิจิทัล",
        description: "ออกแบบนิตยสารแบบอินเตอร์แอคทีฟ",
        imageUrl: "example-2.png",
        link: "https://www.canva.com/design/DAGNvCSxQlE/1A-jsiWoC4HKNdPZUrtX6Q/view?utm_content=DAGNvCSxQlE&utm_campaign=designshare&utm_medium=link&utm_source=editor#10"
      }
    ]
  }
};

const Profile: React.FC = () => {
  const [language, setLanguage] = useState<"en" | "th">("en");

  const toggleLanguage = (): void => {
    setLanguage(language === "en" ? "th" : "en");
  };

  const content = textContent[language];

  return (
    <div className="max-w-3xl mx-auto font-sans bg-white space-y-10 py-10 p-3 rounded-lg">
      <div className="flex justify-between">
        <motion.div
          className="bg-blue-300 hover:bg-blue-400 p-2 rounded-[10px] inline-block cursor-pointer"
          animate={{
            y: [-2, 2, -2],
            transition: {
              repeat: Infinity,
              duration: 0.8,
              ease: "easeInOut"
            }
          }}
          whileTap={{ scale: 0.95 }}
        >
          <a target="_blank" href="https://www.canva.com/design/DAGNvCSxQlE/1A-jsiWoC4HKNdPZUrtX6Q/view?utm_content=DAGNvCSxQlE&utm_campaign=designshare&utm_medium=link&utm_source=editor#2" className="flex items-center space-x-2">
            <span>Portfolio</span>
            <FaExternalLinkAlt size={14} />
          </a>
        </motion.div>
        <div className="text-right">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            className="text-blue-500"
          >
            {language === "en" ? "ภาษาไทย" : "English"}
          </motion.button>
        </div>
      </div>


      {/* Profile Header */}
      <div className="text-center">
        <img
          src="profile.jpg"
          alt="Profile"
          className="w-48 h-48 object-cover rounded-full mx-auto"
        />
        <h1 className="text-4xl font-bold text-gray-800 mt-4">{content.name}</h1>
        {/* <p className="text-gray-600 mt-2">{content.subtitle}</p> */}
        <p className="mt-2 text-gray-600">{content.address}</p>
        <b className="mt-2 text-gray-600">{content.dob}</b>
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
        <div className="flex justify-center  mt-3">
          <motion.div className="w-fit">
            <a
              href={language === "en" ? "/cv-en.pdf" : "/cv-th.pdf"}
              target="_blank"
              className="bg-blue-300 hover:bg-blue-400 px-3 py-1 rounded-lg flex items-center space-x-2"
            >
              <FaFileDownload size={14} />
              <span>{language === "en" ? "Download CV" : "ดาวน์โหลด CV"}</span>
            </a>
          </motion.div>
        </div>
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
            <li key={index}>{skill.name}</li>
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
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPaintBrush className="mr-2" />
          {language === "en" ? "Portfolio Examples" : "ตัวอย่างผลงาน"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {content.portfolio.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 p-4 rounded-lg"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg mb-2"
              />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-sm flex items-center mt-2"
                >
                  {language === "en" ? "View Project" : "ดูโปรเจค"}
                  <FaExternalLinkAlt size={12} className="ml-1" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
