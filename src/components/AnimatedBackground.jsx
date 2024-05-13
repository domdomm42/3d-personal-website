import Spline from "@splinetool/react-spline";
import LoadupMessage from "./LoadupMessage";

export default function AnimatedBackground() {
  return (
    <div className="animatedBackground h-lvh w-lvw">
      <Spline scene="https://prod.spline.design/jaVfNJkKzhTUPVY4/scene.splinecode" />
      <LoadupMessage />
    </div>
  );
}
