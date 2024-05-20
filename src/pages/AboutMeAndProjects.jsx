import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";

export default function AboutMeAndProjects() {
  return (
    <div className="aboutMeAndProjects">
      <div className="aboutMeSection">
        <AboutMe />
        <div className="myImage">
          <img src="/profilepic.jpg" alt="Profile"></img>
        </div>
      </div>
      <Projects />
    </div>
  );
}
