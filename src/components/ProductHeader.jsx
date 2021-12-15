import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { animateScroll } from "react-scroll";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cart/cartSlice";
import { TiInfoLargeOutline } from "react-icons/ti";
import { FaArrowLeft } from "react-icons/fa";

const ProductHeader = ({ productData }) => {
  const [selectedSizeOption, setSelectedSizeOption] = useState(() => {
    const hasSizeOptions = productData.hasOwnProperty("available_sizes");
    return hasSizeOptions ? productData.available_sizes[0] : "";
  });
  const navigate = useNavigate();
  // REDUX
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(productData));
    const localCartItems =
      JSON.parse(window.localStorage.getItem("cart-items")) || [];
    localCartItems.push(productData);
    window.localStorage.setItem("cart-items", JSON.stringify(localCartItems));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddToCart();
  };

  const handleSelectSizeOption = (event) => {
    setSelectedSizeOption(event.target.value);
  };

  return (
    <div className="product-header">
      <div className="product-info-wrapper">
        <div className="product-info-content">
          <div className="content-header-wrapper">
            <h4
              onClick={() =>
                navigate(`/products?product_type=${productData.product_type}`)
              }
            >
              {productData.product_type}
            </h4>
            <FaArrowLeft
              className="back-arrow-icon"
              onClick={() => navigate(-1)}
            />
          </div>
          <h1 onClick={() => navigate(`/products?brand=${productData.brand}`)}>
            {productData.brand}
          </h1>
          <h2>{productData.name}</h2>
          <p>{productData.description}</p>
          <form className="add-to-cart-form" onSubmit={handleSubmit}>
            <div className="buttons-container">
              <button>{"Buy Now $" + productData.price}</button>
              <TiInfoLargeOutline
                onClick={() =>
                  animateScroll.scrollToBottom({
                    smooth: "easeInOutQuad",
                    duration: 1000,
                  })
                }
              />
            </div>
            {productData.available_sizes.length !== 0 && (
              <>
                <h5>Pick size</h5>
                <div className="size-options-container">
                  {productData.available_sizes.map((size) => (
                    <div className="size-option-wrapper">
                      <label>
                        <input
                          type="radio"
                          value={size}
                          checked={selectedSizeOption === size}
                          onChange={handleSelectSizeOption}
                        />
                        {size}
                      </label>
                    </div>
                  ))}
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
