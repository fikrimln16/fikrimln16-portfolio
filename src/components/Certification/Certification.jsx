import React from 'react'
import "./Certification.css"
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Fade from 'react-reveal/Fade';
import { sertifikat } from "../../data/sertifikat"


const Certification = () => {

   const [text] = useTypewriter({
      words: ['Sertifikat', 'Certification'],
      loop: true,
      typeSpeed: 120,
   });

   return (
      <section id='certifications' className="certification-container">
         <Fade top>
            <div className="certification-header">
               <h3>
               {text}<span><Cursor cursorStyle='|'/></span>
               </h3>
               <p>Sertifikat yang sudah saya dapatkan selama masa perkuliahan.</p>
            </div>
         </Fade>
         <div className="certification-content">
            {
               sertifikat.map((certification, index) => {
                  return(
                  <Fade left big>
                     <div className="certification">
                        <img src={certification.image} alt="sertifikat" />
                        <h2>{certification.title}</h2>
                        <p>{certification.desc}</p>
                     </div>
                  </Fade>
                  )
               })
            }
         </div>
      </section>
   )
}

export default Certification