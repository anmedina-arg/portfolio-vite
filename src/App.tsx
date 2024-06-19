import Contact from "./sections/contact/Contact";
import Experience from "./sections/experience/Experience";
import Footer from "./sections/footer/Footer";
import Home from "./sections/home/Home";
import Nav from "../src/components/nav/Nav";
import Portfolio from "./sections/portfolio/Portfolio";
import Recomendations from "./sections/recomendations/Recomendations";
import { itemsNav } from "./components/nav/NavItems";

function App() {
  return (
    <>
      <Nav items={itemsNav} />
      <Home />
      <Experience />
      <Portfolio />
      <Recomendations />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
