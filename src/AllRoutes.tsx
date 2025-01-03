import { useRoutes } from "react-router-dom";
import { RoomDetails } from "./Pages/RoomDetails/RoomDetails";
import { About } from "./Pages/About/About";
import { Activity } from "./Pages/Activites/Activity";
import Flora from "./Pages/Flora/Flora";
import Blog from "./Pages/Blog/Blog";
import BlogDetails from "./Pages/Blog/BlogDetails";
import TermsCondition from "./Pages/TermsCondition/TermsCondition";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Tariff from "./Pages/Tariff/Tariff";
import Home2 from "./Pages/Home/Home2";

export const AllRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Home2 />,
    },
    {
      path: "/About",
      element: <About />,
    },
    {
      path: "/Activities",
      element: <Activity />,
    },
    {
      path: "/flora&fauna",
      element: <Flora />,
    },
    {
      path: "/Blogs",
      element: <Blog />,
    },
    {
      path: "/Blogs/:blogName",
      element: <BlogDetails />,
    },
    {
      path: "/contact-us",
      element: <ContactUs />,
    },
    { path: "/RoomDetails/:roomCategory", element: <RoomDetails /> },
    { path: "/terms-and-conditions", element: <TermsCondition /> },
    { path: "/privacy-and-policy", element: <PrivacyPolicy /> },
    { path: "/tariff", element: <Tariff /> },
  ]);

  return element;
};
