import React from "react";
import "./Navbar.scss";
import Facebook from "../../img/facebook.png";
import Instagram from "../../img/instagram.png";
import Github from "../../img/github.png";
import Telegram from "../../img/telegram.png";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";
import Hero from "../Hero/Hero";

function Navbar() {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          nami.des
        </motion.span>
        <motion.div
          className="social"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="https://www.facebook.com/marketplace/profile/61550347703578/?ref=permalink&tab=listings&mibextid=9R9pXO">
            <img src={Facebook} alt="" />
          </a>
          <a href="https://www.instagram.com/muhades05/">
            <img src={Instagram} alt="" />
          </a>
          <a href="https://github.com/namides">
            <img src={Github} alt="" />
          </a>
          <a href="https://t.me/nami_des">
            <img src={Telegram} alt="" />
          </a>
        </motion.div>
      </div>
      <Hero />
    </div>
  );
}

export default Navbar;
