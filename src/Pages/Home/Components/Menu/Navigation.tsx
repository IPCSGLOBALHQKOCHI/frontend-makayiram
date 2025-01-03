import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MenuItem } from "./MenuItem";
import { menuItems, roomsDropdown } from "../Header"; // Import the roomsDropdown

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => {
  const [openRooms, setOpenRooms] = useState(false);

  // Handle the toggle of the Rooms dropdown
  const handleRoomsClick = (event: React.MouseEvent) => {
    event.preventDefault(); // Prevent default link behavior
    setOpenRooms(!openRooms); // Toggle dropdown visibility
  };

  React.useEffect(() => {
    const closeOnClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".menu-ul")) {
        setOpenRooms(false); // Close dropdown if click happens outside
      }
    };

    document.addEventListener("click", closeOnClickOutside);

    return () => {
      document.removeEventListener("click", closeOnClickOutside);
    };
  }, []);

  return (
    <motion.ul variants={variants} className="menu-ul flex flex-col sm:flex-row sm:space-x-4">
      {menuItems.map((menu, index) => (
        <MenuItem
          key={index}
          i={menu}
          onClick={menu.text === "Rooms" ? handleRoomsClick : undefined} // Pass handleRoomsClick for "Rooms" only
          isOpen={menu.text === "Rooms" ? openRooms : false} // Only pass isOpen for "Rooms"
          className={menu.text === "Rooms" ? "relative sm:order-2 order-last" : ""} // Add relative positioning to "Rooms" for dropdown positioning
        />
      ))}

      {openRooms && (
        <motion.ul
          initial="closed"
          animate={openRooms ? "open" : "closed"}
          variants={variants}
          className="submenu absolute mt-96 sm:left-0 left-1/2 transform -translate-x-1/2 z-10" // Dropdown positioning
        >
          {roomsDropdown.map((subItem, index) => (
            <li key={index} className="submenu-item text-2xl w-72 text-black py-2 px-4 bg-[#3aa346] bg-opacity-20">
              <Link to={subItem.path}>{subItem.text}</Link>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.ul>
  );
};
