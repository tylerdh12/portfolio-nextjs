import React from "react";

import Layout from "../../components/Layout";
import Link from "next/Link";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";

const Post = ({ htmlString, data }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta title="description" content={data.description} />
      </Head>
      {/* <Layout title="Home">
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      </Layout> */}

      <Layout title="Portfolio">
        <div style={{ display: "flex" }}>
          <h1 className="project-name">{data.title}</h1>
        </div>
        <div style={{ textAlign: "center" }}>
          <p className="project-description">{data.description}</p>
          <div className="button-container">
            <Link href={data.github_link} passHref>
              <a target="_blank" className="link-button">
                Code
              </a>
            </Link>
            <Link href={data.live_link} passHref>
              <a target="_blank" className="link-button">
                Live
              </a>
            </Link>
          </div>
          <h3 className="technologies-title">Technologies</h3>
          <ul className="technology-ul">
            {data.technologies.map((item) => (
              <li className="technology-item">{item}</li>
            ))}
          </ul>
          <div className="portfolio-img-container">
            <img src={"../" + data.coverImage} className="portfolio-img" />
          </div>
        </div>
      </Layout>
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("projects");
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMetadata = fs
    .readFileSync(path.join("projects", slug + ".md"))
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  const htmlString = marked(parsedMarkdown.content);

  return {
    props: {
      htmlString,
      data: parsedMarkdown.data,
    },
  };
};

export default Post;
