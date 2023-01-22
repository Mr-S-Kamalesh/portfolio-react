import React from "react";
import "./Footer.css";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import {BsGithub} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="logo">Kamalesh S</div>
        <nav className="menu">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#portfolio">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/kamalesh-s-a017411aa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.instagram.com/bond_by_red_blood/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/Mr-S-Kamalesh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
        </div>
        <div className="description">
          Copyright © {new Date().getFullYear()} Kamalesh
        </div>
      </div>
    </footer>
  );
};

export default Footer;
