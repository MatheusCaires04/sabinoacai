import React from "react";

const ProductItem = ({ image, title }) => {
  return (
    <div className="shadow-shadowCardSlider h-64 overflow-hidden rounded-md">
      <img src={image} alt={title} className="h-full w-full" />
    </div>
  );
};

export default ProductItem;
