import Header from "../components/Header";
import "./HomePage.css";
import AboutMeAndProjects from "./AboutMeAndProjects";
import WavyBackground from "../components/WavyBackground";
import { TypewriterEffect } from "../components/TypewritterEffect";

export default function HomePage() {
  const words = [
    {
      text: "Hi",
      className: "text-white",
    },
    {
      text: "There",
      className: "text-white",
    },

    {
      text: "I'm",
      className: "text-white",
    },
    {
      text: "Oudom!",
      className: "text-[#2f7abf] dark:text-[#2f7abf]",
    },
  ];
  return (
    <>
      <Header />
      <div className="homePageContainer">
        <div className="landingPage">
          <WavyBackground
            backgroundFill="rgb(17, 19, 22)"
            className="max-w-4xl mx-auto pb-40"
          >
            <TypewriterEffect words={words} className="typeWritter" />
          </WavyBackground>
        </div>
        <AboutMeAndProjects />
      </div>
    </>
  );
}
