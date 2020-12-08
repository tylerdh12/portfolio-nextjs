import React from "react";
import Layout from "../components/Layout";
import Home from "../components/PageContent/Home";
import About from "../components/PageContent/About";
import Contact from "../components/PageContent/Contact";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
// import Portfolio from "../components/PageContent/Portfolio";

const Index = ({ slugs }) => {
  return (
    <Layout title="Home">
      <Home />
      <div>
        {slugs.map((slug) => {
          // let parsedString = slug.replaceAll("-", " ").split(" ");
          // let project_title = parsedString
          //   .map((word) => {
          //     return word[0].toUpperCase() + word.substring(1);
          //   })
          //   .join(" ");

          return (
            <div key={slug}>
              <Link href={"/portfolio/" + slug}>
                <a>{slug}</a>
              </Link>
            </div>
          );
        })}
      </div>
      {/* <Portfolio /> */}
      <About />
      <Contact />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync("projects");
  const content = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  const slugs = files.map((filename) => filename.replace(".md", ""));

  const markdownWithMetadata = fs
    .readFileSync(path.join("projects", slugs + ".md"))
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      slugs,
      // data: parsedMarkdown.data
    },
  };
};

export default Index;
