import { motion } from "framer-motion";
import React from "react";
import AnimatedBG from "../components/AnimatedBG/AnimatedBG";
import Layout from "../components/Layout";
import Home from "../components/PageContent/Home";
import About from "../components/PageContent/About";
import Contact from "../components/PageContent/Contact";
import Portfolio from "../components/PageContent/Portfolio";

interface IndexProps {
  MutableRefObject: null;
}

const Index: React.FC<IndexProps> = () => {
  return (
    <Layout title="Home">
      <Home />
      <Portfolio />
      <About />
      <Contact />
    </Layout>
  );
};

export default Index;
