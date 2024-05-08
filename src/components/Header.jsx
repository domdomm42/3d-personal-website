import "./Header.css";
export default function Header() {
  return (
    <div className="headerContainer">
      <div className="headerItems">
        <div className="headerLeft">
          <div className="domLogo">OUDOM LIM</div>
        </div>

        <div className="headerRight">
          <div className="projectLink">Projects</div>
          <div className="contactMeLink">Contact Me</div>
        </div>
      </div>
    </div>
  );
}
