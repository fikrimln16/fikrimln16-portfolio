import React from 'react'
import "./Projects.css"
import { projects } from "../../data/projects"
import Fade from 'react-reveal/Fade';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Projects = () => {

   const [text] = useTypewriter({
      words: ['Projek Saya', 'My Projects'],
      loop: true,
      typeSpeed: 120,
   });

   return (
      <section id='projects' className='projects-container'>
         <Fade right>
            <div className="projects-title">
               <h3>{text}<Cursor cursorStyle='|'/></h3>
               <p>Project saya saat masa perkuliahan di Telkom University dan saat mengikuti bootcamp!</p>
            </div>
         </Fade>
         <Fade bottom big cascade>
         <div className="projects-items">
            {projects.map((project, index) =>{
                     return (
                           <div className="project-box">
                              <div className="project-img">
                                 <img src={project.image} alt="project" />
                              </div>
                              <div className="project-title">
                                 <h4>{project.title}</h4>
                                 <p>{project.desc}</p>
                                 <div className="button-card">
                                    <a href={project.link} target="_blank">Visit Github!</a>
                                    {
                                       project.web ? <a href={project.web}>Visit Web!</a> : null
                                    }
                                 </div>
                              </div>
                           </div>
                     )
                  })}
         </div>
         </Fade>
      </section>
   )
}

export default Projects