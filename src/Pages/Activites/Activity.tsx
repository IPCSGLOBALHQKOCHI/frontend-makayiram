import ReadMore from "../../Components/ReadMore";
import { activities } from "../../Constents";
import { avtivitiesBg } from "../../Images";
import { Banner } from "../About/About";
import "./Activity.css";

import { Helmet } from "react-helmet-async";

export const Activity = () => {
  return (
    <>
      <Helmet>
        <title>Family Resort in Munnar | Makayiram Plantation Retreat</title>
        <meta
          name="description"
          content="Discover Makayiram Retreat, your ideal family resort in Munnar. Enjoy trail walks, cycling, and cardamom plantation tours amidst lush surroundings"
        />
        <meta name="keywords" content="Family Resort in Munnar" />
        <meta
          name="title"
          content="Family Resort in Munnar | Makayiram Plantation Retreat"
        />
        <link rel="canonical" href="https://makayiram.com/activities" />
        <meta
          property="og:title"
          content="Best luxury Resort in Munnar | Makayiram plantation retreat "
        />
        <meta
          property="og:description"
          content="Discover Makayiram Retreat, your ideal family resort in Munnar. Enjoy trail walks, cycling, and cardamom plantation tours amidst lush surroundings!"
        />
        <meta property="og:image" content="/assets/og.png" />
      </Helmet>
      <Banner head="ACTIVITIES" tagline="" image={avtivitiesBg} />
      <div className="activityContainer">
        {activities.map((activity, index) => {
          return (
            <div className="activityItem" key={index}>
              <div
                className="image"
                style={{ backgroundImage: `url(${activity.image})` }}
              ></div>
              <div className="activityNameAndDescription space-y-5">
                <h2 className="text-xl font-semibold">{activity.activity} </h2>
                <p>
                  <ReadMore text={activity.description} limit={50} />{" "}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
