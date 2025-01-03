import Brown_capped_pygmy_woodpecker from "../../assets/Flora/Brown_capped_pygmy_woodpecker.jpg";
import Chestnut_backed_scimitar_babbler from "../../assets/Flora/Chestnut_backed_scimitar_babbler.jpg";
import Crimson_backed_sunbird from "../../assets/Flora/Crimson_backed_sunbird.jpg";
import Great_hornbill from "../../assets/Flora/Great_hornbill.jpg";
import Holly_blue from "../../assets/Flora/Holly_blue.jpg";
import Nilgiri_lycatcher from "../../assets/Flora/Nilgiri_lycatcher.jpg";
import Plum_headed_parakeet from "../../assets/Flora/Plum_headed_parakeet.jpg";
import Spotted_owlet from "../../assets/Flora/Spotted_owlet.jpg";
import White_cheeked_barbet from "../../assets/Flora/White_cheeked_barbet.jpg";
import Myophonus_horsefeildii from "../../assets/Flora/Malabar_whistling_thrush.jpg";
import Otus_sunia from "../../assets/Flora/Oriental_Scops_owl.jpg";
import Sholicola_major from "../../assets/Flora/Sholicola_major.jpg";
import Pseudocoladenia_dan from "../../assets/Flora/Pseudocoladenia_dan.jpeg";
import Udara_akasa from "../../assets/Flora/Udara_akasa.jpeg";

import { Helmet } from "react-helmet-async";

const floraImages = [
  {
    image: Brown_capped_pygmy_woodpecker,
    name: "Brown-capped pygmy woodpecker",
  },
  {
    image: Chestnut_backed_scimitar_babbler,
    name: "Chestnut_backed_scimitar_babbler",
  },
  { image: Crimson_backed_sunbird, name: "Crimson-backed sunbird" },
  { image: Great_hornbill, name: "Great_hornbill" },
  { image: Holly_blue, name: "Holly_blue" },
  { image: Nilgiri_lycatcher, name: "Nilgiri flycatcher" },
  { image: Plum_headed_parakeet, name: "Plum-headed parakeet" },
  { image: Spotted_owlet, name: "Spotted_owlet" },
  { image: White_cheeked_barbet, name: "White-cheeked barbet" },
  {
    image: Myophonus_horsefeildii,
    name: "Myophonus_horsefeildii (Malabar_whistling_thrush)",
  },
  { image: Otus_sunia, name: "Otus_sunia" },
  { image: Sholicola_major, name: "Sholicola_major" },
  { image: Pseudocoladenia_dan, name: "Pseudocoladenia_dan" },
  { image: Udara_akasa, name: "Udara_akasa" },
];
import "./Flora.css";

const Flora = () => {
  return (
    <div className="floraContainer">
      <Helmet>
        <title>
          Plantation Resort in Munnar | Makayiram Plantation Retreat
        </title>
        <meta
          name="description"
          content="Experience luxury and tranquility at plantation resort in munnar. Enjoy stunning views, ultimate comfort, and birdwatching. Book your stay now."
        />
        <meta name="keywords" content="Plantation Resort in Munnar" />
        <meta
          name="title"
          content="Best luxury Resort in Munnar | Makayiram plantation retreat"
        />
        <link rel="canonical" href="https://makayiram.com/flora&fauna" />
        <meta
          property="og:title"
          content="Best luxury Resort in Munnar | Makayiram plantation retreat "
        />
        <meta
          property="og:description"
          content="Experience opulent tranquility at the best luxury resort in Munnar. Immerse yourself in breathtaking views and unparalleled comfort .Book your stay now!"
        />
      </Helmet>
      <div>
        <h2 className="text-4xl font-bold my-5">Life at the plantation resort</h2>
        <p>
          Staying at a plantation resort can be an incredibly refreshing and
          rejuvenating experience. Surrounded by lush greenery the rhythmic
          symphony of chirping exotic birds, and a kaleidoscope of butterflies,
          each sight is more breathtaking than the last. Whether you are
          enjoying leisurely strolls through the sprawling gardens or savoring
          organic and healthy delicacies bursting with flavors, every experience
          is a testament to the rich heritage and hospitality ingrained in the
          plantation's ethos. As the golden sun dips below the horizon, painting
          the sky with hues of orange, find solace in the embrace of the serene
          surroundings, leaving you rejuvenated and inspired for the adventures
          that lie ahead at one of the best plantation resorts in Munnar.
        </p>
      </div>
      <h1 className="hidden">flora & fauna</h1>
      {/* <Banner head="Makayiram – Flora &amp; Fauna" image={floraBanner} tagline="" /> */}
      <h3 className="headFlora text-3xl">BIRDS &amp; BUTTERFLIES</h3>
      <div className="floraImagesAndDescription">
        <div className="birdsButterflyImages">
          <div className="imageName">Ideopsis vulgaris (Blue glassy tiger)</div>
        </div>
        <p className="aboutBirdsAndButterflies">
          Embark on a journey of discovery as you delve into the captivating
          world of winged wonders during your stay at Makayiram Retreat. Immerse
          yourself in the delicate dance of 60+ species of birds and 30+ species
          of butterflies as they add a touch of magic to the natural tapestry
          surrounding you. The symphony of their flight and the kaleidoscope of
          colors they bring will undoubtedly leave an indelible mark on your
          heart. Embrace the opportunity to connect with these magnificent
          creatures, and may your stay be filled with the magic of their
          presence.
        </p>
      </div>
      <div className="imageGalleryFlora">
        {floraImages.map((image, index) => {
          return (
            <div
              key={index}
              className="image bgImg"
              style={{ backgroundImage: `url(${image.image})` }}
            >
              <h4 className="imageName">{image.name.replaceAll("_", " ")}</h4>
            </div>
          );
        })}
      </div>
      <div className="Courtesy">Courtesy – Dr. V Krishnakumar Prayar</div>
      <h2 className="headFlora">Tips for Nature Exploration</h2>
      <div className="floraImagesAndDescription">
        <div className="aboutBirdsAndButterflies">
          <h3 className="subHeadFlora">Trail Walks:</h3>
          <p className="description">
            Join guided trail walks to uncover the best birding and butterfly
            hotspots within the property. Our expert guides can offer insights
            into the behavior and ecology of these avians and insects.
          </p>
          <h3 className="subHeadFlora">Binoculars and Cameras:</h3>
          <p className="description">
            Equip yourself with binoculars and cameras to capture the fleeting
            moments of birds in flight and butterflies alighting on blossoms.
            Capturing your observations allows you to revisit the magic long
            after your stay at Makayiram Retreat.
          </p>
          <h3 className="subHeadFlora"> Respectful Observation:</h3>
          <p className="description">
            Approach birds and butterflies with respect and maintain a gentle
            distance to avoid causing distress. Let the natural rhythm of their
            lives unfold without disturbance.
          </p>
        </div>
        <div className="birdsButterflyImages natureImages "></div>
      </div>
    </div>
  );
};

export default Flora;
