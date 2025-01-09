import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets2/Logo.svg";
import { FaAngleDown } from "react-icons/fa6";

const Header: React.FC = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showDropdown = () => {
    setIsDropdownVisible(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set the timeout to hide the dropdown after 5 seconds
    timeoutRef.current = setTimeout(() => {
      setIsDropdownVisible(false);
    }, 2000);
  };

  const hideDropdown = () => {};

  return (
    <header className="absolute w-full top-0 bg-black/30 bg-opacity-10 hover:bg-black hover:bg-opacity-50  xl:pt-3 py-2  transition-all duration-300  ease-out">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center py-1 md:py-0 px-2 lg:px-6 xl:px-8">
        <Link to="/">
          <img
            src={Logo}
            alt="makayiram"
            className="w-[150px] md:w-[200px] lg:w-[250px] 2xl:w-[300px] hover:cursor-pointer"
          />
        </Link>
        <ul className="hidden md:flex relative">
          {menuItems.map((menuItem, index) => (
            <li
              key={index}
              className={`text-white flex items-center px-1 xl:px-[1px] 2xl:px-6 font-pops text-2xl 2xl:text-3xl font-medium mr-36 ${
                menuItem.text === "Rooms" ? "relative" : ""
              }`}
              onMouseEnter={
                menuItem.text === "Rooms" ? showDropdown : undefined
              }
              onMouseLeave={
                menuItem.text === "Rooms" ? hideDropdown : undefined
              }
            >
              <Link
                to={menuItem.path}
                className="flex items-center focus:outline-none"
              >
                {menuItem.text}
                {menuItem.text === "Rooms" && (
                  <span className="ml-1 mt-2">
                    <FaAngleDown
                      className="w-8 h-6 mt-[2px] mb-[5px] ml-[1px]"
                    />
                  </span>
                )}
              </Link>
              {/* Dropdown */}
              {menuItem.text === "Rooms" && isDropdownVisible && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 text-white w-[180px] my-4 shadow-lg z-10 rounded-md bg-black bg-opacity-35">
                  <ul>
                    {roomsDropdown.map((item, subIndex) => (
                      <li
                        key={subIndex}
                        className="px-4 py-4 hover:bg-black hover:bg-opacity-35 rounded-lg"
                      >
                        <Link to={item.path}>{item.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;

export const menuItems = [
  { text: "About Us", path: "https://makayiram.com/About", color: "#78D23D" },
  { text: "Rooms", path: "", color: "#007541" },
  { text: "Activities", path: "https://makayiram.com/activities", color: "#58BB44" },
  { text: "Flora & Fauna", path: "https://makayiram.com/flora&fauna", color: "#3AA346" },
  { text: "Contact Us", path: "https://makayiram.com/contact-us", color: "#1E8C45" },
];


// Menu items array
// export const menuItemsss = [
//   { text: "About Us", path: "https://makayiram.com/About", color: "#78D23D" },
//   { text: "Activities", path: "https://makayiram.com/activities", color: "#58BB44" },
//   { text: "Flora & Fauna", path: "https://makayiram.com/flora&fauna", color: "#3AA346" },
//   { text: "Gallery", path: "/gallery", color: "#1E8C45" },
//   { text: "Rooms ", path: "", color: "#007541"},
// ];

// test comments

// Dropdown items for Rooms
export const roomsDropdown = [
  {
    text: (
      <span className="flex items-center">
        Twin Rooms 
      </span>
    ),
    path: "https://makayiram.com/RoomDetails/DoubleRooms",
  },
  {
    text: (
      <span className="flex items-center">
        Aparments
      </span>
    ),
    path: "https://makayiram.com/RoomDetails/apartments",
  }, 
  {
    text: (
      <span className="flex items-center">
        Suites 
      </span>
    ),
    path: "https://makayiram.com/RoomDetails/Suites",
  },
  {
    text: (
      <span className="flex items-center">
        Cottages 
      </span>
    ),
    path: "https://makayiram.com/RoomDetails/cottages",
  },];
