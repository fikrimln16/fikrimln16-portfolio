import React from 'react'
import "./Keahlian.css"
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Fade from 'react-reveal/Fade';
import { keahlian } from "../../data/keahlian"

const Keahlian = () => {

   const [text] = useTypewriter({
      words: ['Keahlian', 'Skills'],
      loop: true,
      typeSpeed: 120,
   });

   return (
      <div id="skills" className="keahlian-container">
         <div className="keahlian-desc">
            <Fade top>
               <h3>{text}<span><Cursor cursorStyle='|'/></span></h3>
            </Fade>
            <Fade bottom>
               <p>Bahasa yang saya pelajari saat kuliah di Telkom University dan mengikuti bootcamp!</p>
            </Fade>
         </div>
         <div className="keahlian-items">
               {keahlian.map((skill, index) =>{
                  return (
                     <Fade left big cascade>
                        <div className="img-logo">
                           <img src={skill.image} alt=""></img>
                        </div>
                     </Fade>
                  )
               })}
         </div>
      </div>
   );
}

export default Keahlian