import { useState } from 'react';
import TimeLineCard from '../shared_component/TimeLineCard';


const Projects = () => {
  const projects = [
    {
      projectName: "Tomato - Cloud based food delivery for home-cooked and cloud kitchen",
      projectDescription:
        "Engineered a full-stack web delivery service leveraging the MERN stack, with features including seamless booking, order tracking, and Stripe payment integration. Optimized server-side operations using Node.js and MongoDB, enhancing the performance by 30%.",
      technologies: {
        Frontend: ["HTML", "CSS", "JavaScript", "React Js"],
        Backend: ["Express", "Node Js", "Multer", "Stripe"],
        Database: ["MongoDB", "Mongoose"]
      }
    },
    {
      projectName: "Responsive Web Interface for Talkiteasy Startup",
      projectDescription:
        "Developed a responsive and visually appealing landing page using HTML, CSS, React, and Bootstrap to showcase Talkiteasy, a budding startup’s innovative idea. The new design led to a 40% increase in online visibility and a 25% boost in potential customer inquiries within the first month.",
      technologies: {
        Frontend: ["HTML", "CSS", "Bootstrap", "JavaScript", "React Js"]
      }
    },
    {
      projectName: "Signalize: An IoT Solution for On-Demand Traffic Control",
      projectDescription:
        "Designed and developed a portable, IoT-enabled traffic signal system using sensors, microcontrollers, and cloud connectivity for flexible and efficient traffic control in dynamic scenarios.",
      technologies: {
        Frontend: ["HTML", "CSS", "JavaScript", "React Js"],
        Tool: ["ThingSpeak", "Arduino"],
        Language: ["C"]
      }
    }
  ];

  const [selectedProject, setSelectedProject] = useState(projects[0]); // default to the first project

  return (
    <div className='my-5 col-10 mx-auto'>
      <h1
        style={{
          fontFamily: "Bebas Neue",
          textAlign: "center",
          fontSize: "5em"
        }}
      >
        Projects
      </h1>

      <div className="col-12 row">
        {/* Project Titles List */}
        <div className="col-sm-12 col-md-6 col-lg-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="col-12 my-2"
              onClick={() => setSelectedProject(project)}
              style={{
                cursor: "pointer",
                border: selectedProject.projectName === project.projectName ? '2px solid black' : '0px solid gray',
                borderRadius: '10px',
                padding: '10px',
                backgroundColor: '#f8f9fa'
              }}
            >
              <strong>{project.projectName}</strong>
            </div>
          ))}
        </div>

        {/* Display Selected Project Details */}
        <div className="col-sm-12 col-md-6 col-lg-6">
          <TimeLineCard
            bootstrapClass="col-12 my-2 px-2 pt-1"
            style={{ padding: "2px" }}
            projectName={selectedProject.projectName}
            projectDescription={selectedProject.projectDescription}
            technologies={selectedProject.technologies}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
