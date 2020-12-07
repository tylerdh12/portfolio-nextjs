import React from "react";

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
  return (
    <div className="full-view about" id="about">
      <div className="section-label">About Me</div>
      <div className="max-container">
        <div id="about-me" className="about-me">
          <p>
            I am a highly motivated, eager to learn individual. I strive to make
            a positive difference in the people I’m around and the tasks I
            choose to take on. I love technology and what it enables for so
            many.
          </p>

          <p>
            I have been doing web development since 2004. I started my own
            freelance company in 2007 and started doing small Wordpress sites,
            then moved to SEO as a marketed skill. I took a bit of a break as I
            worked on cars as a profession for about 7 years.
          </p>

          <p>
            As my interests peaked about Web and application development I
            decided to get back into the tech field. I subscribed to Team
            Treehouse and earned my Full-stack tech degree and have been on a
            steady flow to progress my knowledge of these platforms and
            technology in general.
          </p>

          <p>
            Now I am seeking a professional opportunity to use those skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
