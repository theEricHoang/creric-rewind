import Greeting from "../components/slides/Greeting";
import Intro from "../components/slides/Intro";

export default function LeggoPage() {
  return (
    <div className="flex flex-col">
      <Greeting />
      <Intro />
    </div>
  );
}