import React, { useRef, useState } from "react";
import "./Contact.css";
import Fade from "react-reveal/Fade";
import { UilInstagram, UilLinkedin, UilGithub } from "@iconscout/react-unicons";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_75mztz3",
        "template_1fxxr46",
        form.current,
        "k7kIIsy0cQhIzTYNU"
      )
      .then(
        (result) => {
          alert("Berhasil mengirim email!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="container">
      <img src="img/shape.png" className="square" alt="" />
      <Fade left big>
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Mari Berkoneksi!</h3>
            <p className="text">
              Jika Anda merasa tertarik dengan layanan atau produk yang saya
              tawarkan, jangan ragu untuk menghubungi saya. Saya akan senang
              mendiskusikan segala hal yang berkaitan dengan proyek atau
              kebutuhan Anda. Terima kasih telah menghubungi saya.
            </p>
            <div className="info">
              <div className="information">
                <img src="img/location.png" className="icon" alt="" />
                <p>Jalan Dasavit, DKI Jakarta</p>
              </div>
              <div className="information">
                <img src="img/email.png" className="icon" alt="" />
                <p>maulanafikri455@gmail.com</p>
              </div>
              <div className="information">
                <img src="img/phone.png" className="icon" alt="" />
                <p>+62813-2219-5912</p>
              </div>
            </div>
            <div className="desc-sosmed">
              <Fade top>
                <p>Ikuti Saya</p>
              </Fade>
              <div className="sosmed">
                <Fade left>
                  <a
                    href="https://www.instagram.com/fikrimln16/"
                    target="_blank"
                  >
                    <UilInstagram />
                  </a>
                </Fade>
                <Fade buttom>
                  <a
                    href="https://www.linkedin.com/in/fikri-maulana-134086180/"
                    target="_blank"
                  >
                    <UilLinkedin />
                  </a>
                </Fade>
                <Fade right>
                  <a href="https://github.com/fikrimln16" target="_blank">
                    <UilGithub />
                  </a>
                </Fade>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form
              action="index.html"
              autoComplete="off"
              ref={form}
              onSubmit={sendEmail}
            >
              <h3 className="title">Hubungi Saya</h3>
              <div className="input-container">
                <input
                  type="text"
                  name="user_name"
                  className="input"
                  placeholder="Nama"
                  required
                />
                <span>Username</span>
              </div>
              <div className="input-container">
                <input
                  type="email"
                  name="user_email"
                  className="input"
                  placeholder="Email"
                  required
                />
                <span>Email</span>
              </div>
              <div className="input-container">
                <input
                  type="tel"
                  name="user_phone"
                  className="input"
                  placeholder="Nomor Telepon"
                  required
                />
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea
                  name="message"
                  className="input"
                  placeholder="Pesan"
                  required
                ></textarea>
                <span>Message</span>
              </div>
              <input type="submit" value="Kirim!" className="btn" />
            </form>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Contact;
