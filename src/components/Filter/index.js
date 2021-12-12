import React, { useState } from "react";
import "./styles.css";
import { FaAngleDown } from "react-icons/fa";
export function Filter({ handleFilter }) {
  const [selectedRegion, setRegion] = useState("");
  const [isOpen, setOpen] = useState(false);
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const renderRegions = () => {
    return regions.map((region) => (
      <div
        className="filter-text select"
        onClick={() => {
          setRegion(region);
          setOpen(false);
          handleFilter(region);
        }}
      >
        {region}
      </div>
    ));
  };
  return (
    <div className="filter-container">
      <div
        className="filter-button"
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        <text className="filter-text">
          {selectedRegion === "" ? "Filter by region " : selectedRegion}
        </text>
        <FaAngleDown className="filter-icon" />
      </div>
      {isOpen && <div className="filter-dropdown">{renderRegions()}</div>}
    </div>
  );
}
