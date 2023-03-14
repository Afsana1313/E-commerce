import React from "react";
import Image from "next/image";
type imageSrcType = {
  imageAlt: string;
  imageSrc: string;
};
function SingleProductImageContainer({ imageSrc, imageAlt }: imageSrcType) {
  return (
    <></>
    // <Image
    //   width={250}
    //   height={300}
    //   src={`https:${imageSrc}`}
    //   alt={imageAlt}
    //   className="h-auto max-w-full rounded-lg"
    // />
  );
}

export default SingleProductImageContainer;
