import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addToCart,
  safeRemoveFromCart,
  removeFromCart,
} from "../redux/features/cart/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();

  return (
    <div className="cart">
      <div className="cart-items-container">
        {cartItems?.map((item) => (
          <div key={item._id} className="cart-item-wrapper">
            <div className="cart-item-image-wrapper">IMAGE</div>
            <div className="cart-item-description-wrapper">
              <div className="cart-item-name">Board</div>
              <div className="cart-item-brand">Toy Machine</div>
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
                onClick={() => dispatch(addToCart(item))}
              >
                +
              </button>
            </div>
            <div className="cart-item-price-wrapper">
              {"$" + item.quantity * item.price}
            </div>
          </div>
        ))}
      </div>
      <div className="cart-info-wrapper">
        <div className="cart-total-price-wrapper">
          <p>Total Price: {"$" + totalPrice}</p>
        </div>
        <div className="buy-button-wrapper">
          <button className="buy-button">BUY</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
