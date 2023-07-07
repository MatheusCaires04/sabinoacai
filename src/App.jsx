import { useEffect } from "react";
import Aos from "aos";

import About from "./components/About";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductsSlider from "./components/ProductsSlider";
import ButtonUp from "./components/ButtonUp";
import ButtonContact from "./components/ButtonContact";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <About />
      <ProductsSlider />
      <Footer />
      <ButtonUp />
      <ButtonContact />
    </>
  );
}

export default App;
