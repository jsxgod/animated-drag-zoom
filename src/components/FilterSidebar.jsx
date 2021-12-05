import React, { useEffect, useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";

const FilterSidebar = ({ closeSidebarHandler }) => {
  const productsState = useSelector((state) => state.products);
  const [brands, setBrands] = useState([]);
  const [productTypes, setProductTypes] = useState([]);
  const [numberOfSelectedOptions, setNumberOfSelectedOptions] = useState(0);
  let filterData = { brands: [], productTypes: [] };

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

  const handleFilterProductType = (productType) => {
    if (!filterData.productTypes.includes(productType)) {
      filterData.productTypes.push(productType);
    } else {
      filterData.productTypes = filterData.productTypes.filter(
        (x) => x !== productType
      );
    }
  };
  const handleFilterBrand = (brand) => {
    if (!filterData.brands.includes(brand)) {
      filterData.brands.push(brand);
    } else {
      filterData.brands = filterData.brands.filter((x) => x !== brand);
    }
  };

  return (
    <div className="filter-sidebar">
      {numberOfSelectedOptions}
      <div className="filter-sidebar-header-wrapper">
        <h2>Filter products</h2>
        <div className="close-button-wrapper">
          {numberOfSelectedOptions > 0 ? (
            <FaCheck onClick={() => alert("handle filter")} />
          ) : (
            <FaTimes onClick={() => closeSidebarHandler(true)} />
          )}
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
