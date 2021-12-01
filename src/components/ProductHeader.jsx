import React from "react";
import { animateScroll } from "react-scroll";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cart/cartSlice";
import { ReactComponent as DownArrow } from "../assets/down-arrow.svg";

const ProductHeader = ({ productData }) => {
  // REDUX
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(productData));
  };

  return (
    <div className="product-header">
      <div className="product-info-wrapper">
        <div className="product-info-content">
          <h4>{productData.product_type}</h4>
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
  );
};

export default ProductHeader;
