import React from "react";

import ProductImage from "../assets/products/board-back-final.png";

import { ReactComponent as Close } from "../assets/close.svg";
import { ReactComponent as Chevron } from "../assets/chevron.svg";
import { ReactComponent as DownArrow } from "../assets/down-arrow.svg";

import { motion, useSpring } from "framer-motion";

const Product = () => {
  return (
    <div className="product">
      <div className="product-info">
        <div className="product-info-wrapper">
          <div className="product-info-content">
            <h4>Skate Everywhere</h4>
            <h1>Toy Machine</h1>
            <h2>Cat Monster Complete</h2>
            <p>
              Take a ride and start rollin right with the Toy Machine Cat
              Monster Complete 8.25 x 31.88. This is a high quality complete
              that's perfect for beginning skateboarders, smaller riders, or
              yougnsters looking to start skateboarding. Features a top quality
              Toy Machine 7-ply maple deck, Rukus trucks, Toy Machine 52mm
              wheels and shielded Toy Machine abec 5 bearings. Fully assembled
              and ready to ride right out of the box.
            </p>
            <div className="buttons-container">
              <button>Buy Now ($99)</button>
              <DownArrow />
            </div>
          </div>
        </div>
      </div>
      <div className="product-wrapper">
        <div className="background"></div>
        <div className="product-drag-header">
          <div className="company-name">Toy Machine</div>
          <div className="close-button-wrapper">
            <Close />
          </div>
        </div>
        <div className="product-image-wrapper">
          <motion.div
            drag={"x"}
            dragConstraints={{ left: -1400, right: 0 }}
            dragElastic={0.1}
            className="product-image"
          >
            <img src={ProductImage} alt="product" />
          </motion.div>
        </div>
        <div className="product-drag-info">
          <div className="product-drag-info-wrapper">
            <div className="product-drag-info-label">
              <h6>
                <Chevron />
                Drag To Enlarge
              </h6>
            </div>
            <div className="product-drag-info-progress-background">
              <div className="product-drag-info-progress"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
