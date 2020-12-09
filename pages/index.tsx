import React from "react";
import Layout from "../components/Layout";
import Home from "../components/PageContent/Home";
import About from "../components/PageContent/About";
import Contact from "../components/PageContent/Contact";
import fs from "fs";
import { ProjectCard } from "../components/Elements/ProjectCard";

const Index = ({ slugs }: any) => {
  return (
    <Layout title="Home">
      <Home />
      <div id="portfolio-section">
        <div className="section-label">Projects</div>
        <div id="portfolio" className="portfolio-container">
          <div>
            <ul className="personal-projects">
              {slugs.map((slug: string) => {
                return <ProjectCard key={slug} slug={slug} />;
              })}
            </ul>
          </div>
        </div>
      </div>
      <About />
      <Contact />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync("projects");

  const slugs = files.map((filename) => filename.replace(".md", ""));

  return {
    props: {
      slugs,
    },
  };
};

export default Index;
