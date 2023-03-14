import React from "react";
import SingleProduct from "./SingleProduct";
function ProductPage({ productList }: any) {
  return (
    <div className="md:container flex flex-wrap">
      {productList.map((i: any) => (
        <SingleProduct key={i.id} item={i} />
      ))}
    </div>
  );
}

export default ProductPage;
