import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

import {
  addToCart,
  safeRemoveFromCart,
  removeFromCart,
  clearCart,
} from "../redux/features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const ease = [0.6, 0.05, -0.01, 0.99];
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItemCompletely = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleIncreaseAmount = (item) => {
    dispatch(addToCart(item));
  };

  const handleNavigate = (route) => {
    navigate(route);
  };

  const parentSlideVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const slideVariants = {
    initial: {
      y: -32,
    },
    animate: {
      y: 0,
    },
  };

  return (
    <div className="cart">
      <div className="cart-header">
        <button className="clear-cart-button" onClick={handleClearCart}>
          Clear cart
        </button>
      </div>
      <AnimatePresence>
        <motion.div
          className="cart-items-container"
          variants={parentSlideVariants}
          initial="initial"
          animate="animate"
        >
          {cartItems?.map((item) => (
            <motion.div
              key={item._id}
              className="cart-item-wrapper"
              variants={slideVariants}
              layout
            >
              <button
                className="delete-cart-item-button"
                onClick={() => handleRemoveItemCompletely(item)}
              >
                <span></span>
                <span></span>
              </button>
              <div
                className="cart-item-image-wrapper"
                onClick={() => handleNavigate(`/products/${item._id}`)}
              >
                <img src={item?.images?.main} alt="img" />
              </div>
              <div className="cart-item-description-wrapper">
                <div
                  className="cart-item-name"
                  onClick={() => handleNavigate(`/products/${item._id}`)}
                >
                  {item?.name}
                </div>
                <div className="cart-item-brand">{item?.brand}</div>
              </div>
              <div className="cart-item-quantity-controls-wrapper">
                <button
                  className="control-wrapper minus"
                  onClick={() => dispatch(safeRemoveFromCart(item))}
                >
                  -
                </button>
                <div className="quantity-wrapper">{item.quantity}</div>
                <button
                  className="control-wrapper plus"
                  onClick={() => handleIncreaseAmount(item)}
                >
                  +
                </button>
              </div>
              <div className="cart-item-price-wrapper">
                {"$" + item.quantity * item.price}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      <motion.div
        className="cart-info-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        <div className="cart-total-price-wrapper">
          <p>Total Price: {"$" + totalPrice}</p>
        </div>
        <div className="buy-button-wrapper">
          <button className="buy-button">BUY</button>
        </div>
      </motion.div>
    </div>
  );
};

export default Cart;
