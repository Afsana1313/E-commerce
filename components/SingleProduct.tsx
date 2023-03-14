import React from "react";
import SingleProductImageContainer from "./SingleProductImageContainer";
import ProductDetailsContainer from "./ProductDetailsContainer";

function SingleProduct({ item }: any) {
  const productDetails = {
    name: item.name,
    brand: item.brand,
    brandLink: item.website_link,
    colors: item.product_colors,
    price: item.price,
    category: item.category
  };
  return (
    <div className="w-80">
      <SingleProductImageContainer
        imageSrc={item.api_featured_image}
        imageAlt={item.name}
      />
      <ProductDetailsContainer productDetails={productDetails} />
    </div>
  );
}

export default SingleProduct;
