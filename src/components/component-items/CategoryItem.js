import React from "react";
import './CategoryItem.scss'

export default function CategoryItem(props) {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${props.imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{props.title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}
