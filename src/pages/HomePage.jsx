import Robot from "../components/Robot";
import Header from "../components/Header";
import "./HomePage.css";
import LoadupMessage from "../components/LoadupMessage";
import AnimatedBackground from "../components/AnimatedBackground";

export default function HomePage() {
  return (
    // <div className="homePageContainer">
    //   <div className="headerContainer">
    //     <Header />
    //   </div>
    //   <div className="contentContainer">
    //     <div className="robotAndMessageContainer">
    //       {/* <div className="homePageBio">
    //         I am a recent UNSW graduate and a lover of learning and technology.
    //         I've studied and worked across diverse fields ranging from AI to
    //         Cybersecurity. Beyond tech, I'm into perfecting my craft through
    //         BJJ, Muay Thai, Boxing, and weightlifting. I find that keeping
    //         active helps me not only physically but also improves my mood and
    //         mental clarity.
    //       </div> */}
    //       <LoadupMessage />
    //       <Robot />
    //     </div>
    //   </div>
    // </div>
    <>
      <Header />
      <AnimatedBackground />
      <LoadupMessage />
    </>
  );
}
