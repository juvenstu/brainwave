import {
  Benefits,
  Collaboration,
  Header,
  Pricing,
  Roadmap,
  Services,
} from "./components";
import { ButtonGradient } from "./assets/svg";
import { Hero } from "./components";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.23rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
