import React, { useEffect } from "react";
import Layout from "../components/Layout";

interface IndexProps {
  MutableRefObject: null;
}

const Index: React.FC<IndexProps> = () => {
  useEffect(() => {
    // let children = document.getElementById("home-content")?.childNodes;
    // TweenMax.staggerFrom(
    //   children,
    //   1,
    //   {
    //     opacity: 0,
    //     x: 2000,
    //     ease: Power3.easeOut,
    //   },
    //   0.2
    // );
  }, []);

  return (
    <Layout title="Home">
      <div id="home-content" className="home-page">
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
    </Layout>
  );
};

export default Index;
