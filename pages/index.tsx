import fs from "fs";
import React from "react";
import Layout from "../components/Layout";

const Index = () => {
  return (
    <Layout title="Home">
      <div className="home-page">
        <h4 className="home-string">Hello, my name is</h4>
        <h1 id="owner-name" className="home-name">
          Tyler Harper
        </h1>
        <h2 id="owner-label" className="home-label">
          Full Stack Web / Native Developer
        </h2>
        <p id="owner-tagline" className="home-tagline">
          I love building things for the web
        </p>
      </div>

      {/* <div>
        slugs:
        {slugs.map((slug: string | number | null | undefined) => {
          return (
            <div key={slug}>
              <Link href={`/blog/${slug}`}>
                <a>{`/blog/${slug}`}</a>
              </Link>
            </div>
          );
        })}
      </div> */}
    </Layout>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");

  return {
    props: {
      slugs: files.map((filename) => filename.replace(".md", "")),
    },
  };
};

export default Index;
