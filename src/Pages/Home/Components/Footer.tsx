import { FaFacebook } from "react-icons/fa";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import FooterLogo from "../../../assets2/footerlogo.png";
import { IoIosMail } from "react-icons/io";
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    
    <footer className="bg-[#006401] text-white p-6 pt-16">
 <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:gap-8 gap-y-10">
  {/* About Us Section */}
  <div className="text-center md:text-start px-6 md:px-8 xl:ml-6">
    <h5 className="text-3xl font-semibold my-5">About Us</h5>
    <ul className="mt-2 space-y-2">
      <li>
        <Link to="/mission" className="hover:underline font-extralight">
          Mission
        </Link>
      </li>
      <li>
        <Link to="/vision" className="hover:underline font-extralight">
          Vision
        </Link>
      </li>
      <li>
        <Link to="https://makayiram.com/tariff" className="hover:underline font-extralight">
          Tariff
        </Link>
      </li>
      <li>
        <Link to="https://makayiram.com/contact-us" className="hover:underline font-extralight">
          Contact Us
        </Link>
      </li>
    </ul>
  </div>

  {/* Rooms Section */}
  <div className="text-center md:text-start px-6 md:px-8">
    <h5 className="text-3xl font-semibold my-5">Rooms</h5>
    <ul className="mt-2 space-y-2">
      <li>
        <Link to="https://makayiram.com/RoomDetails/DoubleRooms" className="hover:underline font-extralight">
          Twin Rooms
        </Link>
      </li>
      <li>
        <Link to="https://makayiram.com/RoomDetails/apartments" className="hover:underline font-extralight">
          Suites
        </Link>
      </li>
      <li>
        <Link to="https://makayiram.com/RoomDetails/Suites" className="hover:underline font-extralight">
          Apartment
        </Link>
      </li>
      <li>
        <Link to="https://makayiram.com/RoomDetails/cottages" className="hover:underline font-extralight">
          Cottages
        </Link>
      </li>
    </ul>
  </div>

  {/* Activities Section */}
  <div className="text-center md:text-start px-6 md:px-8">
    <h5 className="text-3xl font-semibold my-5">Activities</h5>
    <ul className="mt-2 space-y-2">
      <li>
        <Link to="https://makayiram.com/activities" className="hover:underline font-extralight">
          Cycling
        </Link>
      </li>
      <li>
        <Link to="https://makayiram.com/activities" className="hover:underline font-extralight">
          Trail Walks
        </Link>
      </li>
      <li>
        <Link to="https://makayiram.com/activities" className="hover:underline font-extralight">
          Tea Estate Tour
        </Link>
      </li>
      <li>
        <Link to="https://makayiram.com/Blogs/shinrin-yoku-immersing-oneself-in-the-spirit-of-nature_63" className="hover:underline font-extralight">
          Shinrin Yoku
        </Link>
      </li>
      <li>
        <Link to="https://makayiram.com/activities" className="hover:underline font-extralight">
          Treasure Hunt
        </Link>
      </li>
    </ul>
  </div>
  {/* Contact Section */}
  <div className="text-center md:text-center px-6 flex flex-col items-center md:items-center">
    <img src={FooterLogo} alt="footer" className="w-36 sm:w-48 md:w-60" />
    <p className="mt-2 text-center md:text-center">
      Munnar - Bison Valley Road, Kerala, India 685565
    </p>
    <p className="mt-2">Ph: +91 8138927080,</p>
    <p>+91 8590987080</p>
    <p className="mt-2 flex items-center justify-center md:justify-center xl:pr-6">
      <IoIosMail className="mr-2 w-8 h-8" />
      reservations@makayiram.com
    </p>
  </div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between space-y-5 md:space-y-0">
  {/* Follow Us Section */}
  <div className="flex items-center space-x-5 mt-5 xl:mt-8 sm:mt-6 xl:ml-20">
    <span>Follow us on</span>
    <span className="flex items-center space-x-4">
      <a
        href="https://www.facebook.com/makayiramretreat"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-300"
      >
        <FaFacebook style={{ width: "30px", height: "30px" }} />
      </a>
      <a
        href="https://www.linkedin.com/company/makayiram-retreat/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-300"
      >
        <TbBrandLinkedin style={{ width: "30px", height: "30px" }} />
      </a>
      <a
        href="https://www.instagram.com/makayiramretreat/#"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-300"
      >
        <FaInstagram style={{ width: "30px", height: "30px" }} />
      </a>
      <a
        href="https://www.youtube.com/@makayiramretreat"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-300"
      >
        <FiYoutube style={{ width: "30px", height: "30px" }} />
      </a>
    </span>
  </div>

  {/* Footer Links Section */}
  <div className="text-lg text-center md:text-right mt-5 md:mt-0 xl:mr-16">
    &copy; 2024 Makayiram Retreat
    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
    <Link
      to="https://makayiram.com/terms-and-conditions"
      className="hover:underline font-extralight"
    >
      Terms of Use
    </Link>
    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <Link
      to="https://makayiram.com/privacy-and-policy"
      className="hover:underline font-extralight"
    >
      Privacy Policy
    </Link>
  </div>
</div>
    </footer>
  );
};

export default Footer;
