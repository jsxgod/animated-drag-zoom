import React from "react";

const Details = ({ productData }) => {
  return (
    <div className="details">
      <div className="details-wrapper">
        <div className="details-header">
          <h5>Features and specifications</h5>
        </div>
        <ul className="details-container">
          {productData.details?.map((detail, i) => (
            <li key={productData._id + "detail-" + i}>
              <div className="details-label">{detail.label}</div>
              <div className="details-content">{detail.value}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Details;
