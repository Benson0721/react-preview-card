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
  /*useEffect(() => {
        const updateImage = (e) => {
            if (e.matches) {
                setSrc("./images/image-product-desktop.jpg")
            } else {
                setSrc("./images/image-product-mobile.jpg")
            }

        }
        const mediaQuery = window.matchMedia("(min-width:1440px)");
        mediaQuery.addEventListener('change', updateImage);
        updateImage(mediaQuery)



        return (
            
        ) => {
            mediaQuery.removeEventListener('change', updateImage)
        }
    }, [])







    return (
        <>
            <img src={src} alt="product_image" />
        </>
    )*/
}
