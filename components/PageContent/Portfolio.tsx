import React, { useEffect, useState } from "react";
import ProjectCard from "../Elements/ProjectCard";
import Axios from "axios";

export const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Axios.get("http://localhost:3000/api");

      if (response.status === 200 && response) {
        setLoading(false);
        setProjects(response.data.projects);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div id="portfolio-section">
      <div className="section-label">Personal Projects</div>
      <div id="portfolio" className="portfolio-container">
        <ul className="personal-projects">
          {projects.map(
            (project: {
              id: number;
              path: string;
              group: string;
              project_name: string;
              description: string;
              technologies: any;
              live_link: string;
              github_link: string;
              image_urls: any;
              status: string;
            }) => {
              if (project.group === "Personal" && project.status === "Complete")
                return <ProjectCard key={project.id} project={project} />;
            }
          )}
        </ul>
      </div>
      <div className="section-label">School Projects</div>
      <div id="portfolio" className="portfolio-container">
        <ul className="personal-projects">
          {projects.map(
            (project: {
              id: number;
              path: string;
              group: string;
              project_name: string;
              description: string;
              technologies: any;
              live_link: string;
              github_link: string;
              image_urls: any;
              status: string;
            }) => {
              if (project.group === "School" && project.status === "Complete")
                return <ProjectCard key={project.id} project={project} />;
            }
          )}
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
