import React from "react";

const Details = () => {
  return (
    <div className="details">
      <div className="details-wrapper">
        <div className="details-header">
          <h5>Features and specifications</h5>
        </div>
        <ul className="details-container">
          <li>
            <div className="details-label">Width</div>
            <div className="details-content">8.25"</div>
          </li>
          <li>
            <div className="details-label">Length</div>
            <div className="details-content">31.88"</div>
          </li>
          <li>
            <div className="details-label">Wheels</div>
            <div className="details-content">Toy Machine 52mm</div>
          </li>
          <li>
            <div className="details-label">Wheelbase</div>
            <div className="details-content">14"</div>
          </li>
          <li>
            <div className="details-label">Deck</div>
            <div className="details-content">Toy Machine 7-ply maple deck</div>
          </li>
          <li>
            <div className="details-label">Trucks</div>
            <div className="details-content">Rukus</div>
          </li>
          <li>
            <div className="details-label">Bearings</div>
            <div className="details-content">Shielded Pig abec 5</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Details;
