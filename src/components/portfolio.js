import React, { useState, useEffect, Fragment, useContext } from "react";

import Cursor from "./cursor/cursor";

import LeftArrow from "./images/left-arrow.svg";

import RightArrow from "./images/right-arrow.svg";

import Ask from "./images/ask-work.png";
import Kettik from "./images/kettik-work.png";
import Bulut from "./images/bulut-work.png";
import Achimera from "./images/achimera-work.png";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
  CarouselContext
} from "pure-react-carousel";

import { motion } from "framer-motion";

import "pure-react-carousel/dist/react-carousel.es.css";
import PortfolioDetails from "./portfolio-details";
import { Link } from "react-router-dom";

var pfolio = new Map();
pfolio = [
  {
    name: "bulut",
    image: Bulut,
    type: "Full-stack development",
    title: "BULUT",
    description:
      "Website for the tech services company which is aimed to provide full-pack services for small and mid-sized businesses",
    url: "https://bulut.vercel.app",
    tools: ["React.js", "Node.js", "Mailgun", "Telegraph API", "Github Pages"],
  },
  {
    name: "askconsulting",
    image: Ask,
    type: "Full-stack development",
    title: "ASK CONSULTING",
    description:
      "Designed and build a platform that allows consulting company to efficiently deliver of their various mentorship programs",
    url: "https://ask.kg",
    tools: [
      "Next.js",
      "React.js",
      "Node.js",
      "DigitalOcean",
      "Express",
      "SendGrid API",
    ],
  },
  {
    name: "achimera",
    image: Achimera,
    type: "Full-stack development",
    title: "ACHIMERA",
    description:
      "Developed website to show the table with the list of those who need a help or who can help in the COVID-19 situation",
    url: "https://achimera.team",
    tools: ["Firebase API", "Bootstrap", "JS"],
  },
  {
    name: "kettik",
    image: Kettik,
    type: "UI/UX design",
    title: "KETTIK",
    description: 'UI & UX design for carpooling mobile application "KETTIK"',
    url:
      "https://www.figma.com/file/RmhRt1KhbxgPaRFwOhd46RoS/Kettik-1?node-id=0%3A1",
    tools: ["Figma", "Material Design"],
  },
];

export default function Portfolio() {
  const [slide, setSlide] = useState(0);
  const transition = { duration: 0.6, ease: [0.45, 0.15, 0.25, 0.95] };

  function handleCountNext() {
    if (slide + 1 === pfolio.length) {
      setSlide(0);
      return;
    };
    setSlide(slide + 1);
  }

  return (
    <Fragment>
      <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay:.2, ...transition}}} exit={{opacity:0}} className="div2">
        <CarouselProvider
          visibleSlides={1}
          totalSlides={pfolio.length}
          infinite="true"
          lockOnWindowScroll="true"
          naturalSlideHeight={470}
          naturalSlideWidth={550}
        >
          <div className="portfolio col-2">
            <div className="cursor-item proj-image">
            <div className="img-carousel">
              <Slider>
                {pfolio.map((work, i) => (
                  <Slide key={`${work.name}-${work.url}`} index={i} className="slide-wrap">
                    {/* <Link exact to={"/works/"+work.name}> */}
                    <Image
                      className="img-zoom-in"
                      src={work.image}
                      alt={work.title}
                    />
                    {/* </Link> */}
                  </Slide>
                ))}
                
              </Slider>
              </div>
            </div>
            <div className="row-3 white reverse-col">
              <div className="proj-content">
                <Slider>
                  {pfolio.map((work, idx) => (
                    <Slide key={work.name} index={idx} className="work-image">
                      <motion.div exit={{ opacity: 0 }} transition={transition}>
                        <a
                          className="work-title cursor-item-link"
                          href={work.url}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <h1 className="portfolio-title text-underlined">
                            {work.title}
                          </h1>
                        </a>
                        <span className="type-tag">{work.type}</span>
                        <p className="portfolio-description">
                          {work.description}
                        </p>
                        <p className="portfolio-tools">
                          <b>Tools: </b>
                          {work.tools.map((tool, i) => {
                            if (i+1===work.tools.length) return <span key={tool}>${tool}</span>;
                            return <span key={tool}>${tool + ", "}</span>
                          })}
                        </p>
                      </motion.div>
                    </Slide>
                  ))}
                </Slider>
              </div>

              <div className="col-2">
                <div className="arrows left">
                  <span>
                    {slide + 1}/{pfolio.length}
                  </span>
                </div>
                <div className="arrows middle cursor-item-link">
                  <span>
                    <ButtonNext onClick={()=>handleCountNext()} className="but-arr">
                      <img className="white" src={RightArrow} alt="rght arrw" />
                    </ButtonNext>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CarouselProvider>
      </motion.div>
    </Fragment>
  );
}
