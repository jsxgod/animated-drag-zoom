import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Details, Product, ProductHeader } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/features/products/productSlice";

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
    <div className="product-page">
      {!isLoading && (
        <>
          <ProductHeader productData={productData} />
          <Product productData={productData} />
          <Details productData={productData} />
        </>
      )}
    </div>
  );
};

export default ProductPage;
