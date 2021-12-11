import React from "react";
import { animateScroll } from "react-scroll";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cart/cartSlice";
import { TiInfoLargeOutline } from "react-icons/ti";

const ProductHeader = ({ productData }) => {
  // REDUX
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(productData));
    const localCartItems =
      JSON.parse(window.localStorage.getItem("cart-items")) || [];
    localCartItems.push(productData);
    window.localStorage.setItem("cart-items", JSON.stringify(localCartItems));
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
            <TiInfoLargeOutline
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
