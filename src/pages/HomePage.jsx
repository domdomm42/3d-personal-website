import Robot from "../components/Robot";
import Header from "../components/Header";
import "./HomePage.css";
import LoadupMessage from "../components/LoadupMessage";
import AnimatedBackground from "../components/AnimatedBackground";

export default function HomePage() {
  return (
    <>
      <Header />
      <AnimatedBackground />
      <LoadupMessage />
    </>
  );
}
