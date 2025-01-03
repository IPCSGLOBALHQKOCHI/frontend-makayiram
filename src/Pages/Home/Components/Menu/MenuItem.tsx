import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface MenuItemProps {
  i: {
    text: string;
    path: string;
    color: string;
    submenu?: { text: string; path: string }[]; // Added submenu to handle dropdown
  };
  onClick?: (event: React.MouseEvent) => void; // Updated the type here to accept MouseEvent
  isOpen?: boolean; // Flag for dropdown state
  className?: string; // Optional className for additional styling
}

export const MenuItem: React.FC<MenuItemProps> = ({ i, onClick, isOpen, className }) => {
  const style = {
    backgroundColor: i.color,
  };

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`menu-li ${className}`}
    >
      <div
        className="rounded-md !w-[350px] h-16 flex-1 flex justify-center items-center xs:!text-xl text-3xl text-white font-medium"
        style={style}
        onClick={onClick} // Trigger the onClick passed down
      >
        <Link to={i.path}>{i.text}</Link>
      </div>

      {i.submenu && isOpen && (
        <motion.ul
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          className="submenu mt-4"
        >
          {i.submenu.map((subItem, index) => (
            <li key={index} className="submenu-item text-xl text-white bg-green-600 py-2 px-4">
              <Link to={subItem.path}>{subItem.text}</Link>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.li>
  );
};

