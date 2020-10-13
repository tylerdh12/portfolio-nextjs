import { motion } from "framer-motion";
import React from "react";
import "../styles/styles.scss";

export default function MyApp({ router, Component, pageProps }) {
  return (
    <motion.div
      key={router.route}
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
      }}
      transition={{ duration: 1 }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}
