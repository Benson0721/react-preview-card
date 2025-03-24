import React from "react";

export default function ResponsiveImage() {
  //picture tag make it super easy!
  return (
    <picture>
      <source
        srcSet="./images/image-product-desktop.jpg"
        media="(min-width: 1440px)"
      />
      <img src="./images/image-product-mobile.jpg" alt="product_image" />
    </picture>
  );
}
