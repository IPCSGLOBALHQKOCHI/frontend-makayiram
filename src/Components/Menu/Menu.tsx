import { menuDetails } from "../../Constents"
import { roomsDropdown } from "../../Constents"
import { FaBars, FaFacebookSquare, FaInstagram, FaMapMarkerAlt, FaTimes, FaYoutube } from "react-icons/fa"
import { logo } from "../../Images"
import { NavHashLink } from 'react-router-hash-link'
import "./Menu.css"
import { useLocation, useNavigate } from "react-router-dom"
import { useState,useRef,useEffect } from "react"
import { formatDate } from "../../Pages/Home/Home"
export const Menu = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation()
    console.log(location);

    const [isMobileMenuOpen, handleMobileMenu] = useState(false);
    return (
        <>
            <div className={isMobileMenuOpen ? "menuContainer mobilemenu translateZero" : "menuContainer mobilemenu"}>
                <div className="mobileMenuClose mobileOnly" onClick={() => handleMobileMenu(false)}><FaTimes /></div>
                <div className="menuItem logo desktopOnly" onClick={() => { navigate("/") }} style={{ backgroundImage: `url(${logo})` }}></div>
                <MenuLinks handleMobileMenu={handleMobileMenu} />
                {/* <NavHashLink scroll={(el) => scrollWithOffset(el)} style={{ order: 3 }} className="menuItem" smooth to="/flora&fauna">  <div className="menuItem flora">Flora & Fauna</div>
                    </NavHashLink> */}
            </div>
            <div className={`mobileMenuOpener mobileOnly ${pathname === "/" ? "white" : "white"}`} onClick={() => handleMobileMenu(true)}><FaBars /></div>
        </>
    )
}

export const SocialMediaMenu = () => {
    return (
        <div className="socialMediaContainer">
            <div className="faceBook" onClick={() => window.open(import.meta.env.VITE_FB, '_self', 'rel=noopener noreferrer')}><FaFacebookSquare /></div>
            <div className="faceBook" onClick={() => window.open(import.meta.env.VITE_INSTA, '_self', 'rel=noopener noreferrer')}><FaInstagram /></div>
            <div className="faceBook" onClick={() => window.open(import.meta.env.VITE_YOUTUBE, '_self', 'rel=noopener noreferrer')}><FaYoutube /></div>
            <div className="faceBook" onClick={() => window.open(import.meta.env.VITE_MAP, '_self', 'rel=noopener noreferrer')}><FaMapMarkerAlt /></div>
            {/* <div className="faceBook"><FaInstagram /></div>
            <div className="faceBook"><FaYoutube /></div> */}
        </div>
    )
}
export const BookNowButton = ({ order }: any) => {
    console.log(order);
    
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    var nextDayAfterTomorrow = new Date();
    nextDayAfterTomorrow.setDate(nextDayAfterTomorrow.getDate() + 2);
    console.log(tomorrow);
    console.log(nextDayAfterTomorrow);

    return <form style={{ order: order }} name="resBooking" className="menuItem" id="resBooking" action="https://bookings.resavenue.com/resBooking4/searchRooms" method="post" target="_blank">
        <input type="hidden" name="curr" value="INR" />
        <input type="hidden" name="regCode" value="VXIA1026" />
        <input type="hidden" id="arr_date" name="arr_date" placeholder="Check-In" className="calender" value={formatDate(tomorrow)} autoComplete="off" />
        <input type="hidden" id="dep_date" name="dep_date" placeholder="Check-Out" className="calender" value={formatDate(nextDayAfterTomorrow)} autoComplete="off" />
        <button type="submit" className="menuItem bookNow">Book Now</button>
    </form>
}


export const MenuLinks = (props: any) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const scrollWithOffset = (el: any) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  const showDropdown = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsDropdownVisible(true);

    // Hide dropdown after 3 seconds
    timeoutRef.current = setTimeout(() => {
      setIsDropdownVisible(false);
    }, 3000);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="MenuLinks text-center md:text-left">
      {menuDetails.map((menu) => {
        if (menu.externalLink) {
          return <BookNowButton order={menu.order} />;
        } else if (menu.menu === "Rooms") {
          return (
            <div key={menu.menu} className="relative inline-block" ref={dropdownRef}>
              <NavHashLink
                scroll={(el) => scrollWithOffset(el)}
                style={{ order: menu.order }}
                className="menuItem"
                smooth
                to={menu.to}
                onClick={(e) => {
                  e.preventDefault(); // Prevent navigation
                  showDropdown();
                }}
              >
                <div className="menuItem cursor-pointer">{menu.menu}</div>
              </NavHashLink>
              {isDropdownVisible && (
                <div className="absolute left-0 mt-2 bg-white border shadow-lg rounded-md z-10">
                  {roomsDropdown.map((room, index) => (
                    <a
                      key={index}
                      href={room.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {room.text}
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        } else {
          return (
            <NavHashLink
              scroll={(el) => scrollWithOffset(el)}
              style={{ order: menu.order }}
              className="menuItem"
              smooth
              to={menu.to}
              onClick={() => props.handleMobileMenu(false)}
            >
              <div className="menuItem">{menu.menu}</div>
            </NavHashLink>
          );
        }
      })}
      {props.children}
    </div>
  );
};






export const scrollWithOffset = (el: any) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -120;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};