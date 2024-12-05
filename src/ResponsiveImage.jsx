import React, { useState, useEffect } from 'react';






export default function ResponsiveImage() {
    const [src, setSrc] = useState("")


    useEffect(() => {
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



        return () => {
            mediaQuery.removeEventListener('change', updateImage)
        }
    }, [])







    return (
        <>
            <img src={src} alt="product_image" />
        </>
    )
}