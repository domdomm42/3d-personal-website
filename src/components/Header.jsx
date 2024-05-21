export default function Header() {
  const handleScrollToProject = () => {
    const section = document.getElementById("aboutMeId");
    section.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToTop = () => {
    const section = document.getElementById("initialPageSection");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="headerContainer">
      <div className="headerLeft">
        <button onClick={handleScrollToTop} className="nameGradient">
          LIM OUDOM
        </button>
      </div>

      <div className="headerRight">
        <button onClick={handleScrollToProject} className="projectLink">
          Projects
        </button>
        <div className="contactMeLink">
          <a href="mailto:limoudom2001@gmail.com">Contact Me</a>
        </div>
      </div>
    </div>
  );
}
