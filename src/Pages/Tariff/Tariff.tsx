import { useEffect } from "react";
import TariffBanner from "../../assets/ContactUs2.png";
import TariffSmall from "../../assets/TariffSmall.jpg";
import Table from "../../Components/Table";
import { useNavigate } from "react-router-dom";

const Tariff = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="md:min-h-[70vh] lg:min-h-[80vh]">
        <div
          style={{
            "--image-url": `url(${TariffBanner})`,
            "--image-url2": `url(${TariffSmall})`,
          }}
          className={`w-full min-h-[60vh] lg:min-h-[60vh] bg-[image:var(--image-url2)] lg:bg-[image:var(--image-url)] bg-cover bg-center '`}
        ></div>
             <div>
          <div className="px-20 py-10">
            <div className=" flex justify-between py-5">
              <h2 className="text-lg md:text-3xl font-semibold">TARIFF</h2>
              <div className="flex flex-col md:flex-row gap-2 md:gap-5 my-4">
                <button className=" md:px-4 py-1 md:bg-red-600 text-base md:text-2xl  underline md:no-underline text-red-600 md:text-white font-semibold rounded-lg">
                  Special Offer
                </button>
                <button
                  onClick={() => navigate("/terms-and-conditions")}
                  className=" md:px-4 py-1 text-base md:text-2xl md:bg-green-600 underline md:no-underline text-green-600 md:text-white font-semibold rounded-lg"
                >
                  Cancellation Policy
                </button>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <div className="px-1 md:px-10 pb-10 text-center">
        <h1 className="my-5 font-bold text-lg md:text-3xl">
          Per Night Tariff-2025-26
        </h1>
        <Table />
      </div>
      <div className="px-1 md:px-10 font-semibold mb-10">
        <h1 className="text-3xl font-bold">Peak season</h1>
        <div className="my-5 md:w-1/2 space-y-5">
          <div className="flex gap-10">
            <h2 className=" md:w-1/3 text-lg md:text-2xl ">Diwali</h2>
            <p className="text-base md:text-xl">
              From October 30th to November 10th
            </p>
          </div>

          <div className="flex gap-10">
            <h2 className=" md:w-1/3 text-lg md:text-2xl">Xmas NYE</h2>
            <div className="text-base md:text-xl">
              <p>From 23rd Dec to 30th December</p>
              <p>(excluding 31st December New year eves days)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tariff;
