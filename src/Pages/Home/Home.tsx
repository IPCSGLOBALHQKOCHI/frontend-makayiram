import "./Home.css";
import { treakingImg } from "../../Images";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FaAngleDown,
  FaEnvelope,
  FaMobileAlt,
  FaPhoneAlt,
  FaStar,
  FaWhatsapp,
} from "react-icons/fa";
import {
  API,
  aboutHomePageContent,
  apiBaseURL,
  newRoomDetails,
} from "../../Constents";
import { useNavigate } from "react-router-dom";
import { ReviewSlider, SliderSimple } from "../../Components/Slider/Slider";
import ProductSlider from "../../Components/Slider/ProductSlider/ProductSlider";
import { SocialMediaMenu } from "../../Components/Menu/Menu";
import { Helmet } from "react-helmet-async";

// import { Map } from "./Map.js"
type CheckAvailabilityProps = {
  cls?: String;
};
export function formatDate(dateObj: Date) {
  return dateObj.toLocaleDateString("en-GB", {
    // you can use undefined as first argument
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  // return `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`
}

export function CheckAvailability({ cls = "" }: CheckAvailabilityProps) {
  const [startDate, setStartDate] = useState(new Date());
  // const [adult, setAdult] = useState(1)
  // const adultRef = useRef(1);
  // const adultRef = useRef<HTMLInputElement>();

  const tomorrow = new Date(startDate);
  tomorrow.setDate(startDate.getDate() + 1);
  const [endDate, setEndDate] = useState(tomorrow);
  const handleStartDate = (date: Date) => {
    setStartDate(date);
    if (endDate.getTime() <= date.getTime()) {
      const newEndDate = new Date(date);
      newEndDate.setDate(date.getDate() + 1);
      setEndDate(newEndDate);
    }
  };
  const getMonthName = (date: Date) => {
    return date.toLocaleString("default", { month: "long" });
  };
  return (
    <>
      <section className={`checkAvailabilityContainer ${cls}`}>
        <form
          name="resBooking"
          className="form"
          id="resBooking"
          action="https://bookings.resavenue.com/resBooking4/searchRooms"
          method="POST"
          target="_blank"
        >
          <div className="box">
            <div className="checkIn">
              <div className="text">Check -in</div>
              <div className="value">
                {" "}
                <div className="date">{startDate.getDate()}</div>
                <div className="month">{getMonthName(startDate)}</div>
                <input type="hidden" name="curr" value="INR" />
                <input type="hidden" name="regCode" value="VXIA1026" />
                <DatePicker
                  customInput={<FaAngleDown className="datepickerOpener" />}
                  minDate={new Date()}
                  selected={startDate}
                  onChange={(date: any) => handleStartDate(date)}
                />
                {/* 03/11/2023 */}
                {/* <input type="text" id="arr_date" name="arr_date" value={startDate.getDate() + "/" + startDate.getMonth() + "/" + startDate.getFullYear()} /> */}
                <input
                  type="hidden"
                  id="arr_date"
                  name="arr_date"
                  placeholder="Check-In"
                  className="calender"
                  value={formatDate(startDate)}
                  autoComplete="off"
                />
                <input
                  type="hidden"
                  id="dep_date"
                  name="dep_date"
                  placeholder="Check-Out"
                  className="calender"
                  value={formatDate(endDate)}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="checkOut">
              <div className="text">Check-Out</div>
              <div className="value">
                {" "}
                <div className="date">{endDate.getDate()}</div>
                <div className="month">{getMonthName(endDate)}</div>
                <DatePicker
                  name="dep_date"
                  customInput={<FaAngleDown className="datepickerOpener" />}
                  minDate={tomorrow}
                  selected={endDate}
                  onChange={(date: any) => setEndDate(date)}
                />
                {/* <input type="text" id="dep_date" name="dep_date" value={endDate.getDate() + "/" + endDate.getMonth() + "/" + endDate.getFullYear()} /> */}
              </div>
            </div>
            {/* <div className="adult">
                    <div className="text">Adult</div>
                    <input className="value" value={adult} type="number" onChange={(event: any) => setAdult(event.target.value)} min={1} max={10} name="" id="" />
                </div> */}
            <div className="checkAvailability">
              {/* <a className="whatsappLink" href={`whatsapp://send?text=I need a stay from ${startDate.getDate()} - ${startDate.getMonth()}- ${startDate.getFullYear()}  to  ${endDate.getDate()} - ${endDate.getMonth()}- ${endDate.getFullYear()} for ${adult}  adults .&phone="${import.meta.env.VITE_MOBILE}"`}> */}
              <button className="checkAvailabilityBtn">BOOK NOW</button>
              {/* </a> */}
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

function Rooms() {
  const navigate = useNavigate();
  return (
    <div className="roomsContainer" id="rooms">
      {newRoomDetails.map((room) => {
        return (
          <div
            className="room"
            style={{
              backgroundImage: `url(${room.thumbline})`,
            }}
            key={room.category}
            onClick={() => {
              navigate(`/RoomDetails/${room.category}`, {
                state: {},
              });
            }}
          >
            {/* to={`/RoomDetails:${room.name}`}> */}
            {/* <div className="roomName">{room.category}</div> */}
          </div>
        );
      })}
    </div>
  );
}

export const TopBar = () => {
  return (
    <div className="topBar">
      <div className="socialMedia">
        <SocialMediaMenu />
      </div>

      <div className="mail">
        <FaEnvelope />
        <div className="text">reservations@makayiram.com</div>
      </div>
      <div className="phone">
        <FaMobileAlt />
        <div className="text">+91 81389 27080</div>
      </div>
      {/* <div className="whatsapp"></div> */}
    </div>
  );
};

export const Home = () => {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    API("review", "GET").then((data: any) => setReviews(data));
  }, []);

  return (
    <>
      <h1 className="text-white hidden">best luxury resort in munnar</h1>

      <Helmet>
        <title>
          Best luxury Resort in Munnar | Makayiram plantation retreat{" "}
        </title>
        <meta
          name="description"
          content="Experience opulent tranquility at the best luxury resort in Munnar. Immerse yourself in breathtaking views and unparalleled comfort .Book your stay now!"
        />
        <meta
          name="keywords"
          content="best luxury resort in munnar,best resort in munnar, best hotels in munnar, best hotels in munnar for family ,best resorts in munnar for family,luxury resorts in munnar,munnar resorts for family,best budget resorts in munnar,best hotels in munnar town,plantation resort in munnar,family resort in munnar, best family hotels in munnar, resorts in munnar for family,family hotels in munnar,munnar resorts for family low price,munnar best resorts for family,5 star resorts in munnar for family,best,budget friendly resorts in munnar,premium family resorts in munnar,affordable resorts in munnar"
        />
        <meta
          name="title"
          content="Best luxury Resort in Munnar | Makayiram plantation retreat"
        />
        <link rel="canonical" href="https://makayiram.com/" />
        <meta
          property="og:title"
          content="Best luxury Resort in Munnar | Makayiram plantation retreat "
        />
        <meta
          property="og:description"
          content="Experience opulent tranquility at the best luxury resort in Munnar. Immerse yourself in breathtaking views and unparalleled comfort .Book your stay now!"
        />
        <meta property="og:image" content="/assets/og.png" />
      </Helmet>

      <SliderSimple />

      <section className="experiencesContainer" id="activities">
        <div className="left">
          <p className="description">{aboutHomePageContent}</p>
          <div className="aboutMoreBtn" onClick={() => navigate("/About")}>
            More
          </div>
        </div>
        <div
          className="right"
          style={{ backgroundImage: `url(${treakingImg})` }}
        ></div>
      </section>
      <Rooms />
      <h2 className="headGallery">Gallery</h2>
      <ProductSlider />
      <section className="testimonialContainer">
        <h2 className="head">Guest's Expressions</h2>
        <ReviewSlider />
      </section>
      <section className="reviewContainer">
        {/* <div className="head">Raving Reviews</div> */}

        <h2 className="head">Google Reviews </h2>
        <div className="reviewsContainer">
          <div id="google-reviews"></div>

          <div className="tripAdvisorReviews">
            {" "}
            <TripAdvisorReview />{" "}
          </div>
        </div>
        <a
          className="googleReviewNav"
          href="https://www.google.com/maps/place/Makayiram+Retreat/@10.0435444,76.9963623,12z/data=!4m25!1m12!4m11!1m3!2m2!1d77.0797897!2d10.0433754!1m6!1m2!1s0x3b07991cef6c8a43:0x236691b85830c9e4!2s20+Acre+-+Munnar+Rd,+Pallivasal,+Kerala+685565!2m2!1d77.0787642!2d10.0435546!3m11!1s0x3b07991cef6c8a43:0x236691b85830c9e4!5m3!1s2024-02-13!4m1!1i2!8m2!3d10.0435546!4d77.0787642!9m1!1b1!16s%2Fg%2F11vbtf0fmd?entry=ttu"
        >
          {" "}
          <div className="readMore">Read more google reviews</div>
        </a>
        {/* */}
        <h2 className="head">Discover What Others Are Saying!</h2>
        <div className="otherReviews">
          {reviews.map((review: any): any => {
            return (
              <div className="otherReviewItem">
                <div
                  className="photo"
                  style={{
                    backgroundImage: `url(${apiBaseURL}uploads/${review.photo})`,
                  }}
                >
                  {" "}
                </div>
                <h5 className="name">{review.name}</h5>
                <p className="review">{review.review}</p>
                <div className="rating">
                  {Array.from({ length: review.rating }, () => (
                    <FaStar />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="contactContainer" id="contact">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3928.6769249727154!2d77.07627487503173!3d10.043496090064146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDAyJzM2LjYiTiA3N8KwMDQnNDMuOSJF!5e0!3m2!1sen!2sin!4v1691722210425!5m2!1sen!2sin"
            className="iframeMap"
            width="100%"
            height={500}
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="addresses">
          <div className="address">
            <div className="line">Makayiram Retreat</div>
            <div className="line">
              (A unit of Makayiram Plantations Pvt. Ltd)
            </div>
            <div className="line"> Periyachola, Pothamedu,</div>
            <div className="line">Munnar - 685612</div>
            {/* <div className="line">reservation@makayiram.com</div> */}

            <div
              className="line"
              style={{ display: "flex", placeItems: "center", gap: "2%" }}
            >
              <FaPhoneAlt /> +91 81389 27080
            </div>
            <div
              className="line"
              style={{ display: "flex", placeItems: "center", gap: "2%" }}
            >
              <FaPhoneAlt /> +91 85909 87080
            </div>
            <div className="line routeDescription">
              The route to Makayiram Retreat shown in Google Maps has steep
              curves on the way. We advice you to proceed in the Munnar
              direction and take the right turn towards Bison Valley at the
              Headworks Dam.
            </div>
          </div>
          <div className="address mt dotedLine">
            <div className="line mt">Registered Office:</div>
            <div className="line">6th Floor, Metro Plaza,</div>
            <div className="line">Market Road, Kochi, Kerala – 682 014.</div>
            <div
              className="line"
              style={{ display: "flex", placeItems: "center", gap: "2%" }}
            >
              <FaEnvelope />
              reservations@makayiram.com
            </div>

            {/* <div className="line">+91 9895454152</div> */}
          </div>
        </div>
      </section>
      <a href="https://api.whatsapp.com/send/?phone=918138927080&text=I am interested in booking a stay at your property Makayiram Retreat. Please contact me at the earliest..&phone=+918138927080">
        {" "}
        <div className="whatsApp">
          <FaWhatsapp />
        </div>
      </a>
      {/* <a href="https://api.whatsapp.com/send/?phone=%2B917558800222 whatsapp://send?text=I am interested in Makayiram.&phone=+918138927080"> <div className="whatsApp"><FaWhatsapp /></div></a> */}
    </>
  );
};

export const TripAdvisorReview = () => {
  return (
    <>
      <div id="TA_selfserveprop334" className="TA_selfserveprop">
        <ul id="H0Jjm8Uzk" className="TA_links iiBTbA">
          <li id="lQb88vfrpA" className="Dw33pzsgYPd">
            <a
              target="_blank"
              href="https://www.tripadvisor.in/Hotel_Review-g8342248-d26862339-Reviews-Makayiram_Retreat-Pallivasal_Munnar_Idukki_District_Kerala.html"
            >
              <img
                src="https://www.tripadvisor.in/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-11900-2.svg"
                alt="TripAdvisor"
              />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
