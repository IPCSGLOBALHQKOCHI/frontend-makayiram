import { Link } from "react-router-dom";
import { MenuLinks, SocialMediaMenu } from "../Menu/Menu";
import "./Footer.css";
import { FaTripadvisor } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="column1">
        <div className="mainHead text-center md:text-left  mt-5">Follow Us</div>

        <div className="subHeading">
          <SocialMediaMenu />
        </div>
      </div>
      <div className="column2">
        <div className="mainHead text-center md:text-left mt-5">Quick Links</div>
        <MenuLinks />

        {/* <div className="mainHead">About Us</div>
        <div className="subHeading">Activities</div>
        <div className="subHeading">Rooms</div>
        <div className="subHeading">Contact Us</div>
        <div className="subHeading">Feedbacks</div> */}
      </div>
      <div className="column3 text-center">
        <div className="mainHead text-center md:text-left mt-5 mb-0">TRIP ADVISOR</div>
        <a
          className="tripAdvisor  text-center md:text-left ml-16 md:ml-0"
          href="https://www.tripadvisor.in/Hotel_Review-g8342248-d26862339-Reviews-Makayiram_Retreat-Pallivasal_Munnar_Idukki_District_Kerala.html"
        >
          <div className="tripAdvisorIcon">
            <FaTripadvisor />
          </div>
          <div className="brandName">MAKAYIRAM RETREAT</div>
        </a>
        <div className="my-5 text-2xl text-center md:text-left font-light flex flex-col space-y-4">
          <Link to="/tariff" className="text-2xl">Tariff</Link>
          <Link to="/contact-us" className="text-2xl">Contact Us</Link>
          <Link to="/privacy-and-policy" className="underline font-light">Privacy and Policy</Link>
          <Link to="/terms-and-conditions" className="underline font-light">Terms & Conditions</Link>
        </div>
      </div>
    </div>
  );
};
