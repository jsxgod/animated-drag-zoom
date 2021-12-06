import React, { useState } from "react";
import { FilterSidebar, ProductList } from "../components";
import { FaFilter } from "react-icons/fa";
import { motion } from "framer-motion";

const ProductsPage = () => {
  const [filterSidebarOpened, setFilterSideBarOpened] = useState(false);

  return (
    <motion.div
      className="products-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      transition={{ duration: 0.2 }}
    >
      <div className="product-list-header">
        <div className="options-container">
          <FaFilter
            onClick={() => setFilterSideBarOpened(!filterSidebarOpened)}
          />
        </div>
        {filterSidebarOpened && (
          <FilterSidebar closeSidebarHandler={setFilterSideBarOpened} />
        )}
      </div>
      <ProductList />
    </motion.div>
  );
};

export default ProductsPage;
