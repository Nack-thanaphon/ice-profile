import { useState } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaGraduationCap,
  FaBriefcase,
  FaAward,
  FaTools,
  FaLinkedin,
  FaDownload,
  FaUserAlt,
  FaLightbulb,
} from "react-icons/fa";

function Profile() {
  const [language, setLanguage] = useState('th');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'th' : 'en');
  };

  return (
    <div className="max-w-3xl mx-auto font-sans bg-white space-y-10 py-10 p-3 rounded-lg">
      <div className="text-right">
        <button onClick={toggleLanguage} className="text-blue-500">
          {language === 'en' ? 'ภาษาไทย' : 'English'}
        </button>
      </div>

      {/* Profile Header */}
      <div className="text-center">
        <img
          src="profile.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto"
        />
        <h1 className="text-4xl font-bold text-gray-800 mt-4 sm:text-center text-justify">
          {language === 'en' ? 'Phiengpen Panjan' : 'เพียงเพ็ญ แป้นจันทร์'}
        </h1>
        <p className="mt-2 text-gray-600 sm:text-center text-justify">
          {language === 'en' ? 'Bangkungsri, Bangkoknoi, Bangkok 10700' : 'บางขุนศรี, บางกอกน้อย, กรุงเทพฯ 10700'}
        </p>
        <p className="mt-2 text-gray-600 flex items-center sm:justify-center">
          <FaPhone className="mr-2" />
          <a href="tel:085-664-6929" className="text-blue-500">
            085-664-6929
          </a>
        </p>
        <p className="mt-2 text-gray-600 flex items-center sm:justify-center">
          <FaEnvelope className="mr-2" />{" "}
          <a href="mailto:porphanpen@gmail.com" className="text-blue-500">
            porphanpen@gmail.com
          </a>
        </p>
        <p className="mt-2 text-gray-600 flex items-center sm:justify-center">
          <FaLinkedin className="mr-2" />{" "}
          <a
            href="https://www.linkedin.com/in/phiengpen-panjan-b791532a6/"
            className="text-blue-500"
          >
            LinkedIn Profile
          </a>
        </p>
        <p className="mt-2 text-gray-600 flex items-center sm:justify-center">
          <FaDownload className="mr-2" />{" "}
          <a
            href="PHIENGPEN_PANJAN_Resume.pdf"
            className="text-blue-500"
            download
          >
            {language === 'en' ? 'Download Resume' : 'ดาวน์โหลดเรซูเม่'}
          </a>
        </p>
      </div>

      {/* Professional Summary */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaUserAlt className="mr-2" /> {language === 'en' ? 'Professional Summary' : 'สรุปประวัติการทำงาน'}
        </h2>
        <p className="mt-2 text-gray-600">
          {language === 'en'
            ? 'With over 7 years of professional experience, I am a highly motivated and adaptable individual skilled in problem-solving, teamwork, and effective communication. I excel in managing diverse tasks with precision and am passionate about contributing to impactful projects and driving organizational success.'
            : 'ด้วยประสบการณ์การทำงานมากกว่า 7 ปี ฉันเป็นบุคคลที่มีแรงจูงใจสูงและปรับตัวได้ดี มีทักษะในการแก้ปัญหา การทำงานเป็นทีม และการสื่อสารที่มีประสิทธิภาพ ฉันมีความเชี่ยวชาญในการจัดการงานที่หลากหลายด้วยความแม่นยำและมีความหลงใหลในการมีส่วนร่วมในโครงการที่มีผลกระทบและขับเคลื่อนความสำเร็จขององค์กร'}
        </p>
      </div>

      {/* Educational Background */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaGraduationCap className="mr-2" /> {language === 'en' ? 'Educational Background' : 'ประวัติการศึกษา'}
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          {language === 'en' ? (
            <>
              <li>Bachelor of Arts (Religious Studies), Mahidol University (2011-2014)</li>
              <li>English-French Program, Satri Wat Rakhang School (2006-2011)</li>
            </>
          ) : (
            <>
              <li>ศิลปศาสตรบัณฑิต (ศาสนศึกษา), มหาวิทยาลัยมหิดล (2554-2557)</li>
              <li>โปรแกรมภาษาอังกฤษ-ฝรั่งเศส, โรงเรียนสตรีวัดระฆัง (2549-2554)</li>
            </>
          )}
        </ul>
      </div>

      {/* Working Experience */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaBriefcase className="mr-2" /> {language === 'en' ? 'Working Experience' : 'ประสบการณ์การทำงาน'}
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          {language === 'en' ? (
            <>
              <li>
                <strong>2021-Present:</strong> Educator, Faculty of Medicine Vajira Hospital
                <ul className="list-disc list-inside ml-2 mt-1">
                  <li>Arranged timetables for pre-clinical medical students.</li>
                  <li>Implemented teaching and learning processes.</li>
                </ul>
              </li>
              <li className="mt-2">
                <strong>2017-2021:</strong> Educator, Faculty of Nursing, Mahidol University
                <ul className="list-disc list-inside ml-2 mt-1">
                  <li>Managed scholarships for undergraduate students.</li>
                  <li>Organized the APAHL Forum 2019, an international conference.</li>
                  <li>Presented award-winning research on English skills development.</li>
                </ul>
              </li>
              <li className="mt-2">
                <strong>2015-2016:</strong> Academic Officer, Bangkok Medical Service Department
                <ul className="list-disc list-inside ml-2 mt-1">
                  <li>Organized computer workshops for medical personnel.</li>
                  <li>Participated in WFME international medical school standards training.</li>
                  <li>Managed quality assurance for the Clinical Medical Education Center.</li>
                </ul>
              </li>
            </>
          ) : (
            <>
              <div className='mt-3'>
                <strong>2564-ปัจจุบัน </strong>
                <br />
                <span className='text-blue-500'>นักวิชาการศึกษา</span>
                <span>  |  </span>
                <span>คณะแพทยศาสตร์วชิรพยาบาล</span>
                <ul className="list-disc list-inside ml-2 mt-1">
                  <li>จัดตารางเรียนสำหรับนักศึกษาแพทย์ก่อนคลินิก</li>
                  <li>ดำเนินการกระบวนการสอนและการเรียนรู้</li>
                </ul>
              </div>
              <div className='mt-3'>
                <strong>2560-2564 </strong>
                <br />
                <span className='text-blue-500'>นักวิชาการศึกษา</span>
                <span>  |  </span>
                <span>คณะพยาบาลศาสตร์ มหาวิทยาลัยมหิดล</span>
                <ul className="list-disc list-inside ml-2 mt-1">
                  <li>จัดการทุนการศึกษาสำหรับนักศึกษาระดับปริญญาตรี</li>
                  <li>จัดการประชุม APAHL Forum 2019 ซึ่งเป็นการประชุมระดับนานาชาติ</li>
                  <li>นำเสนอผลงานวิจัยที่ได้รับรางวัลเกี่ยวกับการพัฒนาทักษะภาษาอังกฤษ</li>
                </ul>
              </div>
              {/* <li className="mt-2">
                <strong>2558-2559:</strong> เจ้าหน้าที่วิชาการ, กรมการแพทย์กรุงเทพมหานคร
                <ul className="list-disc list-inside ml-2 mt-1">
                  <li>จัดการอบรมคอมพิวเตอร์สำหรับบุคลากรทางการแพทย์</li>
                  <li>เข้าร่วมการฝึกอบรมมาตรฐานโรงเรียนแพทย์นานาชาติ WFME</li>
                  <li>จัดการประกันคุณภาพสำหรับศูนย์การศึกษาทางการแพทย์คลินิก</li>
                </ul>
              </li> */}
            </>
          )}
        </ul>
      </div>

      {/* Skills */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaTools className="mr-2" /> {language === 'en' ? 'Skills' : 'ทักษะ'}
        </h2>
        <ul className="list-disc list-inside ml-2 mt-1">
          {language === 'en' ? (
            <>
              <li>Critical Thinking, Problem-Solving, and Analytical Skills</li>
              <li>Effective Communication and Team Collaboration</li>
              <li>Microsoft Office, Canva, Google Apps, Photoshop</li>
              <li>Project and Event Management</li>
            </>
          ) : (
            <>
              <li>การคิดเชิงวิพากษ์ การแก้ปัญหา และทักษะการวิเคราะห์</li>
              <li>การสื่อสารที่มีประสิทธิภาพและการทำงานร่วมกันเป็นทีม</li>
              <li>Microsoft Office, Canva, Google Apps, Photoshop</li>
              <li>การจัดการโครงการและกิจกรรม</li>
            </>
          )}
        </ul>
      </div>

      {/* Awards */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaAward className="mr-2" /> {language === 'en' ? 'Awards' : 'รางวัล'}
        </h2>
        <ul className="list-disc list-inside ml-2 mt-1">

          {language === 'en' ? (
            <li>
              Received a consolation prize for the oral presentation titled
              "Development of English Skills with Participation of Students at
              the Faculty of Nursing."
            </li>
          ) : (
            <li>
              ได้รับรางวัลชมเชยสำหรับการนำเสนอปากเปล่าหัวข้อ
              "การพัฒนาทักษะภาษาอังกฤษด้วยการมีส่วนร่วมของนักศึกษาที่คณะพยาบาลศาสตร์"
            </li>
          )}
        </ul>
      </div>

      {/* Hobbies */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaLightbulb className="mr-2" /> {language === 'en' ? 'Hobbies and Interests' : 'งานอดิเรกและความสนใจ'}
        </h2>
        <p className="mt-2 text-gray-600">
          {language === 'en'
            ? 'Passionate about green travel, planting trees, exploring social media trends, and listening to old music.'
            : 'หลงใหลในการเดินทางสีเขียว ปลูกต้นไม้ สำรวจแนวโน้มโซเชียลมีเดีย และฟังเพลงเก่า'}
        </p>
      </div>
    </div>
  );
}

export default Profile;