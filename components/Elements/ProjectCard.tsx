import { motion } from "framer-motion";
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
    <motion.li key={project.id} className="card" whileHover={{
      position: 'relative',
      zIndex: 1,
      scale: 1.05,
      transition: {
        duration: .2
      }}}>
    <Link href={{ pathname: "/portfolio/[id]", query: { id: project.id } }}>
      <div className="item-container">
        <img src={project.image_urls[0]} alt={project.project_name} />
        <div className="item-label">{project.project_name}</div>
      </div>
    </Link>
    </motion.li>
  );
};

export default ProjectCard;
