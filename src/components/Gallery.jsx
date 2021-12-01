import React from "react";
import { motion } from "framer-motion";

const Gallery = ({ style, images }) => {
  return (
    <div className="gallery">
      {images && (
        <motion.div style={style} className="gallery-wrapper">
          <div className="image-wrapper back">
            <img src={images.back} alt={"back"} />
          </div>
          <div className="image-wrapper wheel">
            <img src={images.wheel} alt={"wheel"} />
          </div>
          <div className="image-wrapper side">
            <img src={images.side} alt={"side"} />
          </div>
          <div className="image-wrapper close-up">
            <img src={images.closeUp} alt={"close-up"} />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;
