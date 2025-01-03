import { useNavigate, useParams } from "react-router-dom";
import "./RoomDetails.css";
import { useEffect, useState } from "react";
import { newRoomDetails } from "../../Constents";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  FaArrowCircleLeft,
  FaArrowDown,
  FaArrowUp,
  FaBaby,
  FaChild,
  FaRupeeSign,
  FaUsers,
} from "react-icons/fa";

import { Helmet } from "react-helmet-async"; 

type SingleRoomDetailsProps = {
  // images: string[]
  // settings: any,
  // name: string,
  // description: string,
  rowReverse?: boolean;
  mapkey: any;
  room: {
    name: string;
    Categorisation: string;
    description: string;
    occupancy: number;
    Tariff: string;
    photos: any;
    icon: string;
    detailedDescription: string;
  };
};
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dotsClass: "slick-dots slick-thumb",
};
export const CommonCharges = () => {
  return (
    <div className="aminity">
      <div className="aminityItem">
        <div className="icon">
          {" "}
          <FaBaby /> &nbsp; {`Toddler (age < 6)  :`}
        </div>{" "}
        <b>
          <div className="text">Free</div>
        </b>
      </div>
      <div className="aminityItem">
        <div className="icon">
          {" "}
          <FaChild />
          &nbsp; {`Child (6 to 12)  :`}
        </div>{" "}
        <b>
          <div className="text">1500</div>
        </b>
      </div>
      <div className="aminityItem">
        <div className="icon">
          {" "}
          <FaUsers /> &nbsp; {`Adult  :`}
        </div>{" "}
        <b>
          <div className="text">2500</div>
        </b>
      </div>
    </div>
  );
};
function Aminity({ occupancy, maxOccupancy, Tariff }: any) {
  return (
    <div className="aminity">
      <div className="aminityItem">
        <div className="icon">
          {" "}
          <FaUsers /> &nbsp; Standard Occupancy :
        </div>{" "}
        <b>
          <div className="text">{`${occupancy} pax`}</div>
        </b>
      </div>
      <div className="aminityItem">
        <div className="icon">
          {" "}
          <FaUsers /> &nbsp; Maximum Occupancy :
        </div>
        <b>
          {" "}
          <div className="text">{`${maxOccupancy} pax`}</div>{" "}
        </b>
      </div>

      {/* <div className="aminityItem">
      <div className="icon"> <FaCalendarCheck /></div> <div className="text">Check in : 2:00 PM</div>
    </div>
    <div className="aminityItem">
      <div className="icon"> <FaCalendarTimes /></div> <div className="text">Check out : 11:00 AM</div>
    </div> */}
      <div className="aminityItem">
        <div className="icon">
          {" "}
          <FaRupeeSign />
        </div>{" "}
        <div className="text">{`${Tariff}`}</div>
      </div>
    </div>
  );
}

function SingleRoomDetails(props: SingleRoomDetailsProps) {
  const {
    name,
    description,
    photos,
    icon,
    Categorisation,
    detailedDescription,
  } = props.room;
  const [isPolicyHidden, togglePolicy] = useState(false);

  return (
    <div
      key={props.mapkey}
      className={
        props.rowReverse
          ? "roomDetailsContainer rowReverse"
          : "roomDetailsContainer"
      }
    >
      <div className="imageGallery">
        <Slider {...settings}>
          {photos.map((image: any, index: any) => {
            return (
              <div key={index} className="rounded-xl">
                {/* <div
                  className="galleryItem"
                  style={{
                    backgroundImage: `url(${image?.img})`,
                  }}
                ></div> */}
                <img
                  src={image?.img}
                  alt={image.alt}
                  className="h-full min-h-[300px] lg:min-h-[400px] lg:max-h-[400px] object-cover w-full rounded-xl"
                />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="roomDetails">
        <div className="roomName">
          <h2> {name}</h2>
          <div className="roomIcon">
            <img src={icon} height={75} width={75} />
          </div>
        </div>
        <p className="description">{description}</p>
        <div className="categorisation">{Categorisation} ✨</div>
        <Aminity {...props.room}></Aminity>
        <div className="categorisation">Extra Pax rates</div>
        <CommonCharges />
        <div className="checkAvailability">
          <p className="checkAvailabilityRoomDetails checkAvailabilityInline">
            {" "}
            {detailedDescription}
          </p>
          {/* <CheckAvailability cls="checkAvailabilityRoomDetails checkAvailabilityInline" /> */}
        </div>
        <div className="bathroom">
          All rooms have en-suite facilities including bathrooms.
        </div>
        <div
          className="cancellation"
          onClick={() => togglePolicy((previous) => !previous)}
        >
          <div>Cancellation Policy</div>
          <div className="icon">
            {!isPolicyHidden ? <FaArrowDown /> : <FaArrowUp />}
          </div>{" "}
        </div>
        <ul className={!isPolicyHidden ? "list" : "hidden list"}>
          <li> 15 days prior to the arrival date – Full amount refund </li>
          <li>
            {" "}
            72 hrs prior to the arrival date – Refund of 50 % of the booking
            amount
          </li>
          <li>
            {" "}
            48 Hrs prior to the arrival date – Refund of 25 % of the booking
            amount
          </li>
          <li>
            {" "}
            Less than 48 hrs prior to the arrival date – No amount refund
          </li>
        </ul>
      </div>
    </div>
  );
}

export const RoomDetails = () => {
  const { roomCategory } = useParams();
  const filteredRoomDetails = newRoomDetails.filter(
    (room) => room.category == roomCategory
  )[0];
  // const filteredSubRoomDetails = subRoomDetails.filter(room => room.key == roomName)[0];
  // const filteredRoomDetails = roomDetails.filter(room => room.name == roomName)[0];
  // const filteredSubRoomDetails = subRoomDetails.filter(room => room.key == roomName)[0];
  const { rooms } = filteredRoomDetails;
  // let subRoomName, subRoomDescription, subRoomImages;
  // const { name: subRoomName, description: subRoomDescription, images: subRoomImages } = filteredSubRoomDetails;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>
          Premium Family Resorts in Munnar | Makayiram Plantation Retreats
        </title>
        <meta
          name="description"
          content="Discover unparalleled luxury at Makayiram Retreat, the best premium family resort in Munnar. Enjoy impeccable service and breathtaking views.!"
        />
        <meta name="keywords" content="Premium Family Resorts in Munnar" />
        <meta
          name="title"
          content="Best luxury Resort in Munnar | Makayiram plantation retreat"
        />
        <link
          rel="canonical"
          href={`https://makayiram.com/RoomDetails/${roomCategory}`}
        />
        <meta
          property="og:title"
          content="Best luxury Resort in Munnar | Makayiram plantation retreat "
        />
        <meta
          property="og:description"
          content="Experience opulent tranquility at the best luxury resort in Munnar. Immerse yourself in breathtaking views and unparalleled comfort .Book your stay now!"
        />
      </Helmet>
      <h1 className="hidden">rooms</h1>
      <div className="goBack" onClick={() => navigate(-1)}>
        <FaArrowCircleLeft />{" "}
      </div>
      <div className="roomDetailsParent">
        {/* <div className="icon_container" style={{ backgroundImage: `url(${thumbline})` }}></div> */}
        {rooms.map((room, key) => (
          <SingleRoomDetails
            room={room}
            mapkey={room}
            rowReverse={key % 2 != 0}
          />
        ))}

        {/* {filteredSubRoomDetails ? <SingleRoomDetails name={filteredSubRoomDetails?.name} description={filteredSubRoomDetails.description} rowReverse={true} images={filteredSubRoomDetails.images} settings={settings} /> : <></>} */}
      </div>
    </>
  );
};
