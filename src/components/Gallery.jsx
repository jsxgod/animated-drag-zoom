import React from "react";
import BackImage from "../assets/products/toy_machine/cat_monster/board-back.webp";
import WheelImage from "../assets/products/toy_machine/cat_monster/board-wheel.webp";
import SideImage from "../assets/products/toy_machine/cat_monster/board-side.webp";
import CloseUpImage from "../assets/products/toy_machine/cat_monster/board-close-up.webp";
import { motion } from "framer-motion";

const Gallery = ({ style }) => {
  return (
    <div className="gallery">
      <motion.div style={style} className="gallery-wrapper">
        <div className="image-wrapper back">
          <img src={BackImage} />
        </div>
        <div className="image-wrapper wheel">
          <img src={WheelImage} />
        </div>
        <div className="image-wrapper side">
          <img src={SideImage} />
        </div>
        <div className="image-wrapper close-up">
          <img src={CloseUpImage} />
        </div>
      </motion.div>
    </div>
  );
};

export default Gallery;
