import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  mimikyu,
  shortly,
  jungle,
  scheduler,
  bytes,
  messenger
} from "../../data/projects.ts";
import ProjectCard from "./ProjectCard";
import wave from "../assets/wave_2.svg";
import { ReactSVG } from "react-svg";

// const projects = [mimikyu, shortly, bytes, portfolio, jungle, scheduler];
export default function Projects() {
  const projects = [mimikyu, messenger, shortly, bytes, jungle, scheduler];
  const responsive = {
    desktopLarge: {
      breakpoint: { max: 3000, min: 1600 },
      items: 3,
    },
    desktopSmall: {
      breakpoint: { max: 1600, min: 1024 },
      items: 2,
    },
    tabletMobile: {
      breakpoint: { max: 1024, min: 0 },
      items: 1,
    },
  };
  const projectCards = projects.map((project) => {
    return <ProjectCard key={project.title} project={project} />;
  });
  return (
    <div className="projects-container">
      <h2>things I've made</h2>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={false}
        keyBoardControl={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {projectCards}
      </Carousel>
      <ReactSVG className="wave" src={wave} />
    </div>
  );
}
