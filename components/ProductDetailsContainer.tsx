import React from "react";
type productDetailsType = {
  productDetails: {
    name: string;
    brand: string;
    brandLink: string;
    colors: any;
    price: string;
    category: string;
  };
};
function ProductDetailsContainer({ productDetails }: productDetailsType) {
  const { name, brand, brandLink, colors, price, category } = productDetails;
  return <div>{name}</div>;
}

export default ProductDetailsContainer;
