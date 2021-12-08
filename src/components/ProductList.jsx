import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../redux/features/products/productsSlice";
import { AnimatePresence, motion } from "framer-motion";

import { ReactComponent as SkateboardSvg } from "../assets/svg/Skateboard.svg";

const ProductList = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.products);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleNavigate = (route) => {
    navigate(route);
  };
  return (
    <div className="product-list">
      <AnimatePresence>
        {productsState.status === "success" ? (
          productsState.products?.map((product) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.4 } }}
              key={product._id}
              className="product-list-item-wrapper"
            >
              <div className="product-list-item-image-wrapper">
                <img
                  src={product.images.main}
                  alt={"main"}
                  onClick={() => handleNavigate(`/products/${product._id}`)}
                />
              </div>
              <div className="product-list-item-description-wrapper">
                <div className="brand-wrapper">{product.brand}</div>
                <div className="name-wrapper">{product.name}</div>
                <div className="price-wrapper">{"$" + product.price}</div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="loading-animation-wrapper">
            <motion.div
              className="svg-wrapper"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: 1.2,
                opacity: 1,
                transition: {
                  duration: 0.4,
                  repeat: Infinity,
                  repeatDelay: 0.2,
                  ease: [0.6, 0.05, -0.01, 0.99],
                },
              }}
              exit={{
                scale: 1.2,
                opacity: 1,
                transition: {
                  duration: 0.4,
                  repeatDelay: 0.2,
                  ease: [0.6, 0.05, -0.01, 0.99],
                },
              }}
            >
              <SkateboardSvg className="skateboard-svg" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductList;
