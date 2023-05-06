import React from 'react';
import "./Main.css"
import Hero from '../../assets/FIKRI.jpeg'
import Fade from 'react-reveal/Fade';
import { UilInstagram, UilLinkedin, UilGithub } from '@iconscout/react-unicons'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Link } from 'react-scroll'

const Main = () => {

   const [text] = useTypewriter({
      words: ['Mahasiswa Telkom University', 'Mahasiswa Informatika'],
      loop: true,
      typeSpeed: 120,
   });

   const [text1] = useTypewriter({
      words: [
         'Welcome!',        // Bahasa Inggris
         'Selamat Datang!',    // Bahasa Spanyol
         'Bonjour!',      // Bahasa Prancis
         'Willkommen!',     // Bahasa Jerman
         'o-koshi kudasaimashita',        // Bahasa Jepang
         'eoseo-oseyo', 
      ],
      loop: true,
      typeSpeed: 100,
      deleteSpeed: 40,
      delaySpeed: 200,
   });

   return (
      <section id='home' className="main-container">
            <div className="desc-container">
               <Fade left>
                  <h2>{text1}<Cursor cursorStyle='|'/>,</h2>
                  <h3>Saya, <span>Fikri Maulana</span></h3>
                  <h2><span>{text}</span><span><Cursor cursorStyle='<'/></span></h2>
                  <p>Halo, Nama Saya Fikri Maulana, Saya Seorang Mahasiswa Informatika Di Universitas Telkom. Saya Mencari Pekerjaan Seperti Program Magang IT, Terutama Di Full Stack Developer. Lihat Nama Pengguna GitHub Saya Adalah Fikrimln6. Silahkan Hubungi Saya Di Maulanafikri455@gmail.Com Atau +62813-2219-5912.</p>
               </Fade>

               <Fade bottom>
                  <a className="btn"><Link
                              activeClass='active'
                              to={'contact'}
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                  >Hubungi Saya!</Link></a>
               </Fade>
                  <div className="desc-sosmed">
                     <Fade top>
                        <p>Ikuti saya</p>
                     </Fade>
                     <div className="sosmed">
                        <Fade left>
                           <a href="https://www.instagram.com/fikrimln16/" target="_blank">
                              <UilInstagram/>
                           </a>
                        </Fade>
                        <Fade buttom>
                        <a href="https://www.linkedin.com/in/fikri-maulana-134086180/" target="_blank">
                              <UilLinkedin/>
                        </a>
                        </Fade>
                        <Fade right>
                        <a href="https://github.com/fikrimln16" target="_blank">
                              <UilGithub/>
                           </a>
                        </Fade>
                     </div>
               </div>
            </div>
         <Fade right>
            <div className="image-container">
               <img src={Hero} alt="" />
            </div>
         </Fade>
      </section>
   )
}

export default Main;