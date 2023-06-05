/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const about = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section_header">
          <h2 className="title section_title">Our Team</h2>
          <span className="section_hint">
            Kami adalah tim capstone Cleanearth
          </span>{" "}
        </div>
        <div className="row">
          <div className="section_content teamy-team">
            <div className="col-md-3">
              <div className="teamy teamy_style1 teamy_mask-circle">
                <div className="teamy_layout">
                  <div className="teamy_preview">
                    <img
                      src="/img/azhar.jpg"
                      className="teamy_avatar"
                      width={600}
                    />
                  </div>
                  <div className="teamy_back">
                    <main className="teamy_back-inner">
                      {" "}
                      <a href="https://github.com" className="social">
                        {" "}
                        <FaGithub />
                      </a>{" "}
                      <a href="https://linkedin.com" className="social">
                        {" "}
                        <FaLinkedin />
                      </a>{" "}
                    </main>
                  </div>
                </div>
                <div className="teamy_content">
                  <h3 className="teamy_name">Azhar</h3>
                  <span className="teamy_post">Web Developer</span>{" "}
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="teamy teamy_style1 teamy_mask-circle">
                <div className="teamy_layout">
                  <div className="teamy_preview">
                    <img
                      src="/img/uzdha.jpg"
                      className="teamy_avatar"
                      width={600}
                    />
                  </div>
                  <div className="teamy_back">
                    <main className="teamy_back-inner">
                      {" "}
                      <a
                        href="https://github.com/azhararrozak"
                        className="social"
                      >
                        {" "}
                        <FaGithub />
                      </a>{" "}
                      <a
                        href="https://www.linkedin.com/in/azharrozak/"
                        className="social"
                      >
                        {" "}
                        <FaLinkedin />
                      </a>{" "}
                    </main>
                  </div>
                </div>
                <div className="teamy_content">
                  <h3 className="teamy_name">Uzdha</h3>
                  <span className="teamy_post">Web Developer</span>{" "}
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="teamy teamy_style1 teamy_mask-circle">
                <div className="teamy_layout">
                  <div className="teamy_preview">
                    <img
                      src="/img/sarahaha.jpg"
                      className="teamy_avatar"
                      width={600}
                    />
                  </div>
                  <div className="teamy_back">
                    <main className="teamy_back-inner">
                      {" "}
                      <a
                        href="https://github.com/sarahlarasati"
                        className="social"
                      >
                        {" "}
                        <FaGithub />
                      </a>{" "}
                      <a
                        href="https://www.linkedin.com/in/sarah-larasati-b27821232/"
                        className="social"
                      >
                        {" "}
                        <FaLinkedin />
                      </a>{" "}
                    </main>
                  </div>
                </div>
                <div className="teamy_content">
                  <h3 className="teamy_name">Sarah</h3>
                  <span className="teamy_post">Web Developer</span>{" "}
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="teamy teamy_style1 teamy_mask-circle">
                <div className="teamy_layout">
                  <div className="teamy_preview">
                    <img
                      src="/img/foto rachel.jpg"
                      className="teamy_avatar"
                      width={600}
                    />
                  </div>
                  <div className="teamy_back">
                    <main className="teamy_back-inner">
                      {" "}
                      <a
                        href="https://github.com/RachelPutriPaskah14"
                        className="social"
                      >
                        {" "}
                        <FaGithub />
                      </a>{" "}
                      <a
                        href="https://www.linkedin.com/in/rachel-putri-paskah-9a0198224/"
                        className="social"
                      >
                        {" "}
                        <FaLinkedin />
                      </a>{" "}
                    </main>
                  </div>
                </div>
                <div className="teamy_content">
                  <h3 className="teamy_name">Rachel</h3>
                  <span className="teamy_post">Web Developer</span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
