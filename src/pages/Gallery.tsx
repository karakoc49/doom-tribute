import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import imagesData from '../utils/data/imagesData.json'; // Import the JSON data

const Gallery = () => {
  const [index, setIndex] = useState(-1); // State for the current image index

  const handleClick = (index: number) => {
    setIndex(index); // Set the clicked image as the current image for lightbox
  };

  const handleClose = () => {
    setIndex(-1); // Close the lightbox when the close button is clicked
  };

  const handleMoveNext = () => {
    setIndex((index + 1) % imagesData.length); // Move to the next image
  };

  const handleMovePrev = () => {
    setIndex((index + imagesData.length - 1) % imagesData.length); // Move to the previous image
  };

  return (
    <div className="min-h-screen bg-[#1c3b33] text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-[#b45e33] mb-6">
        Doom Gallery
      </h1>
      <p className="text-lg text-center text-[#716a4e] max-w-2xl mx-auto mb-10">
        Explore a collection of iconic moments, levels, and weapons from the
        legendary Doom series. Relive the nostalgia and celebrate its legacy!
      </p>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {imagesData.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => handleClick(index)} // Open lightbox when clicked
          >
            <img
              src={image.path}
              alt={image.name}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-bold">{image.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {index !== -1 && (
        <Lightbox
          mainSrc={imagesData[index].path}
          nextSrc={imagesData[(index + 1) % imagesData.length].path}
          prevSrc={imagesData[(index + imagesData.length - 1) % imagesData.length].path}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
          imageCaption={imagesData[index].name}
        />
      )}
    </div>
  );
};

export default Gallery;
