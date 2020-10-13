import React from "react";
import Layout from "../components/Layout";

const About: React.FunctionComponent = () => {
  return (
    <Layout title="About">
      <div className="full-view">
        <div className="max-container">
          <h1>About Me</h1>
          <p id="about-me" className="about-me">
            Thank you for taking a look at my portfolio. I have been working in
            web development for about 10 years. I have built and maintained
            several small business websites, and online stores. In December of
            2018 I decied to focus on directing my path to a degree in Full
            Stack Web Development. I then started my journey in the Full Stack
            Tech Degree Program on Treehouse. I primarily use React JS or React
            Native to develop web and native applications.
          </p>
        </div>
      </div>
    </Layout>
  );
};
export default About;
