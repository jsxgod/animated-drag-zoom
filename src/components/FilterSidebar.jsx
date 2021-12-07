import React, { useEffect, useRef, useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { fetchProducts } from "../redux/features/products/productsSlice";

const FilterSidebar = ({ closeSidebarHandler }) => {
  const filterState = useSelector((state) => state.filter);
  const [brands, setBrands] = useState([]);
  const [productTypes, setProductTypes] = useState([]);
  const [showConfirmButton, setShowConfirmButton] = useState(false);
  const filterData = useRef({ brand: [], product_type: [] });
  const dispatch = useDispatch();

  useEffect(() => {
    if (filterState.status === "success") {
      setBrands([...new Set(filterState.data.map((product) => product.brand))]);
      setProductTypes([
        ...new Set(filterState.data.map((product) => product.product_type)),
      ]);
    }
  }, [filterState]);

  const determineShowHideConfirmButton = () => {
    let show = false;
    for (const [, value] of Object.entries(filterData.current)) {
      if (value.length > 0) {
        show = true;
        break;
      }
    }
    return show;
  };
  const handleFilterProductType = (productType) => {
    if (!filterData.current.product_type.includes(productType)) {
      filterData.current.product_type.push(productType);
    } else {
      filterData.current.product_type = filterData.current.product_type.filter(
        (x) => x !== productType
      );
    }
    setShowConfirmButton(determineShowHideConfirmButton());
  };
  const handleFilterBrand = (brand) => {
    if (!filterData.current.brand.includes(brand)) {
      filterData.current.brand.push(brand);
      setShowConfirmButton(true);
    } else {
      filterData.current.brand = filterData.current.brand.filter(
        (x) => x !== brand
      );
    }
    setShowConfirmButton(determineShowHideConfirmButton());
  };

  const handleFilterProducts = (data) => {
    try {
      dispatch(fetchProducts(new URLSearchParams(data)));
      closeSidebarHandler(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      className="filter-sidebar"
      initial={{ x: "-100%" }}
      animate={{
        x: 0,
        transition: { duration: 0.4, ease: [0.6, 0.05, -0.01, 0.99] },
      }}
      exit={{
        x: "-100%",
        transition: { duration: 0.2, ease: [0.6, 0.05, -0.01, 0.99] },
      }}
    >
      <div className="filter-sidebar-header-wrapper">
        <h2>Filter products</h2>
        <div className="close-button-wrapper">
          {showConfirmButton && (
            <FaCheck
              className="confirm"
              onClick={() => handleFilterProducts(filterData.current)}
            />
          )}
          <FaTimes
            className="close"
            onClick={() => closeSidebarHandler(false)}
          />
        </div>
      </div>
      <div className="filter-sidebar-sections-container">
        <div className="section-wrapper">
          <h3>Products</h3>
          <div className="section-options-container">
            {productTypes.length !== 0 &&
              productTypes.map((productType) => (
                <div key={productType} className="option-wrapper">
                  <h4>{productType}</h4>
                  <div className="checkbox-wrapper">
                    <input
                      type="checkbox"
                      onChange={() => handleFilterProductType(productType)}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="section-wrapper">
          <h3>Brands</h3>
          <div className="section-options-container">
            {brands.length !== 0 &&
              brands.map((brand) => (
                <div key={brand} className="option-wrapper">
                  <h4>{brand}</h4>
                  <div className="checkbox-wrapper">
                    <input
                      type="checkbox"
                      onChange={() => handleFilterBrand(brand)}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FilterSidebar;
