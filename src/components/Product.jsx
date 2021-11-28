import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cart/cartSlice";

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
import { animateScroll } from "react-scroll";

const Product = ({ productData }) => {
  // REDUX
  const dispatch = useDispatch();

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

  const handleAddToCart = () => {
    dispatch(addToCart(productData));
  };

  return (
    <div className="product">
      <div className="product-info">
        <div className="product-info-wrapper">
          <div className="product-info-content">
            <h4>Skate Everywhere</h4>
            <h1>{productData.brand}</h1>
            <h2>{productData.name}</h2>
            <p>{productData.description}</p>
            <div className="buttons-container">
              <button onClick={handleAddToCart}>
                Buy Now ${productData.price}
              </button>
              <DownArrow
                onClick={() =>
                  animateScroll.scrollToBottom({
                    smooth: "easeInOutQuad",
                    duration: 1000,
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>
      <Gallery style={{ translateY: moveUp }} />
      <div className="product-wrapper">
        <AnimatePresence>
          {fullyEnlarged && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.3 } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="background"
            ></motion.div>
          )}
        </AnimatePresence>
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
