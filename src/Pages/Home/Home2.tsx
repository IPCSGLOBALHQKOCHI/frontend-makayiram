import { useEffect,useRef } from "react";
import Header from "./Components/Header";
import bgVideoLandscape from "../../assets2/Makayiram Horizontal.mp4";
import bgVideoPortrait from "../../assets2/Makayiram Vertical.mp4";
// const bgVideoLandscape ="https://cms.makayiram.com/wp-content/uploads/2025/01/Makayiram-Reel-Website-Horizontal.mp4"
// const bgVideoPortrait ="https://cms.makayiram.com/wp-content/uploads/2025/01/Makayiram-Reel-Website-Vertical.mp4"
// import About_makayiram from "../../assets2/About_makayiram.png"; 
const About_makayiram ="https://cms.makayiram.com/wp-content/uploads/2024/12/About_makayiram.png"
import posterWeb from "../../../src/assets2/Thumbnail Horizontal.jpg"
import posterMobile from "../../../src/assets2/Thumbnail Vertical.jpg"
import Button from "./Components/Button";
import React from "react";
import { Menu } from "./Components/Menu/Menu";
// import Slider from "../Home/Components/Slider/Slider";
// import LeafAnimation from "./Components/Leaf1";
import RoomGallery from "./Components/RoomGallery";
import BirdSlider from "./Components/BirdSlider";
import Gallery from "./Components/Gallery/Gallery";
import Slider from "./Components/Slider/Slider";
import GallerySlider from "./Components/GallerySmall";
import GoogleReview from "./Components/GoogleReview";
import LocateUs from "./Components/LocateUs";
import NearbyAttraction from "./Components/NearbyAttraction";
import Blogs from "./Components/Blogs";
import Footer from "./Components/Footer";
import { FiArrowUpRight } from "react-icons/fi";

interface CustomCSSProperties extends React.CSSProperties {
  "--image-url"?: string;
}
const style: CustomCSSProperties = {
  "--image-url": `url(${About_makayiram})`,
};

const Home2: React.FC = () => {
  const landscapeVideoRef = useRef<HTMLVideoElement>(null);
  const portraitVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (window.innerWidth >= 768 && landscapeVideoRef.current) {
      landscapeVideoRef.current.play();
    } else if (window.innerWidth < 768 && portraitVideoRef.current) {
      portraitVideoRef.current.play();
    }
  }, []);
  return (
    <div className="w-full relative flex flex-col font-initial font-pops">
      <div className="w-full min-h-screen flex flex-col justify-center items-center relative font-pops">
        <video
        ref={landscapeVideoRef}
          className="absolute top-0 left-0 w-full h-full object-cover hidden md:block" // Hidden on small screens
          autoPlay
          loop
          muted
          preload="auto"
          playsInline
          poster={posterWeb}
        >
          <source src={bgVideoLandscape} type="video/mp4" />
        </video>

        <video
        ref={portraitVideoRef}
          className="absolute top-0 left-0 w-full max-h-full object-cover -z-10 block md:hidden" // Block on small screens, hidden on md and above
          autoPlay
          loop
          muted
          poster={posterMobile}
          preload="auto"
          playsInline
        >
          <source src={bgVideoPortrait} type="video/mp4" />
        </video>

        <Header />
        <Menu />

        <div className="w-fit text-center text-white absolute xs:top-96 top-8/12 md:top-1/2 px-5 md:px-1 z-40">
          <h1 className="xs:text-4xl text-5xl lg:text-6xl xl:text-7xl font-medium">
            Harmony With <span className="text-lightGreen">Nature</span>
          </h1>
          <h4 className=" text-xl md:text-3xl mt-2 font-normal">
            Find your own personal slice of heaven Unwind, unplug and bask in
            serenity
          </h4>
          <Button
            onClick={() =>
              window.open(
                "https://bookings.resavenue.com/resBooking/rooms?regCode=VXIA1026&roomSearchId=14a498c0a4dd4762b6e0f25352e40086&adult_1=null",
                "_blank"
              )
            }
            label={
              <span className="flex items-center justify-center text-center group-hover:text-white">
                BOOK NOW
                <FiArrowUpRight
                  className="w-10 h-7 ml-4 text-[#006401] group-hover:text-white 
                sm:w-11 sm:h-10 sm:ml-6 
                md:w-12 md:h-12 md:ml-8 
                lg:w-13 lg:h-12 lg:ml-8
                xl:w-10 xl:h-12 xl:ml-8"
                />
              </span>
            }
            type="button"
            className="group ml-6 !px-7 sm:!px-12 py-3 bg-white text-darkGreen rounded-full mt-20 hover:bg-darkGreen hover:text-white md:text-3xl 2xl:text-4xl duration-700 ease-in-out"
          />
        </div>
      </div>
      <div className="w-full relative flex flex-col justify-center items-center xs:mt-10 sm:mt-14 mt-20 md:mt-14 xl:mt-20">
        <div>
          <h1 className="xs:text-3xl sm:text-4xl text-5xl md:text-5xl xl:text-6xl font-medium text-center">
            Resort <span className="text-lightGreen">Activities</span>
          </h1>
        </div>
        <Slider />
        <Button
          label={
            <span className="flex items-center group-hover:text-white">
              Explore More
              <FiArrowUpRight className="w-12 h-12 ml-10 text-[#302F2F] group-hover:text-white" />
            </span>
          }
          type="button"
          className="group border-2 border-[#302F2F] px-7 md:!px-10 py-2 mx-auto rounded-xl mt-16 hover:bg-darkGreen hover:border-darkGreen hover:text-white transition duration-1000 ease-in-out text-3xl md:text-4xl font-medium"
          onClick={() =>
            (window.location.href = "https://makayiram.com/activities")
          }
        />
      </div>

      <div
        style={style}
        className=" bg-[image:var(--image-url)] bg-cover bg-center px-3 md:px-5 mt-10"
      >
        <div className="flex flex-col justify-center items-center text-white max-w-screen-xl mx-auto text-justify py-20 space-y-4">
          <h3 className="text-5xl font-medium">
            About <span className="text-lightGreen">Makayiram</span>
          </h3>
          <h6 className="text-xl md:text-3xl">
            Where you will find Harmony with nature
          </h6>
          <p className="!mt-20 text-3xl font-extralight leading-normal md:leading-loose text-ellipsis hidden md:block px-20">
            Located just 6 kms from Munnar town in a 50-acre organic cardamom
            plantation, Makayiram retreat is a tranquil abode in the lap of
            wilderness – flanked by the towering Chokramudi peak and the
            Pallivasal Tea Estate – yet close to the sightseeing spots.
            Makayiram Retreat is the perfect getaway that offers the holiday of
            a lifetime for bravehearts and the weary at heart. The retreat
            offers a choice of ten accommodation units including individual
            cottages, suite rooms, interconnecting suites and family apartments
            featuring contemporary designs steeped in bespoke luxury while not
            losing their plantation roots. The retreat, cocooned in an organic
            cardamom plantation is a tropical paradise home to 60+ species of
            birds and 30+ species of butterflies adding a touch of magic to the
            surrounding natural tapestry. The orchestra of bird songs, the
            symphony of their flight and the kaleidoscope of colours makes for
            an ethereal stay, while well-appointed contemporary rooms and suites
            keep the traveller pampered. Guided plantation tour and trail walks
            give a sneak peek into organic farming practices and how nature
            thrives in harmony. Jeep Safaris, Evening Barbeques, Shinrin Yoku,
            culinary lessons with the chefs all add to the experience. Guests
            can also step out of the resort and access the ubiquitous Pallivasal
            Tea estates to experience the magic of the tea estates Munnar is
            famous for. Orion’s Belt, the multicuisine restaurant serves an
            eclectic selection of hearty freshly prepared South Indian, North
            Indian, continental and Mediterranean dishes which incorporate local
            fresh produce.
          </p>
          <p className="block md:hidden !mt-10 text-2xl md:text-3xl font-extralight leading-normal md:leading-loose text-ellipsis px-10">
            Located just 6 km from Munnar town in a 50-acre organic cardamom
            plantation, Makayiram Retreat offers a tranquil escape surrounded by
            the towering Chokramudi peak and Pallivasal Tea Estate. This serene
            retreat provides ten accommodation options, including cottages,
            suite rooms, and family apartments that blend contemporary design
            with plantation charm. Home to 60+ bird species and 30+ butterfly
            species, the retreat immerses guests in nature's vibrant beauty.
            Guided plantation tours and trail walks reveal the harmony of
            organic farming, while Jeep safaris, evening barbeques, culinary
            lessons, and Shinrin Yoku add to the experience. Guests can also
            explore the nearby Pallivasal Tea estates for a quintessential
            Munnar experience.
          </p>
          <Button
            label={
              <span className="flex items-center group">
                More About Us
                <FiArrowUpRight className="w-12 h-12 ml-10 text-white group-hover:text-darkGreen" />
              </span>
            }
            type="button"
            className="group border-2 border-white px-7 md:!px-10 py-2 mx-auto rounded-xl !mt-16 md:!mt-28 hover:bg-white text-white hover:text-darkGreen transition duration-1000 ease-in-out font-light text-3xl md:text-4xl"
            onClick={() =>
              (window.location.href = "https://makayiram.com/About")
            }
          />
        </div>
      </div>
      {/* <LeafAnimation /> */}
      <RoomGallery />
      <BirdSlider />
      <div className="relative max-w-screen-xl md:!min-w-full overflow-hidden 2xl:!overflow-visible mx-auto font-pops hidden md:block">
        <h2 className="text-5xl font-semibold text-center">Gallery</h2>
        <div className="h-[100vh] lg:h-[90vh] xl:h-[105vh]">
          <Gallery />
        </div>
      </div>
      <div className="relative max-w-screen-xl min-h-[300px] md:!min-w-full overflow-hidden 2xl:!overflow-visible mx-auto font-pops md:hidden">
        <h2 className="text-4xl font-semibold text-center my-5 md:mb-0">
          Gallery
        </h2>
        <GallerySlider />
      </div>
      <GoogleReview />
      <LocateUs />
      <NearbyAttraction />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home2;
