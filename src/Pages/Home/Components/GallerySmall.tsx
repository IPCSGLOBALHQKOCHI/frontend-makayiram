import { useState, useEffect } from "react";
import { slides } from "./Gallery/Gallery";

const GallerySlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleSlides = () => {
    return [
      slides[currentIndex],
      slides[(currentIndex + 1) % slides.length],
      slides[(currentIndex + 1) % slides.length],  
    ];
  };

  const visibleSlides = getVisibleSlides();

  return (
    <div className="flex flex-col items-center px-3">
      <div className="relative overflow-hidden w-full">
        <div className="flex transition-all duration-1000 ease-in-out">
          {visibleSlides.map((slide, index) => (
            <div
              key={index}
              className={`p-1 transition-all transform-gpu duration-1000 ease-in-out ${
                index === 0 ? "w-9/12  " : index === 1 ? "w-3/12" : "w-2/12"
              }`}
            >
              <img
                src={slide.imageUrl}
                alt={slide.name}
                className="w-full h-full min-h-[300px] object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GallerySlider;
