import { Link } from "react-router-dom";
import { BookNowButton, SocialMediaMenu } from "../Menu/Menu";
import "./Footer.css";
import "../Menu/Menu.css";
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
      <div className="column2 ">
        <div className="mainHead text-center md:text-left mt-5">
          Quick Links
        </div>
        {/* <MenuLinks />  */}
        <div className="MenuLinks flex flex-col text-center md:text-left">
          <Link
            to="/"
            className="menuItem"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Home
          </Link>
          <Link
            to="/About"
            className="menuItem"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            About Us
          </Link>
          <Link
            to="/activities"
            className="menuItem"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Activities
          </Link>
          <Link
            to="/Blogs"
            className="menuItem"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Blogs
          </Link>
          <Link
            to="/flora&fauna"
            className="menuItem"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Flora & Fauna
          </Link>

          <BookNowButton />
        </div>
      </div>
      <div className="column3 text-center">
        <div className="mainHead text-center md:text-left mt-5 mb-0">
          TRIP ADVISOR
        </div>
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
          <Link to="/tariff" className="text-2xl">
            Tariff
          </Link>
          <Link to="/contact-us" className="text-2xl">
            Contact Us
          </Link>
          <Link to="/privacy-and-policy" className="underline font-light">
            Privacy and Policy
          </Link>
          <Link to="/terms-and-conditions" className="underline font-light">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </div>
  );
};
