import { ReactElement } from "react";

import Contact from "./sections/contact/Contact";
import Experience from "./sections/experience/Experience";
import Footer from "./sections/footer/Footer";
import Home from "./sections/home/Home";
import Nav from "../src/components/nav/Nav";
import Portfolio from "./sections/portfolio/Portfolio";
import Recomendations from "./sections/recomendations/Recomendations";
// import Blog from "./components/blog/Blog";

import { itemsNav } from "./mockData/navItems";

function App(): ReactElement {
  return (
    <>
      <Nav items={itemsNav} />
      <Home />
      {/* <Blog /> */}
      <Portfolio />
      <Experience />
      <Recomendations />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
