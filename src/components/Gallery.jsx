import React from "react";
import { motion } from "framer-motion";

const Gallery = ({ style, productType, images }) => {
  return (
    <div className="gallery">
      {images && (
        <>
          {productType.toLowerCase() === "skateboard" ? (
            <motion.div style={style} className="gallery-wrapper skateboard">
              <div className="image-wrapper main">
                <img src={images.main} alt={"main"} />
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
          ) : productType.toLowerCase() === "deck" ? (
            <motion.div style={style} className="gallery-wrapper deck">
              <div className="image-wrapper main">
                <img src={images.main} alt={"main"} />
              </div>
              <div className="image-wrapper">
                <img src={images.front} alt={"front"} />
              </div>
              <div className="image-wrapper">
                <img src={images.side} alt={"side"} />
              </div>
            </motion.div>
          ) : (
            <motion.div style={style} className="gallery-wrapper single">
              <div className="image-wrapper main">
                <img src={images.main} alt={"main"} />
              </div>
            </motion.div>
          )}
        </>
      )}
    </div>
  );
};

export default Gallery;
