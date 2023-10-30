import React from "react";
import "./Hero.scss";
import Myimg from "../../img/myimage.jpg";
import arrow from "../../img/down-arrow.png";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      stoggerchildren: 0.1,
    },
  },
  downArrow:{
    opacity:0,
    y: 10,
    transition:{
      duration:2,
      repeat:Infinity,
    }
  }
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    opacity: 1,
    transition: {
      repeat:Infinity,
      repetType:"mirror",
      duration: 20,
    },
  },
};

function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Abdulazizov Muhammadiy</motion.h2>
          <motion.h1 variants={textVariants}>FrontEnd Developer</motion.h1>
          <motion.div className="buttons">
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            animate="downArrow"
            variants={textVariants}
            className="downArrow"
            src={arrow}
            alt=""
          />
        </motion.div>
      </div>
      {/* <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Writer Content Creator Influencer
      </motion.div> */}
      <div className="imageContainer">
        <img src={Myimg} alt="" />
      </div>
    </div>
  );
}

export default Hero;
