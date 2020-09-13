import React from "react";
import ProjectCard from "../../components/Elements/ProjectCard";
import Layout from "../../components/Layout";

// interface PortfolioProps {
//   data: any;
//   getInitialProps: () => object;
// }

export const Portfolio = ({ data }: any) => {
  const projects = data.projects;
  console.log(projects);
  return (
    <Layout title="Portfolio">
      <div id="portfolio-section">
        <div>
          <h2>Portfolio</h2>
          <div id="portfolio" className="portfolio-container">
            <div className="portfolio-label">Personal Projects</div>
            <div className="personal-projects">
              {projects.map(
                (
                  project: {
                    project_name: string;
                    image_urls: string[];
                    live_link: string;
                    github_link: string;
                    group: string;
                  },
                  index: any
                ) => {
                  if (project.group === "Personal")
                    return (
                      <ProjectCard
                        key={index}
                        project_name={project.project_name}
                        img={project.image_urls[0]}
                        live={project.live_link}
                        github={project.github_link}
                      />
                    );
                }
              )}
            </div>
          </div>
          <div id="portfolio" className="portfolio-container">
            <div className="portfolio-label">School Projects</div>
            <div className="personal-projects">
              {projects.map(
                (
                  project: {
                    project_name: string;
                    image_urls: string[];
                    live_link: string;
                    github_link: string;
                    group: string;
                  },
                  index: any
                ) => {
                  if (project.group === "School")
                    return (
                      <ProjectCard
                        key={index}
                        project_name={project.project_name}
                        img={project.image_urls[0]}
                        live={project.live_link}
                        github={project.github_link}
                      />
                    );
                }
              )}
            </div>
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
