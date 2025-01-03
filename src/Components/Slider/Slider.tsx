import "./Slider.css";
import slider1 from "../../assets/Slider/slider1.jpg";
import slider2 from "../../assets/Slider/slider2.jpg";
import slider3 from "../../assets/Slider/slider3.jpg";
import slider0 from "../../assets/Slider/slider0.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import DanutaImg from "../../assets/Reviews/Danuta.jpg";
import SudeeshImg from "../../assets/Reviews/Sudeesh.jpg";
import VineshImg from "../../assets/Reviews/Vinesh.jpg";
// import { useTranslation } from "react-i18next";
export const ReviewSlider = () => {
  var settings = {
    // autoplay: true,
    // dots: true,
    // arrows: false,
    dotsClass: "slick-dots sliderDot",
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    verticalSwiping: false,
    responsive: [
      {
        breakpoint: 989,
        settings: {
          // centerMode: true,
          // slidesToShow: 1,
          // variableWidth: false,
          // infinite: false,
          dots: false,
          vertical: false,
          verticalSwiping: false,
          arrows: false,
        },
      },
    ],
  };
  const reviews = [
    {
      image: DanutaImg,
      testimonial:
        "The place is amazing. Makayiram gave us a couple of days of being spoiled and pampered.Clean rooms, lovely staff, delicious food. Don't hesitate to go there.",
      author: "Danuta Zoledziewska   ",
    },
    {
      image: SudeeshImg,
      testimonial:
        "My stay at Makayiram was an absolute delight! The accommodation was luxurious and comfortable, providing a serene escape. The food was exquisite, offering a delightful array of flavors that catered to various tastes. The staff were incredibly hospitable, always attentive and eager to assist. Room service was prompt and efficient, ensuring a seamless experience throughout. Moreover, the trekking opportunities around the resort were breathtaking, offering mesmerizing views and a chance to connect with nature. Overall, a truly remarkable experience that exceeded all expectations ! ",
      author: "Sudeesh I G ",
    },
    {
      image: VineshImg,
      testimonial:
        "Our stay at Makayiram Retreat was nothing short of enchanting! Nestled in the midst of nature, it truly is a paradise for bird and butterfly enthusiasts. We enjoyed a wonderful time with our family and friends, surrounded by the serene ambiance that Makayiram Retreat offers. The service provided by the staff was exceptional, with the boys always ready to assist and ensure our comfort. The food was a highlight, prepared with a delightful homemade touch that left our taste buds thoroughly satisfied. Special commendation to the chef for the delicious culinary creations! Makayiram Retreat comes highly recommended for families seeking a fantastic getaway where the essence of nature is not just seen but truly felt.",
      author: "Vinesh Venu",
    },
    {
      // image: VineshImg,
      testimonial:
        "It is December, but winter's bite is not yet sharp. Daytime sun still has warmth. The warmth of the service at the resort is just as pleasant. Staying at Makayiram Retreat, it was as though one's home had been transported to a magical place. There was the comfort of being with people who cared, who pampered one with superb food. And the setting was wonderful. Different greens all around, the lush cardamom plants, the very tall and massive trees, the grass. The sky is a beautiful blue which stuns the city dwellers. The background music of the stream running through the property was soothing. Birds called, questioned, chatted and sang. They permitted infrequent glimpses, but were mostly content to play hide and seek among the leafy heights. Butterflies were less shy. The forest enters into one's being one felt part of it. One leaves the place with mind and body rested.",
      author: "Jayakumar Velayudhan Nair",
    },
    {
      // image: VineshImg,
      testimonial:
        "Wonderful place!! I was expecting something else but i was stunned by seeing the place , beautiful and calm , their hospitality hits the core , rooms are good , food is good, safe place to stay !!",
      author: "Afreen Khadija",
    },
    {
      // image: VineshImg,
      testimonial:
        "Simply put it’s an awesome place to stay. We had a pleasant stay and a great experience. Overall would definitely recommend.",
      author: "Rakesh Kumar",
    },
    {
      // image: VineshImg,
      testimonial:
        "Fabulous resort with very clean rooms. Food was very tasty. Hospitality was Excellent. We had a memorable stay with bonfire and music. Overall it's a worthy stay for the price they charge.",
      author: "Anuroop Hari",
    },
    // {
    //     // image: VineshImg,
    //     testimonial: "",
    //     author: "Afreen Khadija",
    // },
  ];
  return (
    <Slider {...settings}>
      {reviews.map((review, key) => {
        return (
          <div>
            <div className="testimonialSingleSliderContainer" key={key}>
              {review.image && (
                <div
                  className="reviewImage"
                  style={{ backgroundImage: `url(${review.image})` }}
                >
                  {/* <img src={review.image} alt="" /> */}
                </div>
              )}
              <div className="reviewText">
                <div className="testimonial">
                  <FaQuoteLeft /> {review.testimonial}. <FaQuoteRight />
                </div>
                <p className="auther">{review.author}</p>
                <div className="rating">
                  <FaStar />
                  <FaStar />
                  <FaStar /> <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};
export const SliderSimple = () => {
  // const {t} = useTranslation();
  const slider = [
    {
      sliderText1: "Harmony With Nature",
      // sliderText2: "Slider1Text2",
      // sliderText3: "Slider1Text3",
      productImage: slider0,
    },
    {
      sliderText1: "THE TRAIL OF HAPPINESS",
      // sliderText2: "Slider1Text2",
      // sliderText3: "Slider1Text3",
      productImage: slider2,
    },
    {
      sliderText1: "THE LIGHT OF TRANQUILITY",
      sliderText2: "Best Plantation Resort in Munnar with forest views",
      // sliderText3: "SliderText23",
      productImage: slider1,
    },
    {
      sliderText1: "THE ABODE OF SERENITY",
      // sliderText2: "SliderText32",
      // sliderText3: "SliderText33",
      productImage: slider3,
    },
  ];
  var settings = {
    autoplay: true,
    dots: true,
    dotsClass: "slick-dots sliderDot",
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    verticalSwiping: false,
    responsive: [
      {
        breakpoint: 989,
        settings: {
          // centerMode: true,
          // slidesToShow: 1,
          // variableWidth: false,
          // infinite: false,
          dots: false,
          vertical: false,
          verticalSwiping: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div id="home">
      <Slider {...settings}>
        {slider.map((slide, index) => {
          return (
            <div>
              {" "}
              <div
                key={index}
                className="sliderContainer"
                style={{ backgroundImage: `url(${slide.productImage})` }}
              >
                <div className="center_text">
                  <h2 className="tagLine"> {slide.sliderText1}</h2>
                  {slide.sliderText2 && (
                    <h2 className="text-3xl my-3"> {slide.sliderText2}</h2>
                  )}
                  <h3 className="subTagline">MAKAYIRAM PLANTATION RETREAT</h3>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
    // <Slider {...settings}>
    //     {slider.map((slide, index) => {
    //         return <div key={index} className={`bannerContainer`}>
    //             <div className="sliderContainer" >
    //                 <motion.div
    //                     initial="start"
    //                     whileInView="end"
    //                     viewport={{ once: false }}
    //                     transition={{ duration: 0.6 }}
    //                     variants={{
    //                         start: { translateY: -100 },
    //                         end: { translateY: 0 }
    //                     }}
    //                     className="productImage" data-aos="slide-down" style={{ backgroundImage: `url(${slide.productImage})` }}
    //                 ></motion.div>
    //             </div></div>
    //     })}

    // </Slider>
  );
};
