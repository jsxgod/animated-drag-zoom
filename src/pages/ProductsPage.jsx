import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FilterSidebar, ProductList } from "../components";
import { FaFilter } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { fetchFilterData } from "../redux/features/filter/filterSlice";

const ProductsPage = () => {
  const [filterSidebarOpened, setFilterSideBarOpened] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilterData());
  }, [dispatch]);

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
        <AnimatePresence>
          {filterSidebarOpened && (
            <FilterSidebar closeSidebarHandler={setFilterSideBarOpened} />
          )}
        </AnimatePresence>
      </div>
      <ProductList />
    </motion.div>
  );
};

export default ProductsPage;
