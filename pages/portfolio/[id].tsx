import Link from "next/link";
import fetch from "node-fetch";
import React from "react";
import Layout from "../../components/Layout";

const Project = ({ project }: any) => {
  return (
    <Layout title="Portfolio">
      <div style={{ display: "flex" }}>
        <h1 className="project-name">{project.project_name}</h1>
      </div>
      <div style={{ textAlign: "center" }}>
        <p className="project-description">{project.description}</p>
        <div className="button-container">
          <Link href={project.github_link} passHref>
            <a target="_blank" className="link-button">
              Code
            </a>
          </Link>
          <Link href={project.live_link} passHref>
            <a target="_blank" className="link-button">
              Live
            </a>
          </Link>
        </div>
        <h3 className="technologies-title">Technologies</h3>
        <ul className="technology-ul">
          {project.technologies.map((item: React.ReactNode) => {
            return <li className="technology-item">{item}</li>;
          })}
        </ul>
        <div className="portfolio-img-container">
          {project.image_urls.map((item: any) => {
            return <img src={item} className="portfolio-img" />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const response = await fetch(
    "https://api.jsonbin.io/b/5f5942aead23b57ef90f1f76/2"
  );
  const data = await response.json();
  const projects = data.projects;
  const paths = projects.map(
    (project: { id: any }) => `/portfolio/${project.id}`
  );
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const response = await fetch(
    "https://api.jsonbin.io/b/5f5942aead23b57ef90f1f76/2"
  );
  const data = await response.json();
  const projects = data.projects;
  const project = projects.find((item: { id: { toString: () => any } }) => {
    return item.id.toString() === params.id;
  });

  return {
    props: {
      project,
    },
  };
}

export default Project;
