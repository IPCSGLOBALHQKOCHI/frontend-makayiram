// import blog1 from "../../../assets2/blog1.png";
// import blog2 from "../../../assets2/blog2.png";
// import blog3 from "../../../assets2/blog3.png";
const blog1="https://cms.makayiram.com/wp-content/uploads/2024/12/blog1.png"
const blog2="https://cms.makayiram.com/wp-content/uploads/2024/12/blog2.png"
const blog3="https://cms.makayiram.com/wp-content/uploads/2024/12/blog3.png"
import Button from "../Components/Button";
import { FiArrowUpRight } from "react-icons/fi";

interface BlogCardProps {
  img: string;
  description: string;
  link: string;
}

interface BlogCardComponentProps {
  data: BlogCardProps;
  index: number;
}

const BlogCard: React.FC<BlogCardComponentProps> = ({ data, index }) => {
  return (
    <div
      className={`max-w-md rounded-xl overflow-hidden shadow-lg border min-w-[300px] lg:min-w-[400px] w-full md:w-1/2 lg:w-1/3 ${
        index === 1 && "hidden xl:block bg-[#006401]"
      }`}
    >
      <img
        src={data.img}
        alt="Blog Image"
        className="w-full h-96 object-cover"
      />
      <div className="p-4 border-x-2 border-b-2 border-[#006401] py-5 rounded-b-xl">
        <p className={`text-black text-xl !leading-loose text-justify font-normal md:font-normal ${
          index === 1 && " text-white"
        }`}>
          {data.description}
        </p>
      </div>
    </div>
  );
};

const Blogs: React.FC = () => {
  const blogData: BlogCardProps[] = [
    {
      img: blog1,
      description:
        "Munnar, a picturesque hill station nestled in the Western Ghats of Kerala, is a haven for nature lovers and travelers seeking tranquility. With its rolling tea plantations, mist-covered mountains, and lush green valleys, Munnar offers an idyllic escape from the hustle and bustle of everyday life.",
      link: "#",
    },
    {
      img: blog2,
      description:
        "Munnar, often referred to as the Kashmir of South India is a heaven for nature lovers, adventure enthusiasts, and those seeking a tranquil escape. Nestled in the lush green hills of the Western Ghats, mist-covered mountains, and rich biodiversity.",
      link: "#",
    },
    {
      img: blog3,
      description:
        "Hidden within the lush greenery and rolling hills of Kerala Known for its sprawling tea gardens, pristine waterfalls, and scenic viewpoints. One of the best ways to experience the natural beauty of this region is by staying at a plantation resort.",
      link: "#",
    },
  ];

  return (
    <div className="px-5 lg:px-16 text-xl mb-10">
      <h1 className="font-pops text-5xl font-semibold text-center mt-20 mb-10 md:my-20">
        Blogs
      </h1>
      <div 
       className="flex flex-col md:flex-row items-center justify-between mx-0 sm:mx-16 md:mx-16 lg:mx-40 xl:mx-0 text-2xl gap-10">
        {blogData.map((blog, index) => (
          <BlogCard key={index} data={blog} index={index} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <a href="https://makayiram.com/Blogs">
          <Button
            label={
              <span className="flex items-center group">
                Explore More
                <FiArrowUpRight className="w-12 h-12 ml-10 text-[#302F2F] group-hover:text-white" />
              </span>
            }
            type="button"
            className="group border-2 border-[#302F2F] px-7 md:!px-10 py-2   mx-auto rounded-xl mt-16 hover:bg-darkGreen hover:border-darkGreen hover:text-white transition duration-1000 ease-in-out text-[#302F2F] text-3xl md:text-4xl font-medium"
            onClick={() => (window.location.href="https://makayiram.com/Blogs")}
          />
        </a>
      </div>
    </div>
  );
};

export default Blogs;
