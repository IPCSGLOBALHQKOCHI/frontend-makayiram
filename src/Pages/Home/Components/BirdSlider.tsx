import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { FiArrowUpRight } from "react-icons/fi";
import florafauna from "../../../assets2/florafaunabg.png";
import VerticalDivider from "../../../assets2/VerticalDivider.png";
// import MalabarWhistlingThrush from "../../../assets2/Malabar whistling thrush.png";
// import NilgiriFlowerPecker from "../../../assets2/NiligiriFlowePecker.png";
// import IndianWhiteEye from "../../../assets2/IndianwhiteEye.png";
// import GlassyBlueTiger from "../../../assets2/glassblueTiger.png";
// import GrassYellow from "../../../assets2/grassYellow.png";
const MalabarWhistlingThrush =
  "https://cms.makayiram.com/wp-content/uploads/2024/12/Malabar-whistling-thrush.png";
const NilgiriFlowerPecker =
  "https://cms.makayiram.com/wp-content/uploads/2024/12/NiligiriFlowePecker.png";
const IndianWhiteEye =
  "https://cms.makayiram.com/wp-content/uploads/2024/12/IndianwhiteEye.png";
const GlassyBlueTiger =
  "https://cms.makayiram.com/wp-content/uploads/2024/12/glassblueTiger.png";
const GrassYellow =
  "https://cms.makayiram.com/wp-content/uploads/2024/12/grassYellow.png";

import Button from "./Button";

interface CustomCSSProperties extends React.CSSProperties {
  "--image-url"?: string;
}
const style: CustomCSSProperties = {
  "--image-url": `url(${florafauna})`,
};

const BirdSlider: React.FC = () => {
  return (
    <div className="max-w-screen-xl w-full mx-auto mb-10 mt-20 md:my-20 md:p-10 font-pops">
      <Swiper
        style={style}
        className="w-full bg-[image:var(--image-url)] bg-cover bg-center md:rounded-2xl !max-h-fit !h-auto"
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={2000}
        loop={true}
      >
        {birds.map((bird, index) => (
          <SwiperSlide
            key={index}
            className="rounded-2xl p-10 md:py-20 min-w-full flex flex-col md:flex-row md:space-x-20 !min-h-fit"
          >
            <h2 className="text-5xl text-white font-medium text-center my-10 md:hidden">
              Flora & <span className="text-[#5FA100] font-medium">Fauna</span>
            </h2>
            <img
              src={bird?.img}
              alt={bird?.name}
              className="min-w-full md:!w-5/12 md:min-w-fit"
            />
            <div className="flex-grow text-white text-5xl px-1 md:px-10 py-10 flex flex-col items-center md:items-start justify-between min-h-[330px]">
              <h2 className="hidden md:block">
                Flora &{" "}
                <span className="text-[#5FA100] font-medium">Fauna</span>
              </h2>
              <img
                src={VerticalDivider}
                alt="divider"
                className="min-w-full max-h-[2px] hidden md:block"
              />
              <h3 className="xs:text-3xl sm:text-4xl text-[#96CA4C]">
                {bird?.name}
              </h3>
              <p className="text-2xl md:text-3xl leading-relaxed justify-center text-center md:text-start">
                {bird?.description}
              </p>
              <img
                src={VerticalDivider}
                alt="divider"
                className="min-w-full !max-h-[2px]"
              />
              <Button
                label={
                  <span className="flex items-center group">
                    Explore More
                    <FiArrowUpRight className="w-12 h-12 ml-10 text-white group-hover:text-darkGreen" />
                  </span>
                }
                type="button"
                className="group border-2 border-white px-7 md:!px-10 py-2 w-fit rounded-xl mt-8 xl:mt-3 hover:bg-white text-white hover:text-darkGreen transition duration-1000 ease-in-out font-medium text-3xl md:text-4xl"
                onClick={() =>
                  (window.location.href = "https://makayiram.com/flora&fauna")
                }
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BirdSlider;

const birds = [
  {
    img: MalabarWhistlingThrush,
    name: "Malabar Whistling Thrush",
    description: `Known for its melodious calls that echo through the retreat, the Malabar Whistling Thrush adds a musical and soothing touch to the soundscape of Makayiram.   `,
  },
  {
    img: NilgiriFlowerPecker,
    name: "Nilgiri Flowerpecker",
    description: `An endemic species, the Nilgiri Flowerpecker adds an exclusive touch to the retreat's bird diversity. Its presence highlights the retreat's commitment to preserving regional avian species.`,
  },
  {
    img: IndianWhiteEye,
    name: "Indian White-eye",
    description: `Small and sociable, the Indian White-eye brings a delightful charm to the retreat's birdlife. Its gregarious nature adds to the overall harmony of Makayiram.`,
  },
  {
    img: GlassyBlueTiger,
    name: "Glassy Blue Tiger",
    description: `The transparent-like wings of the Glassy Blue Tiger butterfly contribute to the ethereal quality of Makayiram's butterfly population. Its delicate presence enhances the retreat's natural beauty.`,
  },
  {
    img: GrassYellow,
    name: "Grass Yellow",
    description: `The Grass Yellow butterfly, with its sunny disposition, adds a touch of warmth to the retreat. Its common yet charming presence is a testament to the diverse butterfly population.`,
  },
];
