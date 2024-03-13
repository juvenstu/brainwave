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
import Footer from "./components/Footer";

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
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
