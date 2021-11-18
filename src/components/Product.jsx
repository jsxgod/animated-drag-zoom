import React, { useEffect, useState } from "react";

import ProductImage from "../assets/products/board-back-final.png";

import { ReactComponent as Close } from "../assets/close.svg";
import { ReactComponent as Chevron } from "../assets/chevron.svg";
import { ReactComponent as DownArrow } from "../assets/down-arrow.svg";

import { Gallery } from ".";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
} from "framer-motion";

import { scroller as scroll } from "react-scroll";

const Product = () => {
  const ease = [0.6, 0.05, -0.01, 0.99];
  const enlargedBreakpoint = -200;
  const leftDragConstraint = -1700;
  let x = useMotionValue(0, { ease: ease });
  const width = useTransform(x, [leftDragConstraint, 0], ["100%", "0%"]);
  const scale = useTransform(x, [enlargedBreakpoint, -100], [1.25, 1]);
  const fadeIn = useTransform(x, [enlargedBreakpoint, 0], [1, 0]);
  const moveUp = useTransform(x, [enlargedBreakpoint, 0], [-160, 0]);
  const moveDown = useTransform(x, [enlargedBreakpoint, 0], [100, 0]);
  const fadeOut = useTransform(x, [-120, 0], [0, 1]);

  const animationControls = useAnimation();

  const [fullyEnlarged, setFullyEnlarged] = useState(false);

  useEffect(() => {
    if (fullyEnlarged === true) {
      document.querySelector("html").classList.add("no-scroll");
      document.body.addEventListener("touchstart", function (e) {
        e.preventDefault();
      });
      scroll.scrollTo("product-image", {
        offset: -50,
        duration: 800,
        delay: 1,
        smooth: "easeInOutQuart",
      });
    } else {
      document.querySelector("html").classList.remove("no-scroll");
    }
  }, [fullyEnlarged]);

  useEffect(() => {
    x.onChange(() => {
      if (x.get() <= -200) {
        setFullyEnlarged(true);
      } else {
        setFullyEnlarged(false);
      }
    });
  }, [x]);

  const handleClose = () => {
    animationControls.start({
      x: 0,
      transition: { ease: ease, duration: 0.7 },
    });
  };

  const handleUserStoppedDragging = () => {
    if (fullyEnlarged === true) {
      scroll.scrollTo("product-image", {
        offset: -50,
        duration: 800,
        delay: 1,
        smooth: "easeInOutQuart",
      });
    }
  };

  const handleDragTransitionEnd = () => {
    if (fullyEnlarged === false) {
      animationControls.start({
        x: 0,
        transition: { ease: ease, duration: 0.7 },
      });
    }
  };

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
      <Gallery style={{ translateY: moveUp }} />
      <div className="product-wrapper">
        <motion.div
          style={{ opacity: fadeIn }}
          className="background"
        ></motion.div>
        <AnimatePresence>
          {fullyEnlarged && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ ease: [0.6, 0.05, -0.01, 0.99] }}
              className="product-drag-header"
            >
              <div className="company-name">Toy Machine</div>
              <div
                onClick={() => handleClose()}
                className="close-button-wrapper"
              >
                <Close />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="product-image-wrapper">
          <motion.div
            style={{ x, scale }}
            drag={"x"}
            dragConstraints={{ left: leftDragConstraint, right: 0 }}
            dragElastic={0.1}
            onDragEnd={() => handleUserStoppedDragging()}
            onDragTransitionEnd={() => handleDragTransitionEnd()}
            className="product-image"
            animate={animationControls}
          >
            <img src={ProductImage} alt="product" />
          </motion.div>
        </div>
        <motion.div
          style={{ paddingBottom: moveDown }}
          className="product-drag-info"
        >
          <div className="product-drag-info-wrapper">
            <div className="product-drag-info-label">
              <motion.h6 style={{ opacity: fadeOut, x }}>
                <Chevron />
                Drag To Enlarge
              </motion.h6>
            </div>
            <div className="product-drag-info-progress-background">
              <motion.div
                style={{ width }}
                className="product-drag-info-progress"
              ></motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Product;
