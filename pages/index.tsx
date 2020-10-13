import { motion } from "framer-motion";
import React from "react";
import AnimatedBG from "../components/AnimatedBG";
import Layout from "../components/Layout";

interface IndexProps {
  MutableRefObject: null;
}

const Index: React.FC<IndexProps> = () => {

  const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: .5,
      duration: .75
    }
  }
}

const item = {
  hidden: { opacity: 0, x: '100vw' },
  show: { opacity: 1, x: 0}
}

  return (
    <Layout title="Home">
      <div style={{position: "absolute", height: "100vh", width: '100vw', overflow: 'hidden'}}>
        <AnimatedBG />
        <AnimatedBG />
        <AnimatedBG />
        <AnimatedBG />
        <AnimatedBG />
        <AnimatedBG />
        <AnimatedBG />
        <AnimatedBG />
        <AnimatedBG />
        <AnimatedBG />
        <AnimatedBG />
        <AnimatedBG />
        <AnimatedBG />
        <AnimatedBG />
        <AnimatedBG />
        <AnimatedBG />
        <AnimatedBG />
      </div>
      <motion.div
      variants={container}
    initial="hidden"
    animate="show"
   id="home-content" className="home-page">
        <motion.h4 variants={item}
        className="home-string">Hello, my name is</motion.h4>
        <motion.h1 variants={item} id="owner-name" className="home-name">
          Tyler Harper
        </motion.h1>
        <motion.h2 variants={item} id="owner-label" className="home-label">
          Full Stack Web / Native Developer
        </motion.h2>
        <motion.p variants={item} id="owner-tagline" className="home-tagline">
          I love building things for the web
        </motion.p>
      </motion.div>    
    </Layout>
  );
};

export default Index;
