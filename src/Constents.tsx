import {
  capricornFirstFloorImages,
  capricornGroundFloorImages,
  capricornThumb,
  capricorunFF_Icon,
  capricorunGF_Icon,
  cardamom,
  cycling,
  geminiCImages,
  geminiImages,
  geminiRoom_Icon,
  geminiSuit_Icon,
  geminiThumb,
  indoor,
  orionImages,
  orionRoom1Icon,
  orionRoom2Icon,
  orionRoom3Icon,
  orionRoom4Icon,
  orionRoom5Icon,
  orionSuit_2Images,
  orionSuit_3Images,
  orionSuit_4Images,
  orionSuit_5Images,
  orionThumb,
  taurusImages,
  taurusThumb,
  taurus_Icon,
  teaWalk,
  walkImg,
} from "./Images";
import trasureHuntImage from "../src/assets/activities/trasure.png";
import ShinrinImg from "../src/assets/activities/Shinrin.jpg";
export const apiBaseURL = "https://makayiram.com/backend/";
// export const apiBaseURL = "http://localhost/nandu/"
export const newRoomDetails = [
  {
    category: "DoubleRooms",
    rooms: [
      {
        name: "Gemini Room",
        Categorisation: "Room with balcony and plantation trail view",
        descriptionOld:
          "Bath-attached room with a balcony with plantation trail view",
        description:
          "A double luxury room epitomizing comfort and elegance for two guests. Upon entering, you're greeted by a spacious layout adorned with refined furnishings and upscale amenities and two plush single beds, each inviting you to sink into relaxation. The room features sophisticated décor, with attention to detail evident in every corner is also a groovy trail view room.",
        detailedDescription:
          "When it’s time to unwind, there’s a dream place in here to find. Case in point: our groovy trail view room that boasts of the best in ambience and luxury. Here, you could experience hitherto unexplored sights and sounds of nature that leave a lasting impression on your mind, enough to sway you to visit us more often.",
        occupancy: 2,
        maxOccupancy: 3,
        Tariff: "12,750.00 (2 pax/exclusive of taxes)",
        // Tariff: "7990.00 (2 pax/exclusive of taxes)",
        photos: geminiCImages,
        icon: geminiRoom_Icon,
      },
    ],
    thumbline: geminiThumb,
  },
  {
    category: "apartments",
    rooms: [
      {
        name: "Capricorn – Ground Floor",
        Categorisation:
          "Apartment with two bedrooms, garden and plantation view",
        descriptionOld:
          "Ground floor of a two-floor apartment with two bath-attached bedrooms, living room and sit-out with garden & plantation view",
        description:
          "Ground floor of a two-floor apartment with a living room and sit-out that offers a nice view of the garden and the plantation.",
        detailedDescription:
          "Epitomizing upscale living, blending exquisite design with unparalleled comfort. Upon entering the ground floor, you're greeted by a spacious and elegantly appointed living area, and a sit-out that opens to a gorgeous view of the garden and plantation. As expected of the best premium family resorts in Munnar, the living room is furnished with plush sofas and designer accents, creating a welcoming environment for relaxation or entertaining guests.",
        occupancy: 4,
        maxOccupancy: 6,
        Tariff: "23,900.00 (4 pax/exclusive of taxes)",
        // Tariff: "11990.00 (4 pax/exclusive of taxes)",
        photos: capricornGroundFloorImages,
        icon: capricorunGF_Icon,
      },
      {
        name: "Capricorn – First Floor",
        Categorisation:
          "Apartment with two bedrooms, garden and plantation view",
        description:
          "The first floor provides the same comforts and facilities with the  balcony providing a view of the garden and the entire plantation. All of these make us one of the best budget-friendly resorts in Munnar.",
        detailedDescription:
          "Adjacent to the expansive organic plantation draping the woods of Western Ghats, our fully-equipped two-storied apartment offers a bird’s-eye view of the property in all its glory. Here, you could give ear to the soothing wakeup call of our resident singer: Malabar Whistling Thrush.",
        occupancy: 4,
        maxOccupancy: 6,
        Tariff: "23,900.00 (4 pax/exclusive of taxes)",
        // Tariff: "11990.00 (4 pax/exclusive of taxes)",
        photos: capricornFirstFloorImages,
        icon: capricorunFF_Icon,
      },
    ],
    thumbline: capricornThumb,
  },
  {
    category: "Suites",
    rooms: [
      {
        name: "GeminiSuite",
        Categorisation: "Suite with plantation trail view",
        descriptionOld:
          "Bath-attached room with a living room and balcony with plantation trail view",
        description:
          "Suite room with a living room and balcony that presents an amazing view of the plantation trail.",
        detailedDescription:
          "When you are surrounded by green, nothing should come b’tween. And that’s precisely why our trail view suite remains the pick of the lot.Located on the fringes of our trail to wilderness, you could sneak a peek at nature’s intimate moods here, eavesdropping on its many secrets!",
        occupancy: 2,
        maxOccupancy: 4,
        Tariff: "14,700.00 (2 pax/exclusive of taxes)",
        // Tariff: "9,990 (2 pax/exclusive of taxes)",
        photos: geminiImages,
        icon: geminiSuit_Icon,
      },
      {
        name: "Orion-01 ",
        Categorisation: "Suite with garden view",
        descriptionOld:
          "Bath attached room with a sit-out & patio with garden view",
        description:
          "Suite room with a sit-out & patio that offers a gorgeous garden view.",
        detailedDescription:
          "Stepping into a luxury suite is like entering a sanctuary of opulence and comfort. As you cross the threshold to one of the best luxury resorts in Munnar, you're greeted by tasteful décor, plush furnishings, and an ambience of tranquillity. The room exudes sophistication, with high-end amenities like a Queen-sized bed with a pillow-top mattress.Windows offer panoramic views of serene natural and a gorgeous garden, while allowing you to bask in the beauty of your surroundings. With personalized service at your fingertips, whether it's a concierge to attend to your every need or a gourmet meal served in-room, every moment in a luxury room is an indulgent escape from the ordinary. (inter-connecting door)",
        occupancy: 2,
        maxOccupancy: 4,
        Tariff: "11,750.00 (2 pax/exclusive of taxes)",
        // Tariff: "8990.00 (2 pax/exclusive of taxes)",
        photos: orionImages,
        icon: orionRoom1Icon,
      },
      {
        name: "Orion–02",
        Categorisation: "Suite with garden view",
        descriptionOld:
          "Bath-attached room with a sit-out and patio with garden view",
        description:
          "Suite room with a sit-out & patio that offers a gorgeous garden view.",
        detailedDescription:
          "The aesthetically-designed suite rooms of this pentagonal complex are surrounded by tall trees as far as eyes could see. Look yonder and you will find huge sweet pots dangling, dripping the golden elixir like there’s no tomorrow. Wake up and smell the honey, honey!",
        occupancy: 2,
        maxOccupancy: 4,
        Tariff: "11,750.00 (2 pax/exclusive of taxes)",
        // Tariff: "8990.00 (2 pax/exclusive of taxes)",
        photos: orionSuit_2Images, //change
        icon: orionRoom2Icon,
      },
      {
        name: "Orion–03",
        Categorisation: "Suite with plantation view",
        descriptionOld:
          "Bath-attached room with a sit-out and patio with green plantation view",
        description:
          "Suite room with a sit-out & patio that offers a gorgeous garden view.",
        detailedDescription:
          "The aesthetically-designed suite rooms of this pentagonal complex are surrounded by tall trees as far as eyes could see. Look yonder and you will find huge sweet pots dangling, dripping the golden elixir like there’s no tomorrow. Wake up and smell the honey, honey!",
        occupancy: 2,
        maxOccupancy: 4,
        Tariff: "11,750.00 (2 pax/exclusive of taxes)",
        photos: orionSuit_3Images, //change
        icon: orionRoom3Icon,
      },
      {
        name: "Orion–04",
        Categorisation: "Suite with plantation view",
        descriptionOld:
          "Bath-attached room with a sit-out and patio with green  plantation view",
        description:
          "Suite room with a sit-out & patio that offers a gorgeous garden view.",
        detailedDescription:
          "The aesthetically-designed suite rooms of this pentagonal complex are surrounded by tall trees as far as eyes could see. Look yonder and you will find huge sweet pots dangling, dripping the golden elixir like there’s no tomorrow. Wake up and smell the honey, honey!",
        occupancy: 2,
        maxOccupancy: 4,
        Tariff: "11,750.00 (2 pax/exclusive of taxes)",
        photos: orionSuit_4Images,
        icon: orionRoom4Icon,
      },
      {
        name: "Orion–05",
        Categorisation: "Suite with plantation view",
        descriptionOld:
          "Bath-attached room with a sit-out and patio with green  plantation view",
        description:
          "Suite room with a sit-out & patio that offers a gorgeous garden view.",
        detailedDescription:
          "The aesthetically-designed suite rooms of this pentagonal complex are surrounded by tall trees as far as eyes could see. Look yonder and you will find huge sweet pots dangling, dripping the golden elixir like there’s no tomorrow. Wake up and smell the honey, honey!",
        occupancy: 2,
        maxOccupancy: 4,
        Tariff: "11,750.00 (2 pax/exclusive of taxes)",
        photos: orionSuit_5Images,
        icon: orionRoom5Icon,
      },
    ],
    thumbline: orionThumb,
  },

  {
    category: "cottages",
    rooms: [
      {
        name: "Taurus",
        Categorisation:
          "Plantation cottage with two bedrooms,garden and plantation view",
        descriptionOld:
          "Stand-alone cottage with two bath-attached bedrooms, along with living and dining rooms with plantation & garden view",
        description:
          "Stand-alone cottage with two bedrooms, along with living and dining rooms presenting a splendid view of the plantation and the garden.",
        detailedDescription:
          "The luxury cottage reminiscent of a plantation bungalow offers a blend of rustic charm and refined comfort in a picturesque setting. Inside, you'll find a cosy living area with scenic views and charming bedrooms. Outside, enjoy private gardens, patios, or verandas, along with amenities for ultimate relaxation and tranquility, making it one of the best cottages in Munnar for family getaways.",
        occupancy: 5,
        maxOccupancy: 6,
        Tariff: "27,600.00 (5 pax/exclusive of taxes)",
        // Tariff: "15,990.00 (5 pax/exclusive of taxes)",
        photos: taurusImages,
        icon: taurus_Icon,
      },
    ],
    thumbline: taurusThumb,
  },

  // {
  //     category: "apartments", rooms: []
  // }
];
export const API = (
  url: string,
  method: string,
  data: any = null,
  headers = {}
): any => {
  return new Promise((resolve, reject) => {
    fetch(`${apiBaseURL}${url}`, {
      method: method,
      body: data,
      headers: headers,
    })
      .then((response: any) => {
        if (response.status != 200) {
          if (response.status == 401) {
            alert("Session expired, please login");
            window.location.href = "./login.html";
          }

          reject({ status: response.status, statusText: response.statusText });
          return false;
        }
        return response.text();
      })
      .then((data: any) => {
        resolve(JSON.parse(data));
        // alert(JSON.parse(data)[0]);
        // location.reload();
      });
  });
};
// <NavHashLink scroll={(el) => scrollWithOffset(el)} style={{ order: 3 }} className="menuItem" smooth to="/flora&fauna">  <div className="menuItem flora">Flora & Fauna</div>
// </NavHashLink>
export const menuDetails = [
  { menu: "Home", to: "/", order: 1 },
  { menu: "About", to: "/About", order: 2 },
  { menu: "Rooms", to: "#", order: 3 },
  { menu: "Activities", to: "/activities", order: 4 },
  { menu: "Blogs", to: "/Blogs", order: 5 },
  { menu: "Flora & Fauna", to: "/flora&fauna", order: 6 },

  // { menu: "Flora & Fauna", to: "/activities", order: 4 },
  // { menu: "Contact", to: "/#contact", order: 5 },
  {
    menu: "Book now",
    to: "bookNow",
    externalLink:
      "https://bookings.resavenue.com/resBooking/availsearch?regCode=VXIA1026",
    order: 7,
  },
  // { menu: "Book now", to: "bookNow", externalLink: "https://bookings.resavenue.com/resBooking/rooms?regCode=VXIA1026&roomSearchId=211c3a15b7e54424a665f96dd648aa7d", order: 7 }
  // { menu: "logo", to: "", img: "logo.jpg" },
  // { menu: "Rates & Reservation", to: "" },
];

export const menuDetailsFooter = [
  { menu: "Home", to: "/", order: 1 },
  { menu: "About", to: "/About", order: 2 },
  // { menu: "Rooms", to: "", order: 3 },
  { menu: "Activities", to: "/activities", order: 4 },
  { menu: "Blogs", to: "/Blogs", order: 5 },
  { menu: "Flora & Fauna", to: "/flora&fauna", order: 6 },

  // { menu: "Flora & Fauna", to: "/activities", order: 4 },
  // { menu: "Contact", to: "/#contact", order: 5 },
  {
    menu: "Book now",
    to: "bookNow",
    externalLink:
      "https://bookings.resavenue.com/resBooking/availsearch?regCode=VXIA1026",
    order: 7,
  },
  // { menu: "Book now", to: "bookNow", externalLink: "https://bookings.resavenue.com/resBooking/rooms?regCode=VXIA1026&roomSearchId=211c3a15b7e54424a665f96dd648aa7d", order: 7 }
  // { menu: "logo", to: "", img: "logo.jpg" },
  // { menu: "Rates & Reservation", to: "" },
];


export const roomsDropdown = [
  {
    text: (
      <span className="flex items-center text-xl font-semibold">
        Twin Rooms 
      </span>
    ),
    path: "https://makayiram.com/RoomDetails/DoubleRooms",
  },
  {
    text: (
      <span className="flex items-center text-xl font-semibold">
        Aparments
      </span>
    ),
    path: "https://makayiram.com/RoomDetails/apartments",
  }, 
  {
    text: (
      <span className="flex items-center text-xl font-semibold">
        Suites 
      </span>
    ),
    path: "https://makayiram.com/RoomDetails/Suites",
  },
  {
    text: (
      <span className="flex items-center text-xl font-semibold">
        Cottages 
      </span>
    ),
    path: "https://makayiram.com/RoomDetails/cottages",
  },];

export const aboutMakayiram = (
  <>
    Located just 6 kms from Munnar town in a 50-acre organic cardamom
    plantation,{" "}
    <a className="underline text-black/70 font-semibold" href="/">
      Makayiram retreat  
    </a>{" "}
      is a tranquil abode in the lap of wilderness – flanked by the towering
    Chokramudi peak and the Pallivasal Tea Estate – yet close to the sightseeing
    spots. Makayiram Retreat is the perfect getaway that offers the holiday of a
    lifetime for bravehearts and the weary at heart. The retreat offers a choice
    of ten accommodation units including individual cottages, suite rooms,
    interconnecting suites and family apartments featuring contemporary designs
    steeped in bespoke luxury while not losing their plantation roots. The
    retreat, cocooned in an organic cardamom plantation is a tropical paradise
    home to 60+ species of birds and 30+ species of butterflies adding a touch
    of magic to the surrounding natural tapestry. The orchestra of bird songs,
    the symphony of their flight and the kaleidoscope of colours makes for an
    ethereal stay, while well-appointed contemporary rooms and suites keep the
    traveller pampered. Guided plantation tour and trail walks give a sneak peek
    into organic farming practices and how nature thrives in harmony. Jeep
    Safaris, Evening Barbeques, Shinrin Yoku, culinary lessons with the chefs
    all add to the experience. Guests can also step out of the resort and access
    the ubiquitous Pallivasal Tea estates to experience the magic of the tea
    estates Munnar is famous for. Orion’s Belt, the multicuisine restaurant
    serves an eclectic selection of hearty freshly prepared South Indian, North
    Indian, continental and Mediterranean dishes which incorporate local fresh
    produce.
  </>
);

type activitiesProps = {
  activity: string;
  description: string;
  image: string;
  imgAlt: string;
}[];
export const activities: activitiesProps = [
  {
    activity: "Trail Walks",
    description:
      "Exploring the hiking trails of Munnar offers a unique adventure for expert adventurers and beginners alike. We offer trail walks into the Pothamedu forest in Munnar, a gem among Kerala’s tourist attractions, which boasts some of the best hiking trails that cater to all levels of hikers. Apart from that you can venture to some of the top Munnar trekking spots, the <a href='https://en.wikipedia.org/wiki/Anamudi' target='_blank'>Anamudi</a> Peak stands out as the highest point in South India, providing breathtaking views and a rewarding challenge for avid trekkers. Beginners can enjoy gentler hikes in Munnar that dont demand too much effort. Luxury hiking tours in Munnar provide a blend of adventure and comfort, showcasing the best trekking places while ensuring a comfortable experience. Overall, trekking in Kerala, especially the hikes in Munnar, promises unforgettable memories amidst the lush greenery of Munnar's hills.",
    image: walkImg,
    imgAlt: "Family Resort in Munnar",
  },
  {
    activity: "Organic Cardamom Plantation Tour",
    description: `Explore the captivating "Organic Cardamom Plantation Tour" in the enchanting spice tree Munnar, a gem of Kerala tourism. Delve into the heart of organic farming as you wander through lush Munnar farms, where the air is infused with the rich scent of cardamom. Witness the dedication of workers on organic farms who meticulously cultivate the finest cardamom pods, ensuring sustainability and environmental harmony. These farms are celebrated as some of the best organic farms, offering a glimpse into the meticulous processes that distinguish organic farming from conventional methods. The relevance of organic farming is paramount here, promoting ecological balance and healthier produce. Experience the essence of Kerala's spice heritage on a Munnar cardamom plantation tour, where tradition meets innovation amidst the breathtaking landscapes of this verdant paradise.`,
    image: cardamom,
    imgAlt: "best plantation resort in munnar",
  },
  {
    activity: "Tea Estate Tour",
    description: `Embark on a mesmerizing "Tea Estate Tour" in Munnar, one of the best tourist places in Kerala. Renowned for its stunning landscapes, Munnar is a jewel among Kerala tourist places and a must-visit among Kerala visiting places. As you explore the tea plantations in Munnar, you'll be captivated by the rolling hills carpeted with lush green tea gardens in Kerala. These tea plantations are an integral part of India’s tea heritage, offering a unique glimpse into the meticulous process of tea cultivation. The tea plantation tour in Munnar allows visitors to witness the serene beauty of Kerala tea plantations Munnar is famous for. Discover the best tea plantation in Munnar, where the scenic beauty and the rich aroma of tea leaves create an unforgettable experience. Visiting these plantations in Munnar not only provides a visual treat but also an opportunity to learn about the history and culture of tea production in Kerala.`,
    image: teaWalk,
    imgAlt: "Family Resort in Munnar",
  },
  {
    activity: "Cycling",
    description: `Set out on exhilarating cycling trips for singles, designed to offer an unforgettable adventure. Bike tours and cycling tours provide a unique way to explore picturesque landscapes and hidden gems. Bicycle tours cater to enthusiasts seeking a blend of excitement and scenic beauty. Adventure cycling tours in places like Munnar promise a thrilling journey through lush hills and serene trails. A cycling holiday here means navigating some of the best bike trails, tailored for both beginners and seasoned cyclists. Explore cycling in its purest form, with cycling tour packages that include guided routes, comfortable accommodations, and local insights. The best bike trails are chosen for their scenic vistas and challenging terrains, enhancing the overall cycling experience. Whether it's a solo adventure or a group expedition, these cycling trips ensure an invigorating blend of nature, fitness, and discovery, making every pedal stroke a memorable part of your adventure in Munnar.`,
    image: cycling,
    imgAlt: "Family Resort in Munnar",
  },
  {
    activity: "Indoor Games",
    description:
      "If lazing around is how you choose to spend your day, then we’ve got you covered! Be it an exciting round of Carrom, or an invigorating game of Chess, we have an array of indoor games that can help you idle the time away.",
    image: indoor,
    imgAlt: "Family Resort in Munnar",
  },
  {
    activity: "Shinrin Yoku",
    description: `<a href='https://makayiram.com/Blogs/shinrin-yoku-immersing-oneself-in-the-spirit-of-nature_63' target='_blank'>Shinrin Yoku </a>, or forest bathing, is a therapeutic practice from Japan that involves immersing oneself in a forest environment to enhance mental and physical well-being. Unlike typical outdoor activities, it emphasizes a meditative, slow-paced approach, engaging all senses to absorb the forest's sights, sounds, smells, and textures. This deep sensory engagement fosters a profound connection with nature, promoting peace and tranquility.Key elements of Shinrin Yoku include mindfulness, a leisurely pace, and full sensory engagement. Participants are encouraged to be present and mindful, enhancing the meditative experience by listening to rustling leaves, feeling tree bark, smelling forest air, and observing light and shadow.Studies show that Shinrin Yoku lowers cortisol levels, reducing stress and anxiety, and improving mood. Exposure to phytoncides, natural chemicals from trees, can boost the immune system. Regular practice is linked to lower blood pressure, heart rate, and better sleep quality.India, with its diverse landscapes like the Western Ghats and Himalayan foothills, offers excellent forest bathing spots. Researching suitable locations, optimal visiting times, and guided sessions can maximize the benefits, creating a rejuvenating travel experience.`,
    image: ShinrinImg,
    imgAlt: "best plantation resort in munnar",
  },
  {
    activity: "Treasure Hunt",
    description:
      "Gear up for an exhilarating and immersive treasure hunt experience, designed to awaken your sense of curiosity and teamwork. Feel the thrill of discovery but also the joy of collaboration, creating asting        memories in a unique and engaging way. Get ready to uncover treasures, solve riddles, and forge bonds that will last a lifetime... not to mention win the fantastic prize at the end of it all!",
    image: trasureHuntImage,
    imgAlt: "Family Resort in Munnar",
  },
];

export const aboutHomePageContent =
  "Life is either a daring adventure or nothing at all.A tranquil abode in the lap of wilderness – flanked by the towering Chokramudi peak in the east – Makayiram Retreat is the perfect getaway spot for bravehearts and weary at heart that offers the holiday of a lifetime. Located on the outskirts of Pothamedu – a quaint village dotted with breathtaking views of Munnar valley – Makayiram Retreat takes ‘harmony with nature’ to new heights; creating a unique and unparalleled sensory experience for every travelling soul which makes it stand out as the best luxury resort in Munnar.";
export const scrollWithOffset = (el: any) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};
