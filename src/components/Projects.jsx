import EmblaCarousel from "../components/EmblaCarousel";
import "../css/base.css";
import "../css/embla.css";

const PROJECTS = [
  {
    title: "Eventstar",
    description: "A comprehensive platform for creating/managing events.",
    imageUrl: "eventstar1.png",
    technologies: [
      "TypeScript",
      "React",
      "TailwindCSS",
      "Python",
      "PostgreSQL",
      "MaterialUI",
      "Ant Design",
    ],
    link: "https://eventstar.netlify.app",
  },
  {
    title: "GeoBuddies",
    description: "A free-to-play GeoGuessr clone! Written in React.",
    imageUrl: "geoBuddies.png",
    technologies: [
      "JavaScript",
      "React",
      "Express",
      "Google Maps API",
      "NodeJS",
      "MongoDB",
      "TailwindCSS",
      "NextUI",
    ],
    link: "https://geobuddies.netlify.app",
  },
  {
    title: "AirBrb",
    description: "An Airbnb clone utilizing React Router and SPA.",
    imageUrl: "airbrb.png",
    technologies: ["JavaScript", "React", "Cypress", "MaterialUI"],
    link: "https://github.com/domdomm42/airbrb",
  },
  {
    title: "Retro Signup Page",
    description: "Signup page component written in HTML/CSS/JavaScript.",
    imageUrl: "signupPage.png",
    technologies: ["JavaScript", "CSS", "HTML"],
    link: "https://domdomm42.github.io/sign-up-design/",
  },
];

export default function Projects() {
  const OPTIONS = { loop: true, align: "start" };

  return (
    <div className="projects">
      <div className="projectDiv">
        <div className="sectionTitle">Projects</div>
        <EmblaCarousel slides={PROJECTS} options={OPTIONS} />
      </div>
    </div>
  );
}
