import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
// import mapVideo from "../../../assets2/MAP ANIMATION_POPUPS ADDED2.mp4";
// import mapVideo2 from "../../../assets2/MAP MAKAYIRAM THENI-MAKAYIRAM ANIMATION (1).mp4";
const mapVideo ="https://cms.makayiram.com/wp-content/uploads/2024/12/MAP-ANIMATION_POPUPS-ADDED2.mp4"
const mapVideo2="https://cms.makayiram.com/wp-content/uploads/2024/12/MAP-MAKAYIRAM-THENI-MAKAYIRAM-ANIMATION-1.mp4"
import Button from "./Button";
import { FiArrowUpRight } from "react-icons/fi";

const LocateUs: React.FC = () => {
  return (
    <div
      className="mt-16 px-5
     md:px-10 font-pops max-w-screen-xl mx-auto w-full"
    >
      <div className="text-5xl font-medium text-center">Locate Us</div>
      <div className="my-20">
        <div className="flex flex-col md:flex-row space-y-8 gap-5 lg:gap-20">
          <div className="w-full md:w-1/2 space-y-2">
            <h4 className="font-medium">Need help? Get in Touch</h4>
            <h5 className="text-2xl">
              Feel Free to Reach out to us For Inquiry Or Assistance. We are
              here to help.
            </h5>
          </div>
          <div className="w-full md:w-1/2 flex text-2xl">
            <div className="w-1/2 md:w-5/12 lg:w-1/2 space-y-2">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="w-7 h-7 text-[#006401]" />
                <h2 className="text-2xl font-medium">Contact Us</h2>
              </div>
              <p>+91 81389 27080</p>
              <p>+91 85909 87080</p>
            </div>
            <div className="w-1/2 md:w-7/12 lg:w-1/2 space-y-2">
              <div className="flex items-center gap-3">
                <FaLocationDot className="w-7 h-7 text-[#006401]" />
                <h2 className="text-2xl font-medium">Address</h2>
              </div>
              <p>Munnar - Bison Valley Road,</p>
              <p>Kerala 685565</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <video
              className="mt-10 !z-50 w-full auto"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={mapVideo} type="video/mp4" />
            </video>
            <div className="text-[#006401] flex justify-between mx-2 md:mx-10 !z-0">
              <div className="p-2 md:p-4 border-2 border-[#006401] w-fit  rounded-2xl mt-2 z-0">
                <h3 className="2xl font-medium">
                  Total Distance - Adimali - Makayiram (28 Km)
                </h3>
              </div>
              <Button
                label={
                  <span className="flex items-center text-white">
                    Locate Us
                    <FiArrowUpRight className="w-8 h-8 ml-5 text-white" />
                  </span>
                }
                className="bg-[#006401] text-white !px-5 md:!px-10 !py-3 h-fit mt-2 !rounded-xl border border-[#006401] hidden md:block"
                onClick={() => window.open(
                  "https://www.google.com/maps/dir/?api=1&origin=Adimali&destination=MakayiramRetreat",
                  "_blank"
                )}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex">
          <Button
            label={
              <span className="flex items-center text-white">
                Locate Us
                <FiArrowUpRight className="w-10 h-10 ml-6 text-white" />
              </span>
            }
            className="bg-[#006401] text-white !px-10 !py-3 h-fit mt-10 mx-auto !rounded-xl border border-[#006401] block md:hidden"
            onClick={() => window.open(
              "https://www.google.com/maps/dir/?api=1&origin=Adimali&destination=MakayiramRetreat",
              "_blank"
            )}
          />
        </div>
      </div>
      <div>
        <div>
          <video
            className="mt-10 !z-50 w-full auto"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={mapVideo2} type="video/mp4" />
          </video>
          <div className="text-[#006401] flex justify-between mx-2 md:mx-10 !z-0">
            <div className="p-2 md:p-4 border-2 border-[#006401] w-fit  rounded-2xl mt-2 z-0">
              <h3 className="2xl font-medium">
                Total Distance - Theni - Makayiram (81 Km)
              </h3>
            </div>
            <Button
              label={
                <span className="flex items-center text-white">
                  Locate Us
                  <FiArrowUpRight className="w-8 h-8 ml-5 text-white" />
                </span>
              }
              className="bg-[#006401] text-white !px-5 md:!px-10 !py-3 h-fit mt-2 !rounded-xl border border-[#006401] hidden md:block"
              onClick={() => window.open(
                "https://www.google.com/maps/dir/?api=1&origin=Theni&destination=MakayiramRetreat",
                "_blank"
              )
              }
            />
          </div>
        </div>
      </div>
      <div className="w-full flex">
        <Button
          label={
            <span className="flex items-center text-white">
              Locate Us
              <FiArrowUpRight className="w-10 h-10 ml-6 text-white" />
            </span>
          }
          className="bg-[#006401] text-white !px-10 !py-3 h-fit mt-10 mx-auto !rounded-xl border border-[#006401] block md:hidden"
          onClick={() =>
            window.open(
              "https://www.google.com/maps/dir/?api=1&origin=Theni&destination=MakayiramRetreat",
              "_blank"
            )
          }
        ></Button>
      </div>
    </div>
  );
};

export default LocateUs;
