import { motion } from 'framer-motion';
import React from 'react';


const AnimatedBG = () => {


        const initialRandomHorizontalLocation = Math.floor(Math.random() * 500);
        const randomHorizontalLocation = Math.floor(Math.random() * 500);
        const duration = Math.floor(Math.random() * 15);
        const delay = Math.random();
        const rotation = Math.floor(Math.random() * 360);



    const createSquare = (initialRandomHorizontalLocation: number, randomHorizontalLocation: number, duration: number, delay: number, rotation: number) => {
        console.log(initialRandomHorizontalLocation, randomHorizontalLocation, duration, delay)
        return <motion.div initial={{y: '100vh', x: initialRandomHorizontalLocation}}  animate={{y: '-100vh', x: randomHorizontalLocation, rotate: rotation}} transition={{duration: duration, delay: delay}} style={{height: 100, width: 100, borderColor: "grey", borderWidth: 3, borderStyle: "solid", opacity: .2}}></motion.div>
    }

    return createSquare(initialRandomHorizontalLocation, randomHorizontalLocation, duration, delay, rotation)
}

export default AnimatedBG;