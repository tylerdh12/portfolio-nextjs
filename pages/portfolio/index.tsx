import React from "react";
import ProjectCard from "../../components/Elements/ProjectCard";
import Layout from "../../components/Layout";



export const Portfolio = ({ data }: any) => {
  const projects = data.projects;
  return (
    <Layout title="Portfolio">
      <div id="portfolio-section">
        <div>
          <h2>Portfolio</h2>
          <div id="portfolio" className="portfolio-container">
            <div className="portfolio-label">Personal Projects</div>
              <ul className="personal-projects">
              {projects.map(
                (project: {
                  id: number;
                  group: string;
                  project_name: string;
                  description: string;
                  technologies: [string];
                  live_link: string;
                  github_link: string;
                  image_urls: [string];
                  status: string;
                }) => {
                  if (project.group === "Personal")
                    return <ProjectCard key={project.id} project={project} />;
                }
              )}
              </ul>
          </div>
          <div id="portfolio" className="portfolio-container">
            <div className="portfolio-label">School Projects</div>
            <ul className="personal-projects">
              {projects.map(
                (project: {
                  id: number;
                  group: string;
                  project_name: string;
                  description: string;
                  technologies: [string];
                  live_link: string;
                  github_link: string;
                  image_urls: [string];
                  status: string;
                }) => {
                  if (project.group === "School")
                    return <ProjectCard key={project.id} project={project} />;
                }
              )}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Portfolio.getInitialProps = async () => {
  const response = await fetch(
    "https://api.jsonbin.io/b/5f5942aead23b57ef90f1f76/2"
  );
  const data = await response.json();
  return { data: data };
};

export default Portfolio;
