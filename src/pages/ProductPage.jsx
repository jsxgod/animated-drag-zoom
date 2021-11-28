import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Details, Product } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/features/products/productSlice";

const ProductPage = () => {
  const { id } = useParams();
  // REDUX
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.data);

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  return (
    <div className="product-page">
      {productData !== undefined && (
        <>
          <Product productData={productData} />
          <Details productData={productData} />
        </>
      )}
    </div>
  );
};

export default ProductPage;
