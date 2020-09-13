import React from "react";

interface ProjectCardProps {
  project_name: string;
  img: string;
  github: string;
  live: string;
  key: any;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project_name,
  img,
  github,
  live,
  key,
}) => {
  return (
    <div key={key} className="item-container">
      <img src={img} alt={project_name} />
      <div className="item-label">{project_name}</div>
      <div className="button-container">
        <button className="link-button">
          <a target="_blank" href={live}>
            Live
          </a>
        </button>
        <button className="hub-button">
          <a target="_blank" href={github}>
            GitHub
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
