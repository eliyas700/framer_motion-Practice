import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div
      animate={{ rotateZ: 360 }}
      transition={{ ease: "easeOut", duration: 2 }}
      className="home container"
    >
      <motion.h2 animate={{ fontSize: 55, color: "red", x: 20, y: -12 }}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button animate={{ scale: 1.5 }}>
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
