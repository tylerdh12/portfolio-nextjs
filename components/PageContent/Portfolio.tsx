import React from "react";
// import ProjectCard from "../Elements/ProjectCard";
// import path from "path";
// import matter from "gray-matter";
// import Link from "next/link";

const Portfolio = () => {
  // return (
  //   <div id="portfolio-section">
  //     <div className="section-label">Personal Projects</div>
  //     <div id="portfolio" className="portfolio-container">
  //       <div>
  //       <ul className="personal-projects">
  //         {slugs.map((slug) => {
  //           if (data.group === "Personal" && data.status === "Complete")
  //             return <ProjectCard key={slug} project={{ data, slug }} />;
  //         })}
  //       </ul>
  //     </div>
  //     <div className="section-label">School Projects</div>
  //     <div id="portfolio" className="portfolio-container">
  //       <ul className="personal-projects">
  //         {slugs.map((slug) => {
  //           if (data.group === "School" && data.status === "Complete")
  //             return <ProjectCard key={slug} project={{ data, slug }} />;
  //         })}
  //       </ul>
  //     </div>
  //   </div>
  // );
  return (
    <div>
      {/* {
        <div>
          {slugs.map((slug) => {
            let parsedString = slug.replaceAll("-", " ").split(" ");
            let project_title = parsedString
              .map((word) => {
                return word[0].toUpperCase() + word.substring(1);
              })
              .join(" ");

            return (
              <div key={slug}>
                <Link href={"/portfolio/" + slug}>
                  <a>{slug}</a>
                </Link>
              </div>
            );
          })}
        </div>
      } */}
    </div>
  );
};

export default Portfolio;
