import { useState } from "react";
import "../style/Fonts.css";
import "../style/Skill.css";
import python from "../assets/python.png";
import java from "../assets/java.png";
import cpp from "../assets/cpp.png";
import c from "../assets/c.png";
import js from "../assets/js.png";
import framer from "../assets/framer.png";
import react from '../assets/react.png'
import bootstrap from '../assets/bootstrap.png'
import  css from '../assets/css.png'
import node from '../assets/node.png'
import express from '../assets/express.png'
import php from '../assets/php.png'
import git from '../assets/git.png'
import wordpress from '../assets/wordpress.png'
import shopify from '../assets/shopify.png'
import webflow from '../assets/webflow.png'
import mongo from '../assets/mongo.png'
import mysql from '../assets/mysql.png'
import figma from '../assets/figma.png'
import dropDown from '../assets/icon-dropdown.png'

type Props = {};

const Skills = (props: Props) => {
  const skillsData = [
    { name: "Python", category: "backend", icon: python },
    { name: "Java", category: "backend", icon: java },
    { name: "C++", category: "backend", icon: cpp },
    { name: "C", category: "backend", icon: c },
    { name: "JavaScript", category: "frontend", icon: js },
    { name: "React", category: "frontend", icon: react },
    { name: "Bootstrap", category: "frontend", icon: bootstrap },
    { name: "CSS", category: "frontend", icon: css },
    { name: "Node.js", category: "backend", icon: node },
    { name: "Express", category: "backend", icon: express },
    { name: "Php", category: "backend", icon: php },
    { name: "Git", category: "tool", icon: git },
    { name: "Shopify", category: "no-code", icon: shopify },
    { name: "Wordpress", category: "no-code", icon: wordpress },
    { name: "Webflow", category: "no-code", icon: webflow },
    { name: "Framer", category: "no-code", icon: framer },
    { name: "MySQL", category: "database", icon: mysql },
    { name: "MongoDB", category: "database", icon: mongo },
    { name: "Figma", category: "design", icon: figma },
  ];

  const glassEffect: React.CSSProperties = {
  background: "rgba(255, 255, 255, 0.25)",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  backdropFilter: "blur(4px)",
  WebkitBackdropFilter: "blur(4px)", // vendor-prefixed property
  borderRadius: "10px",
  border: "1px solid rgba(255, 255, 255, 0.18)",
};

 const achievements = [
  {
    title: "Lead Organizer, Intercollege Tech Fest 'Techne",
    details:
      "Planned and coordinated the entire fest, managing teams, logistics, and event scheduling across departments.",
  },
  {
    title: "Conducted a Web Development Workshop",
    details:
      "Delivered hands-on training on HTML, CSS, and JavaScript to over 100 participants.",
  },
  {
    title: "Member of Software Development Cell, FISAT Angamaly",
    details:
      "Contributed to software projects, collaborated with peers to enhance digital solutions, supported college-level tech initiatives and mentored fellow juniors.",
  },
];

const skillData = ["Collaboration and Teamwork", "Problem-Solving", "Leadership", "Adaptability and Quick Learning", "Strong Communication"]


  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index:number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = [
    "all",
    "frontend",
    "backend",
    "database",
    "design",
    "no-code",
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <div id="skills">
      <h1 style={{fontFamily: "Bebas Neue", textAlign: "center", fontSize: "5em"}}>
        Skills
      </h1>
      <div className="skill-filter-container col-lg-9 col-sm-12 mx-auto">
        <div className="filter-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn btn btn-secondary ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="skill-item d-flex flex-column align-items-center"
            >
              <img src={skill.icon} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
        <div className="col-md-10 col-lg-12 d-flex row mx-auto">
          
          <div className="col-sm-12 col-md-6 my-4" style={{lineHeight: "1.7rem"}}>
            <h1 style={{fontFamily: "Bebas Neue", textAlign: "left", fontSize: "1.5rem"}}>
              Soft Skills
            </h1>
            <ul style={{textAlign: "justify", fontFamily: "Bebas Neue", wordSpacing: "4px"}}>
              {skillData.map((item,index)=>(
                <li>{item}</li>
              ))}
            </ul>
          </div>

          <div className="col-sm-12 col-md-6 my-4" style={{lineHeight: "1.7rem"}}>
            <h1 style={{fontFamily: "Bebas Neue", textAlign: "left", fontSize: "1.5rem"}}>
              Achievements
            </h1>
            <ul style={{ textAlign: "justify", fontFamily: "Bebas Neue" }}>
      {achievements.map((item, index) => (
        <li key={index} className="d-flex flex-column col-12 mb-2"
          style={{
            borderBottom: "1px solid #ccc",
            cursor: "pointer",
        }} >
          <div className="d-flex justify-content-between align-items-center" onClick={() => toggle(index)}>
            <span>{item.title}</span>
            <img src={dropDown} alt="Toggle"
              style={{
                transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform .5s ease",
            }}/>
          </div>
          {openIndex === index && (
            <div className="mt-2 px-2 text-muted small"> {item.details} </div>
          )} 
        </li>
      ))}
    </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
