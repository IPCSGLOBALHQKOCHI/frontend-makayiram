import { useEffect, useState } from "react";
import { apiBaseURL } from "../../Constents";
import { Banner } from "../About/About";
import { aboutbanner } from "../../Images";
import "./Blog.css";
import { useNavigate } from "react-router-dom";

import { Helmet } from "react-helmet-async";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${apiBaseURL}/blog`)
      .then((result) => result.text())
      .then((data: any) => {
        console.log(JSON.parse(data));
        setBlogData(JSON.parse(data));
      });
  }, []);

  const extractTextContent = (htmlString: string): string => {
    const temporaryElement = document.createElement("div");
    temporaryElement.innerHTML = htmlString;
    return temporaryElement.textContent || temporaryElement.innerText || "";
  };


  return (
    <>
      <Helmet>
        <title>
          Blogs | Makayiram plantation retreat, Munnar{" "}
        </title>
        <meta
          name="description"
          content="Check out our Blogs for travel tips, resort guides, destination ideas, and exclusive offers. Stay informed and inspired for your next trip!"
        />
        <meta
          name="keywords"
          content="best luxury resort in munnar,best resort in munnar, best hotels in munnar, best hotels in munnar for family ,best resorts in munnar for family,luxury resorts in munnar,munnar resorts for family,best budget resorts in munnar,best hotels in munnar town,plantation resort in munnar,family resort in munnar, best family hotels in munnar, resorts in munnar for family,family hotels in munnar,munnar resorts for family low price,munnar best resorts for family,5 star resorts in munnar for family,best,budget friendly resorts in munnar,premium family resorts in munnar,affordable resorts in munnar"
        />
        <meta
          name="title"
          content="Blogs | Makayiram plantation retreat, Munnar"
        />
        <link rel="canonical" href="https://makayiram.com/Blogs" />
        <meta
          property="og:title"
          content="Blogs | Makayiram plantation retreat, Munnar "
        />
        <meta
          property="og:description"
          content="Check out our Blogs for travel tips, resort guides, destination ideas, and exclusive offers. Stay informed and inspired for your next trip!"
        />
      </Helmet>
      <Banner head="Blogs" image={aboutbanner} tagline="" />
      <div className="blogContainer">
        {blogData.reverse().map((blog: any) => {

          
          const plainTextDescription = extractTextContent(blog.description).slice(0, 200);
          
          return (
            <div className="blogCard">
              <img src={`${apiBaseURL}/uploads/${blog.photo}`} />
              <div className="blogInfo">
                <h2>{blog.heading}</h2>
               <p className="shortDescription">{plainTextDescription}...</p>
                <div
                  className="readMore"
                  onClick={() => {
                    navigate(`/Blogs/${blog.seo_title}_${blog.id}`);
                  }}
                >
                  Read Blog
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Blog;
