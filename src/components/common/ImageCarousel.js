import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const ImageCarousel = ({ images }) => {
  const carouselSettings = {
    autoPlay: true,
    showArrows: true,
    showStatus: false,
    showThumbs: false,
    infiniteLoop: true,
    interval: 5000,
    transitionTime: 500,
  };

  return (
    <div className="w-full">
      <Carousel {...carouselSettings}>
        {images.map((image, index) => (
          <div key={index} className="flex items-center justify-center h-full">
            <div className="max-w-full max-h-full">
              <Image
                src={image}
                width={800}
                height={300}
                alt="featured event"
                className="aspect-video"
              />
            </div>
            <div className="absolute top-0 left-0 p-2 text-white font-bold bg-opacity-50">
              Title
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
