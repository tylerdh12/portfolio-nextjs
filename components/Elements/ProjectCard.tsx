import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  key: number;
  project: {
    id: number;
    group: string;
    project_name: string;
    description: string;
    technologies: [string];
    live_link: string;
    github_link: string;
    image_urls: [string];
    status: string;
  };
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link href={{ pathname: "/portfolio/[id]", query: { id: project.id } }}>
      <div className="item-container">
        <img src={project.image_urls[0]} alt={project.project_name} />
        <div className="item-label">{project.project_name}</div>
      </div>
    </Link>
  );
};

export default ProjectCard;
