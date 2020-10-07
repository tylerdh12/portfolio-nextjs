import Link from "next/link";
import fetch from "node-fetch";
import React from "react";
import Layout from "../../components/Layout";

const Project = ({ project }: any) => {
  return (
    <Layout title="Portfolio">
      <div style={{ display: "flex" }}>
        <h1 style={{ textAlign: "center", width: "100%", marginTop: 40 }}>
          {project.project_name}
        </h1>
      </div>
      <div style={{ textAlign: "center" }}>
        <p
          style={{
            textAlign: "center",
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 40,
          }}
        >
          {project.description}
        </p>
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
        <h3 style={{ textAlign: "center" }}>Technologies</h3>
        <ul
          style={{
            textAlign: "center",
            padding: 0,
            listStyle: "none",
            display: "flex",
            flexBasis: 10,
            flexDirection: "column",
            marginBottom: 40,
          }}
        >
          {project.technologies.map((item: React.ReactNode) => {
            return <li style={{ padding: 0.8 }}>{item}</li>;
          })}
        </ul>
        <div style={{ textAlign: "center" }}>
          {project.image_urls.map((item: any) => {
            return (
              <img
                src={item}
                className="portfolio-img"
              />
            );
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
