import React, { useState } from "react";
// import GeminiSuite from "../../../assets2/GeminiSuite.png";
// import Capricorn from "../../../assets2/Capricorn.png";
// import Orion from "../../../assets2/Orion.png";
// import Taurus from "../../../assets2/Taurus.png";
const GeminiSuite="https://cms.makayiram.com/wp-content/uploads/2024/12/GeminiSuite.png"
const Capricorn="https://cms.makayiram.com/wp-content/uploads/2024/12/Capricorn.png"
const Orion="https://cms.makayiram.com/wp-content/uploads/2024/12/Orion.png"
const Taurus="https://cms.makayiram.com/wp-content/uploads/2024/12/Taurus.png"

import TopRightRoomBlock from "../../../assets2/TopRightRoomBlock.png";
import AnimatedSVG from "./AnimatedSVG";
import Button from "./Button";
import { FiArrowUpRight } from "react-icons/fi";

interface RoomCardProps {
  imageUrl: string;
  label: string;
  onClick: () => void;
  suiteName: string;
  selectedRoom: {
    imageUrl: string;
    label: string;
    suiteName: string;
  };
}

const RoomCard: React.FC<RoomCardProps> = ({
  imageUrl,
  label,
  onClick,
  selectedRoom,
}) => {
  const isSelected = selectedRoom.imageUrl === imageUrl;

  return (
    <div
      className={`!w-[15%] lg:w-[20%] xl:w-1/4 flex-col items-center cursor-pointer transition-transform duration-300 transform-gpu flex ${
        isSelected ? "scale-105" : ""
      }`}
      style={{ height: "320px" }}
      onClick={onClick}
    >
      <div
        className={`w-[160px] h-[200px] lg:w-[220px] lg:h-[280px] !rounded-3xl overflow-hidden transition-transform duration-300 ${
          !isSelected ? "p-3 bg-white" : ""
        }`}
      >
        <img
          src={imageUrl}
          alt={label}
          className="object-cover !rounded-3xl w-full h-full"
        />
      </div>

      <p className="mt-4 text-xl lg:text-2xl font-medium text-center h-[40px] leading-none flex items-center justify-center text-black">
        {label}
      </p>
    </div>
  );
};

const RoomCardSmall: React.FC<RoomCardProps> = ({
  imageUrl,
  label,
  suiteName,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="w-full rounded-lg overflow-hidden shadow-md">
      <div className="relative">
        <img
          src={imageUrl}
          alt={suiteName}
          className="w-full h-96 object-cover"
        />
        <div className="absolute min-w-[120px] text-center top-0 left-0 bg-mediumGreen text-white font-medium py-1 px-5 rounded-br-lg text-2xl">
          {suiteName}
        </div>
      </div>

      <div
        className="flex items-center justify-between bg-[#EEEDED] pl-5 pr-7 py-10"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p className="text-3xl font-medium text-[#006401]">{label}</p>
        <AnimatedSVG isHovered={isHovered} />
      </div>
    </div>
  );
};

const RoomGallery: React.FC = () => {
  const rooms = [
    {
      imageUrl: GeminiSuite,
      label: "Twin Rooms",
      suiteName: "Gemini",
      link: "",
    },
    {
      imageUrl: Capricorn,
      label: "Apartments",
      suiteName: "Capricorn",
      link: "",
    },
    {
      imageUrl: Orion,
      label: "Suites",
      suiteName: "Orion",
      link: "",
    },
    {
      imageUrl: Taurus,
      label: "Cottages",
      suiteName: "Taurus",
      link: "",
    },
  ];

  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);

  return (
    <>
      <div className="w-full h-full overflow-hidden md:mb-10">
        <div className="px-5 max-w-screen-xl mx-auto pt-20 relative">
          <h2 className="text-black font-medium text-5xl text-center">
            Accommodation
          </h2>
          <div className=" flex-col items-center p-6 mt-10 hidden md:flex">
            <div className="w-full relative h-[550px] lg:h-[700px] xl:h-[900px]">
              <div className="absolute -left-1.5 -top-1">
                <div className="relative w-full z-20">
                  <img src={TopRightRoomBlock} alt="topright" className="" />
                  <p className="text-center w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-medium text-[#545151]">
                    {selectedRoom.suiteName}
                  </p>
                </div>
              </div>
              <img
                src={selectedRoom.imageUrl}
                alt={selectedRoom.label}
                className="rounded-t-lg object-contain w-full transform duration-300 ease-in"
              />
              <div className="absolute !-bottom-40 lg:!-bottom-20 xl:!-bottom-52 w-full flex justify-evenly space-x-10 xl:space-x-6 px-6 min-h-[200px] lg:min-h-[300px] xl:min-h-[450px]">
                {rooms.map((room) => (                  
                  <RoomCard
                    key={room.label}
                    imageUrl={room.imageUrl}
                    label={room.label}
                    suiteName={room.suiteName}
                    onClick={() => setSelectedRoom(room)}
                    selectedRoom={selectedRoom}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="py-10 md:py-20 space-y-20 md:hidden">
            {rooms.map((room) => (
                <a
                key={room.label}
                href={room.link} // Use the link from the room object
                rel="noopener noreferrer" // Prevent security vulnerabilities
              >
              <RoomCardSmall
                key={room.label}
                imageUrl={room.imageUrl}
                label={room.label}
                suiteName={room.suiteName}
                onClick={() => setSelectedRoom(room)}
                selectedRoom={selectedRoom}
              />
                                 </a>

            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
      <Button
  label={
    <span className="flex items-center group-hover:text-white">
      Book Rooms
      <FiArrowUpRight className="w-12 h-12 ml-10 text-[#302F2F] group-hover:text-white" />
    </span>
  }
  type="button"
  className="group border-2 border-[#302F2F] px-7 md:!px-10 py-2 mx-auto rounded-xl mt-16 hover:bg-darkGreen hover:border-darkGreen hover:text-white transition duration-1000 ease-in-out text-3xl md:text-4xl font-medium"
  onClick={() => window.open(
    "https://bookings.resavenue.com/resBooking/rooms?regCode=VXIA1026&roomSearchId=14a498c0a4dd4762b6e0f25352e40086&adult_1=null",
    "_blank"
  )}
 />
      </div>
    </>
  );
};

export default RoomGallery;
