import { motion } from "framer-motion";
import React from "react";

const Animation = () => {
  const initialRandomVerticalLocation = "-100vh";
  const randomVerticalLocation = "100vh";
  const initialRandomHorizontalLocation = Math.floor(Math.random() * 1000) * 2;
  const randomHorizontalLocation = Math.floor(Math.random() * 1000) * 2;
  const duration = Math.floor(Math.random() * 15);
  const delay = Math.random();
  const rotation = Math.floor(Math.random() * 360);

  const createSquare = (
    initialRandomVerticalLocation: string,
    randomVerticalLocation: string,
    initialRandomHorizontalLocation: number,
    randomHorizontalLocation: number,
    duration: number,
    delay: number,
    rotation: number
  ) => {
    // console.log(initialRandomHorizontalLocation, randomHorizontalLocation, duration, delay)
    return (
      <motion.div
        initial={{
          y: initialRandomVerticalLocation,
          x: initialRandomHorizontalLocation,
        }}
        animate={{
          y: randomVerticalLocation,
          x: randomHorizontalLocation,
          rotate: rotation,
        }}
        transition={{ duration: duration, delay: delay, yoyo: 10 }}
        style={{
          height: 100,
          width: 100,
          borderColor: "grey",
          borderWidth: 3,
          borderStyle: "solid",
          opacity: 0.2,
        }}
      />
    );
  };

  return createSquare(
    initialRandomVerticalLocation,
    randomVerticalLocation,
    initialRandomHorizontalLocation,
    randomHorizontalLocation,
    duration,
    delay,
    rotation
  );
};

export default Animation;
