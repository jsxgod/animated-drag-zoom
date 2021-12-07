import React, { useEffect } from "react";
import { fetchProducts } from "../redux/features/products/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleNavigate = (route) => {
    navigate(route);
  };
  return (
    <div className="product-list">
      {products?.map((product) => (
        <div key={product._id} className="product-list-item-wrapper">
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
        </div>
      ))}
    </div>
  );
};

export default ProductList;
