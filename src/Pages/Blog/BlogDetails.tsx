import { useEffect, useState } from "react";
import { apiBaseURL } from "../../Constents";
import { useNavigate, useParams } from "react-router-dom";
import "./Blog.css";
import { FaLink } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
const BlogDetails = () => {
  const [blogData, setBlogData] = useState([]);
  const [blogAllData, setAllBlogData] = useState([]);
  const navigate = useNavigate();
  const { blogName } = useParams();
  const blogID = blogName?.split("_")[1];
  const {
    heading,
    description,
    photo,
    created_at,
    keywords,
    meta_description,
    meta_title,
    og_description,
    og_title,
    seo_description,
    seo_title,
    id,
  }: any = blogData;
  useEffect(() => {
    fetch(`${apiBaseURL}/blog`)
      .then((result) => result.text())
      .then((data: any) => {
        const allBlogs = JSON.parse(data);
        setAllBlogData(allBlogs);
        const selectedBlog = allBlogs.find((blogs: any) => blogs.id == blogID);
        setBlogData(selectedBlog);
      });
  }, [blogName]);

  return (
    <>
      <Helmet>
        <title>{meta_title}</title>
        <meta name="description" content={meta_description} />
        <meta name="keywords" content={keywords} />
        <meta name="title" content={meta_title} />
        <link
          rel="canonical"
          href={`https://makayiram.com/Blogs/${seo_title}_${id}`}
        />
        <meta property="og:title" content={og_title} />
        <meta property="og:description" content={og_description} />
        <meta property="og:image" content={`${apiBaseURL}/uploads/${photo}`} />
        <meta
          property="og:image:secure_url"
          content={`${apiBaseURL}/uploads/${photo}`}
        />
      </Helmet>
      <div className="blogDetailsContainer">
        <div className="selectedBlogInfo">
          <h1 className="text-center text-4xl font-bold my-10 ">{heading}</h1>

          <div className="blogImage">
            <img src={`${apiBaseURL}/uploads/${photo}`} alt={seo_description} />
          </div>

          <div
            className="description  post-content"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
          <p className="createdAt">{created_at} by Admin</p>
        </div>
        <div className="otherBlogs">
          <div className="fixedContainer">
            <h2>Check out other blogs</h2>
            {blogAllData.map((blog: any) => {
              return (
                <div
                  className="blogHead"
                  onClick={() => {
                    navigate(`/Blogs/${blog.seo_title}_${blog.id}`);
                  }}
                >
                  <FaLink /> {blog.heading}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
