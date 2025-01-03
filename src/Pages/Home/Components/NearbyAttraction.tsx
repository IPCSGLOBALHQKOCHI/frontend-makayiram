import attraction1 from "../../../assets2/attraction1.png";
import attraction2 from "../../../assets2/attraction2.png";
import attraction3 from "../../../assets2/attraction3.png";
import attraction4 from "../../../assets2/attraction4.png";

const NearbyAttraction = () => {
  return (
    <div>
      <h1 className="font-pops text-5xl font-semibold text-center my-10 md:my-20">
        Nearby <span className="text-[#006401]">Attractions</span>
      </h1>
      <div className="max-w-screen-xl mx-auto space-y-16">
        {card.map((card, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-10 px-5">
            <img src={card.img} alt="attraction" />
            <div className="flex justify-center items-center">
            <h2 className="text-3xl font-normal text-justify leading-[1.5] sm:leading-loose">                <span className="text-[#006401] text-4xl md:text-4xl font-semibold">
                  {card.highlight}
                </span>{" "}
                – {card.description}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div className="px-5 lg:px-16 space-y-10 mt-16">
        <div className="flex justify-center items-center">
          <h2 className="text-3xl xl:leading-loose sm:leading-relaxed font-normal text-justify">
            <span className="text-[#006401] text-4xl font-semibold">
              Nearest Airport:
            </span>{" "}
            – Cochin International Airport (COK), located about 108 km away, is
            the nearest airport to Munnar. It takes around 3 to 4 hours by road
            to reach the retreat from the airport​(Makayiram).
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <h2 className="text-3xl xl:leading-loose sm:leading-relaxed  font-normal text-justify">
            <span className="text-[#006401] text-4xl font-semibold">
              Nearest Railway Station:
            </span>{" "}
            – Aluva Railway Station is the closest, situated around 108 km from
            Munnar. This station is also a common entry point for travelers,
            with similar travel time by road​
          </h2>
        </div>
      </div>
    </div>
  );
};

export default NearbyAttraction;

const card = [
  {
    img: attraction1,
    highlight: "Attukal Waterfalls",
    description:
      "3.2 km from the retreat, Known for scenic views of cascading waterfalls surrounded by forests and hills​.",
  },
  {
    img: attraction2,
    highlight: "Pothamedu Viewpoint",
    description:
      "About 3.5 km away, Offering panoramic views of the tea, coffee, and cardamom plantations, and a great spot for photography​.",
  },
  {
    img: attraction3,
    highlight: "Ripple Waterfalls",
    description:
      "Situated around 13 km from the retreat, this natural waterfall is famous for its tranquil setting and rippling water sounds​​.",
  },
  {
    img: attraction4,
    highlight: "Eravikulam National Park",
    description:
      "18 km from the retreat, known for being home to the endangered Nilgiri Tahr and stunning landscapes, perfect for nature lovers​.",
  },
];
