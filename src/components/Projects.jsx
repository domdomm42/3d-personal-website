import EmblaCarousel from "../components/EmblaCarousel";
import "../css/base.css";
import "../css/embla.css";

export default function Projects() {
  const OPTIONS = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div className="projects">
      <div className="projectDiv">
        <div className="sectionTitle">Projects</div>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
}
