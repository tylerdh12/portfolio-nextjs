import { motion } from "framer-motion";
import React from "react";
import Layout from "../components/Layout";

interface IndexProps {
  MutableRefObject: null;
}

const Index: React.FC<IndexProps> = () => {

  return (
    <Layout title="Home">
      <motion.div initial="hidden" animate="visible" variants={{
        hidden: {
          scale: .8,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: .4
          }
        },
      }}>
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
      </motion.div>
    </Layout>
  );
};

export default Index;
