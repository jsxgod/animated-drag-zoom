import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Details, Product, ProductHeader } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/features/products/productSlice";
import { motion } from "framer-motion";

const ProductPage = () => {
  const { id } = useParams();
  // REDUX
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.data);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchProduct(id));
    setIsLoading(false);
  }, [dispatch, id]);

  return (
    <motion.div
      className="product-page"
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      {!isLoading && (
        <motion.div
          className="test"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <ProductHeader productData={productData} />
          <Product productData={productData} />
          <Details productData={productData} />
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProductPage;
