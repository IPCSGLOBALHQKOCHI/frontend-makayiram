import { useEffect } from "react"
import { aboutMakayiram } from "../../Constents"
import { aboutbanner } from "../../Images"

import { Helmet } from 'react-helmet-async';


import "./About.css"
type BannerProps = {
    image: string,
    head: string,
    tagline: string
}
export function Banner({ image, head, tagline }: BannerProps) {
    return (
        <div className="aboutUsBanner" style={{
            backgroundImage: `url(${image})`
        }}>
            <h1 className="head">{head}</h1>

            <h2 className="taglin">
                {tagline}
            </h2>
        </div>);
}


export const About = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [])

    return (<>
        <Helmet>
            <title>Best resort in munnar |  Makayiram plantation retreat</title>
            <meta name="description"
                content="Makayiram Retreat, the best resort in Munnar, offers luxury stays, stunning views, lush plantations, and unmatched tranquility near Pothamedu." />
            <meta name="title" content="Best luxury Resort in Munnar | Makayiram plantation retreat" />
            <meta property="og:title" content="Best luxury Resort in Munnar | Makayiram plantation retreat " />
            <link rel="canonical" href="https://makayiram.com/About" />
            <meta property="og:description"
                content="Makayiram Retreat, the best resort in Munnar, offers luxury stays, stunning views, lush plantations, and unmatched tranquility near Pothamedu." />
            <meta property="og:image" content="/assets/og.png" />
        </Helmet>
        <Banner head="About Makayiram" image={aboutbanner} tagline="Life is either a daring adventure or nothing at all." />
        <div className="aboutContainer" >
            <div className="aboutContent">
                <p className="description">{aboutMakayiram}</p>
            </div>
            {/* <div className="videoThumb" style={{ backgroundImage: `url(${geminiThumb})` }}></div> */}
        </div>
    </>
    )
}
