import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  key: string;
  slug: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ slug }) => {
  console.log(slug);
  return (
    <motion.li
      key={slug}
      className="card"
      whileHover={{
        position: "relative",
        zIndex: 1,
        scale: 1.05,
        transition: {
          duration: 0.2,
        },
      }}
    >
      <Link href={"/portfolio/" + slug}>
        <div className="item-container">
          {/* <img src={sata.coverImage} alt={data.project_name + " image"} /> */}
          <div className="item-label">{slug}</div>
        </div>
      </Link>
    </motion.li>
  );
};

export default ProjectCard;
