import Header from "../components/Header";
import "./HomePage.css";
import LoadupMessage from "../components/LoadupMessage";
import AnimatedBackground from "../components/AnimatedBackground";
import AboutMeAndProjects from "./AboutMeAndProjects";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="homePageContainer">
        <div className="landingPage">
          <LoadupMessage />
          <AnimatedBackground />
        </div>
        <AboutMeAndProjects />
      </div>
    </>
  );
}
