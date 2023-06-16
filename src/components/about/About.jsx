import React from "react";
import "./About.css";
import { GithubCard } from "../../containers";

const About = () => {
  return (
    <div className="ab-container">
      <div className="ab-cont">
        <p className="ab-title">About us</p>
        <div className="ab-content">
          <p>
            Welcome to our blog site, a hub for all things tech! We are
            passionate about sharing the latest in technology news,
            groundbreaking research, and showcasing our own projects. Our
            dedicated team of tech enthusiasts curates a diverse range of
            content, keeping you up to date with the rapidly evolving tech
            landscape. From AI and machine learning to cybersecurity and
            software development, we delve into the most intriguing topics.
            Moreover, we take pride in sharing our own projects, giving you a
            glimpse into our innovative endeavors. Whether you're an avid
            learner, industry professional, or simply fascinated by technology,
            our blog is your go-to resource. Join us on this exciting journey as
            we explore the possibilities of the digital world!
          </p>
        </div>
      </div>
      <div className="ab-cont">
        <p className="ab-title">About the Author</p>
        <div className="ab-content">
          <p>
            I'm Sasmitha Ashinsana, the owner of Travamaker. As a dedicated
            student, I am committed to studying hard and honing my skills in
            software development. Currently, my focus lies in web app and
            Android app development projects. With a passion for creating
            innovative solutions, I am taking my first steps towards becoming
            proficient in these areas. Join me on this exciting journey as I
            strive to expand my knowledge and contribute to the ever-evolving
            world of technology
          </p>
        </div>
      </div>
      <div className="ab-cont">
        <p className="ab-title">My GitHub Showcase</p>
        <div className="ab-content">
          <GithubCard />
        </div>
      </div>
    </div>
  );
};

export default About;
