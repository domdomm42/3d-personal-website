import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Robot from "../components/Robot";

export default function AboutMeAndProjects() {
  return (
    <div className="aboutMeAndProjects">
      <div className="aboutMeSection">
        <AboutMe />
        <div className="myImage">
          <Robot />
        </div>
      </div>
      <Projects />

      <a
        href="https://github.com/domdomm42?tab=repositories"
        className="githubLink"
      >
        More Projects Here
      </a>
    </div>
  );
}
