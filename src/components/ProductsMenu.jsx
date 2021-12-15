import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { closeMenu, closeProductsMenu } from "../redux/features/menu/menuSlice";
import { ease } from "../utils";
import { useNavigate } from "react-router-dom";

const parentVariants = {
  hide: {
    x: "-100%",
    transition: {
      ease: ease,
      duration: 0.3,
    },
  },
  show: {
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
      delayChildren: 0.1,
      ease: ease,
    },
  },
};

const childrenVariants = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const ProductsMenu = () => {
  let x = useMotionValue(0, { ease: ease });
  const fadeOut = useTransform(x, [-50, 0], [0, 1]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menuOptions = [
    { label: "Browse all", route: "/products" },
    { label: "Skate Boards", route: "/products?product_type=SkateBoard" },
    { label: "Decks", route: "/products?product_type=Deck" },
    { label: "Wheels", route: "/products?product_type=Wheels" },
    { label: "Trucks", route: "/products?product_type=Truck" },
    { label: "Hardware", route: "/products?product_type=Hardware" },
  ];

  const handleClose = () => {
    dispatch(closeProductsMenu());
  };

  const handleNavigate = (route) => {
    dispatch(closeMenu());
    navigate(route);
    document.body.classList.remove("no-scroll");
  };

  return (
    <motion.div
      variants={parentVariants}
      initial="hide"
      animate="show"
      exit="hide"
      className="products-menu"
      style={{ opacity: fadeOut, x }}
    >
      <div className="products-menu-header-wrapper">
        <h1>Products</h1>
        <FaArrowLeft className="back-arrow-icon" onClick={handleClose} />
      </div>
      <motion.div
        style={{ opacity: fadeOut }}
        className="product-options-container"
      >
        {menuOptions.map((option) => (
          <motion.h2
            key={option.label}
            onClick={() => handleNavigate(option.route)}
            variants={childrenVariants}
            className="product-option"
          >
            {option.label}
          </motion.h2>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProductsMenu;
