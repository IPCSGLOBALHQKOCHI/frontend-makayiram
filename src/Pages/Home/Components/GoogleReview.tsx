import React from "react";
// import googleReview from "../../../assets2/googleReview.png";
// import googleReview2 from "../../../assets2/googleReview2.png";
const googleReview ="https://cms.makayiram.com/wp-content/uploads/2024/12/googleReview.png"
const googleReview2="https://cms.makayiram.com/wp-content/uploads/2024/12/googleReview2.png"
import star from "../../../assets2/star.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { FiArrowUpRight } from "react-icons/fi";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import Button from "./Button";

interface CustomCSSProperties extends React.CSSProperties {
  "--image-url"?: string;
  "--second-image-url"?: string;
}
const style: CustomCSSProperties = {
  "--image-url": `url(${googleReview})`,
  "--second-image-url": `url(${googleReview2})`,
};

const GoogleReview: React.FC = () => {
  return (
    <div
      style={style}
      className="bg-[image:var(--second-image-url)] md:bg-[image:var(--image-url)] sm:bg-[image:var(--image-url  )] sm: bg-cover bg-left xl:bg-center relative md:px-10 pt-10 text-white mt-20"
    >
      <div className="text-6xl font-medium  text-center">Reviews</div>
      <div className="w-full lg:w-1/2 !ml-auto my-10 md:my-20 lg:space-y-5 !mx-2">
        <div className="w-1/2 lg:w-full mx-auto flex flex-col items-center lg:flex-row lg:gap-16">
          <h1 className="text-9xl font-semibold ml-9">4.9</h1>
          <img src={star} alt="star" className="!w-[200px] md:!w-[300px]" />
        </div>
        <div className="w-full flex items-start lg:w-fit h-fit !mt-10">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            slidesPerView={1}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={1500}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation, EffectFade]}
            className=" rounded-3xl w-full md:w-[500px] h-fit review"
          >
            {review.map((post, index) => (
              <SwiperSlide
                key={index}
                className="min-h-fit md:!h-[350px] !w-full px-2"
              >
                <div className="border-gray-400 border-[1px] rounded-3xl bg-black/50 lg:bg-black/40 sm:bg-black/20 !h-[260px] md:!h-[330px] lg:!h-[380px] xl:!h-[350px] flex flex-col p-5 sm:p-8 md:p-10 space-y-5 mx-8">
                  <div className="flex items-center space-x-5 sm:space-x-8 md:space-x-10">
                    <img
                      src={post.img}
                      alt="vijayalakshmi"
                      className="rounded-full w-10 h-10 sm:w-16 sm:h-16 md:w-36 md:h-36"
                    />
                    <div className="space-y-2">
                      <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">
                        {post.name}
                      </h2>
                      <h4 className="text-gray-400 text-sm sm:text-base">
                        {post.posted} ago
                      </h4>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl ml-5 sm:ml-3 sm:pb-3 font-light leading-relaxed sm:leading-normal md:leading-loose justify-center">
                      {post.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full flex justify-center sm:ml-10 md:ml-20 lg:ml-40 lg:justify-start">
          <Button
            label={
              <span className="flex items-center group">
                Explore More
                <FiArrowUpRight className="w-12 h-12 ml-10 text-white group-hover:text-darkGreen" />
              </span>
            }
            type="button"
            className="group border-2 border-white px-7 md:!px-8 py-2 w-fit rounded-xl ml-12 hover:bg-white text-white hover:text-darkGreen transition duration-1000 ease-in-out text-3xl md:text-4xl font-medium"
            onClick={() => (window.location.href="https://g.co/kgs/55hvUVe")}
          />
        </div>
      </div>
    </div>
  );
};

export default GoogleReview;

import vijayalakshmi from "../../../assets2/vijayalakshmi.png";
import fayazmuhammed from "../../../assets2/fayazmuhammed.png";
import ramjir from "../../../assets2/ramjir.png";
import rajuhalder from "../../../assets2/rajuhalder.png";

const review = [
  {
    name: "Vijaya Lakshmi",
    img: vijayalakshmi,
    posted: "4 months",
    description:
      "Awesome peaceful place for a staycation. There are indoor and outdoor games to have fun. Trail walk amidst the cardamom estate provides a good bird and orchids watching experience. Though the menu was narrow, the food was authentic. Baked veggies would be the only items I regretted ordering. The team is so cool and very attentive. Excellent service, clean and great ambience. Highly recommend this property to unwind and destress yourself.",
  },
  {
    name: "Fayaz Muhammed",
    img: fayazmuhammed,
    posted: "7 months",
    description:
      "My recent stay at Makayiram Retreat in Munnar was an absolute delight! From the moment I arrived, the staff went above and beyond to ensure my comfort and satisfaction. Their warm hospitality made me feel right at home. The rooms were spacious, clean, and well-appointed, providing a cozy retreat after a day of exploring the breathtaking landscapes of Munnar. The serene ambiance of the hotel, coupled with the picturesque views of lush greenery.",
  },
  {
    name: "Ramji R",
    img: ramjir,
    posted: "4 months",
    description:
      "This is 8.5Km from central City. Nice place to stay with families and friends. The persons over there are kind enough to support requirements. The restaurant is very nice with its ambience and the staff are so kind and ready to cook and serve your request based on that day menu and availability. The day when I went was too hot due to summer and the fan in the room wasn't sufficient enough for ventilation and for sleep is the only concern we faced, hopefully all good.",
  },
  {
    name: "Raju Halder",
    img: rajuhalder,
    posted: "2 months",
    description:
      "I personally enjoyed the stay. The best thing about the ambiance of the property, truly in the lap of the nature. Love is oozing out from every corner of the property. The clouds, chirping of the birds and sounds of crickets gives a worthy feel.  The property has its own cultivation. They also sells their own brand of cardamom. However, the preference may vary with individual preferences, as the location is little deeper from the noisy markets.",
  },
];
