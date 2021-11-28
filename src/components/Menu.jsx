import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../redux/features/menu/menuSlice";

const Menu = () => {
  const ease = [0.6, 0.05, -0.01, 0.99];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const opened = useSelector((state) => state.menu.opened);

  const handleNavigate = (route) => {
    dispatch(closeMenu());
    navigate(route);
  };

  return (
    <AnimatePresence>
      {opened && (
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0, transition: { ease: ease, duration: 0.6 } }}
          exit={{ x: "-100vw", transition: { ease: ease, duration: 0.3 } }}
          className="menu"
        >
          <div className="menu-links-container">
            <motion.button
              className="menu-link-button"
              onClick={() => handleNavigate("/")}
            >
              Home
            </motion.button>
            <motion.button
              className="menu-link-button"
              onClick={() => handleNavigate("/products")}
            >
              Products
            </motion.button>
            <motion.button
              className="menu-link-button"
              onClick={() => handleNavigate("/about-us")}
            >
              About us
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
