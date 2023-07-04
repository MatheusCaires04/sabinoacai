import React from "react";

const ProductItem = ({ image, title }) => {
  return (
    <div className="shadow-shadowCardSlider h-80 sm:h-64 w-[80%] sm:w-full mx-auto sm:mx-0 overflow-hidden rounded-md">
      <img src={image} alt={title} className="h-full w-full" />
    </div>
  );
};

export default ProductItem;
