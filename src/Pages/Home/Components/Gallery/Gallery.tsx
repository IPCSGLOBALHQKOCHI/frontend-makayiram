import React, { useEffect, useRef } from "react";
// import gallery1 from "../../../../assets2/gallery1.png";
// import gallery2 from "../../../../assets2/gallery2.png";
// import gallery3 from "../../../../assets2/gallery3.png";
// import gallery4 from "../../../../assets2/gallery4.png";
// import gallery5 from "../../../../assets2/image.png";
import "./Gallery.css";
import { FiArrowUpRight } from "react-icons/fi";
const gallery1="https://cms.makayiram.com/wp-content/uploads/2024/12/gallery1.png"
const gallery2="https://cms.makayiram.com/wp-content/uploads/2024/12/gallery2.png"
const gallery3="https://cms.makayiram.com/wp-content/uploads/2024/12/gallery3.png"
const gallery4="https://cms.makayiram.com/wp-content/uploads/2024/12/gallery4.png"
const gallery5="https://cms.makayiram.com/wp-content/uploads/2024/12/image-1.png"


export const slides = [
  {
    name: "Escape to Nature",
    description:
      "A revitalizing experience awaits you along with a chance to reconnect with nature.",
    imageUrl: gallery1,
  },
  {
    name: "Cycling",
    description:
      "A revitalizing experience awaits you along with a chance to reconnect with nature.",
    imageUrl: gallery2,
  },
  {
    name: "Your Stay",
    description:
      "A revitalizing experience awaits you along with a chance to reconnect with nature.",
    imageUrl: gallery3,
  },
  {
    name: "Unwind, Unplug...",
    description:
      "A revitalizing experience awaits you along with a chance to reconnect with nature.",
    imageUrl: gallery4,
  },
  {
    name: "Estate Tour",
    description:
      "A revitalizing experience awaits you along with a chance to reconnect with nature.",
    imageUrl: gallery5,
  },
];

const Gallery: React.FC = () => {
  const slideRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleNext = () => {
      const items = slideRef.current?.querySelectorAll(
        ".item"
      ) as NodeListOf<HTMLElement>;
      if (items.length > 0) {
        const firstItem = items[0];
        slideRef.current?.appendChild(firstItem);
      }
    };

    intervalRef.current = setInterval(handleNext, 4000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="container font-pops">
      <div className="slide" ref={slideRef}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="item !rounded-3xl"
            style={{
              backgroundImage: `url(${slide.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="content mt-40 md:hidden lg:block">
              <div className="name">{slide.name}</div>
              <div className="des">{slide.description}</div>
              {/* <button
                className="button flex items-center border-2 border-white px-7 md:!px-8 py-3 w-fit rounded-xl text-white hover:bg-white hover:text-darkGreen transition duration-1000 ease-in-out text-3xl md:text-4xl font-medium"
                onClick={() => alert("Explore More!")}
              >
                Explore More
                <FiArrowUpRight className="w-12 h-12 ml-12 group-hover:text-darkGreen" />
              </button> */}
            </div>
          </div>
        ))}
      </div>
      <div className="button">
        <button className="next hidden" />
      </div>
    </div>
  );
};

export default Gallery;
