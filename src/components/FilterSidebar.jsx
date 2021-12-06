import React, { useEffect, useRef, useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";

const FilterSidebar = ({ closeSidebarHandler }) => {
  const productsState = useSelector((state) => state.products);
  const [brands, setBrands] = useState([]);
  const [productTypes, setProductTypes] = useState([]);
  const [showConfirmButton, setShowConfirmButton] = useState(false);
  const filterData = useRef({ brands: [], productTypes: [] });

  useEffect(() => {
    if (productsState.status === "success") {
      setBrands([
        ...new Set(productsState.products.map((product) => product.brand)),
      ]);
      setProductTypes([
        ...new Set(
          productsState.products.map((product) => product.product_type)
        ),
      ]);
    }
  }, [productsState]);

  const determineShowHideConfirmButton = () => {
    let show = false;
    for (const [key, value] of Object.entries(filterData.current)) {
      if (value.length > 0) {
        show = true;
        break;
      }
    }
    return show;
  };
  const handleFilterProductType = (productType) => {
    if (!filterData.current.productTypes.includes(productType)) {
      filterData.current.productTypes.push(productType);
    } else {
      filterData.current.productTypes = filterData.current.productTypes.filter(
        (x) => x !== productType
      );
    }
    setShowConfirmButton(determineShowHideConfirmButton());
  };
  const handleFilterBrand = (brand) => {
    if (!filterData.current.brands.includes(brand)) {
      filterData.current.brands.push(brand);
      setShowConfirmButton(true);
    } else {
      filterData.current.brands = filterData.current.brands.filter(
        (x) => x !== brand
      );
    }
    setShowConfirmButton(determineShowHideConfirmButton());
  };

  return (
    <div className="filter-sidebar">
      <div className="filter-sidebar-header-wrapper">
        <h2>Filter products</h2>
        <div className="close-button-wrapper">
          {showConfirmButton && (
            <FaCheck
              className="confirm"
              onClick={() => alert("handle filter")}
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
                <div className="option-wrapper">
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
                <div className="option-wrapper">
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
    </div>
  );
};

export default FilterSidebar;
