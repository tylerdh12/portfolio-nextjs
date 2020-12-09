import React from "react";
import Layout from "../components/Layout";
import Home from "../components/PageContent/Home";
import About from "../components/PageContent/About";
import Contact from "../components/PageContent/Contact";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ProjectCard } from "../components/Elements/ProjectCard";

const Index = ({ projects }: any) => {
  return (
    <Layout title="Home">
      <Home />
      <div id="portfolio-section">
        <div className="section-label">Projects</div>
        <div id="portfolio" className="portfolio-container">
          <div>
            <ul className="personal-projects">
              {projects.map((project: any) => {
                return <ProjectCard key={project.title} project={project} />;
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

  const projects = slugs.map((slug) => {
    const markdownWithMetadata = fs
      .readFileSync(path.join("projects", slug + ".md"))
      .toString();

    return matter(markdownWithMetadata).data;
  });

  return {
    props: {
      projects,
    },
  };
};

export default Index;
