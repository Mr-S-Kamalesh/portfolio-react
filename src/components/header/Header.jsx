import React from "react";
import "./Header.css";
import { BsLinkedin, BsGithub, BsFileText, BsInstagram } from "react-icons/bs";
import { HiChevronDoubleDown } from "react-icons/hi";
import Button from "../shared/Button";
import { ButtonOutline } from "../shared/Button";

import CV from "../../assets/Resume-Kamalesh S.pdf";

const Header = () => {
  return (
    <header className="header" id="home">
      <div className="header-header">
        <div className="header-title">
          <h5>Hello I'm</h5>
          <h1>Kamalesh S</h1>
          <small>Fullstack Developer</small>
        </div>
        <div className="header-buttons">
          <a download="" href={CV} target="_blank">
            <ButtonOutline text="Download CV" />
          </a>

          <a href="#contact">
            <Button text="Let's Talk" />
          </a>
        </div>
      </div>
      <div className="header-footer">
        <div className="header-socials">
          <a
            href="https://www.linkedin.com/in/kamalesh-s-a017411aa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>

          <a
            href="https://github.com/Mr-S-Kamalesh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>

          <a
            href="https://www.instagram.com/bond_by_red_blood/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram />
          </a>
        </div>
        <div className="image-area">
          <img src={"/assets/project img.jpg"} alt="Kamalesh" />
        </div>
        <a href="#!" className="scroll-down">
          <span>Scroll Down</span>
          <HiChevronDoubleDown />
        </a>
      </div>
    </header>
  );
};

export default Header;
