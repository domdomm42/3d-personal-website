import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";

export default function AboutMeAndProjects() {
  console.log("rendering about me and proj");
  return (
    <div className="aboutMeAndProjects">
      <div className="aboutMeSection">
        <AboutMe />
        <div className="myImage">
          <img src="../public/profilepic.jpg"></img>
        </div>
      </div>
      <Projects />
    </div>
  );
}
