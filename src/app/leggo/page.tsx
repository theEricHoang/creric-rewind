import Greeting from "../components/slides/Greeting";
import Intro from "../components/slides/Intro";
import IntroThree from "../components/slides/IntroThree";
import IntroTwo from "../components/slides/IntroTwo";

export default function LeggoPage() {
  return (
    <div className="flex flex-col">
      <Greeting />
      <Intro />
      <IntroTwo />
      <IntroThree />
    </div>
  );
}