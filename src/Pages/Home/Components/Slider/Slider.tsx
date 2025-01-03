import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

// import ShinrinYoku from "../../../../assets2/Shinrin yoku.png";
// import TrailWalk from "../../../../assets2/Trail Walk.png";
// import JeepSafari from "../../../../assets2/Jeep Safari.png";
// import OutdoorGames from "../../../../assets2/Outdoor Games.png";
// import Cycling from "../../../../assets2/Cycling.png";
const TrailWalk ="https://cms.makayiram.com/wp-content/uploads/2024/12/Trail-Walk.png"
const ShinrinYoku ="https://cms.makayiram.com/wp-content/uploads/2024/12/Shinrin-yoku.png"
const JeepSafari="https://cms.makayiram.com/wp-content/uploads/2024/12/Jeep-Safari.png"
const OutdoorGames="https://cms.makayiram.com/wp-content/uploads/2024/12/Outdoor-Games.png"
const Cycling="https://cms.makayiram.com/wp-content/uploads/2024/12/Cycling.png"

const slide1 = [
  { img: ShinrinYoku, heading: "Shinrin Yoku" },
  { img: TrailWalk, heading: "Trail Walk" },
  { img: JeepSafari, heading: "Jeep Safari" },
  { img: OutdoorGames, heading: "Outdoor Games" },
  { img: Cycling, heading: "Cycling" },
  { img: ShinrinYoku, heading: "Shinrin Yoku" },
  { img: TrailWalk, heading: "Trail Walk" },
  { img: JeepSafari, heading: "Jeep Safari" },
  { img: OutdoorGames, heading: "Outdoor Games" },
  { img: Cycling, heading: "Cycling" },
  { img: ShinrinYoku, heading: "Shinrin Yoku" },
  { img: TrailWalk, heading: "Trail Walk" },
  { img: JeepSafari, heading: "Jeep Safari" },
  { img: OutdoorGames, heading: "Outdoor Games" },
];

const Slider: React.FC = () => {
  return (
    <div className="mt-20">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        speed={2000}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 200,
          modifier: 1,
        }}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        style={{zIndex:"0 !important"}}
        spaceBetween={330}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className="!z-0"
      >
        {slide1.map(
          (slide: { img: string; heading: string }, index: number) => (
            <Fragment key={index}>
              <SwiperSlide className="flex flex-col gap-10 justify-center text-center min-h-[450px] md:min-h-[500px]">
                <img
                  src={slide.img}
                  alt="slide_image"
                  className="w-[18rem] h-[26rem] rounded-none"
                />
                <h1 className=" text-[20px] font-medium">
                  {slide.heading}
                </h1>
              </SwiperSlide>
            </Fragment>
          )
        )}
      </Swiper>
    </div>
  );
};

export default Slider;
