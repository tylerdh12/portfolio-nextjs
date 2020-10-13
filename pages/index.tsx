import { motion } from "framer-motion";
import React from "react";
import AnimatedBG from "../components/AnimatedBG";
import Layout from "../components/Layout";

interface IndexProps {
  MutableRefObject: null;
}

const Index: React.FC<IndexProps> = () => {

  return (
    <Layout title="Home">
      <motion.div id="home-content" className="home-page">
        <motion.h4 
        initial={{x: '100vw', y: `100vh`}}  
        animate={{x: 0, y: 0}} 
        transition={{duration: .4, delay: .4}} 
        className="home-string">Hello, my name is</motion.h4>
        <motion.h1 initial={{x: '100vw', y: `100vh`}}  animate={{x: 0, y: 0}} transition={{duration: .4, delay: .45}} id="owner-name" className="home-name">
          Tyler Harper
        </motion.h1>
        <motion.h2 initial={{x: '100vw', y: `100vh`}} animate={{x: 0, y: 0}} transition={{duration: .4, delay: .5}} id="owner-label" className="home-label">
          Full Stack Web / Native Developer
        </motion.h2>
        <motion.p initial={{x: '100vw', y: `100vh`}}  animate={{x: 0, y: 0}} transition={{duration: .4, delay: .55}} id="owner-tagline" className="home-tagline">
          I love building things for the web
        </motion.p>
      </motion.div>
      <div style={{position: "absolute"}}>
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
        
    </Layout>
  );
};

export default Index;
