import React from "react";
import About from "../Components/Home/About/About";
import Contact from "../Components/Home/Contact/Contact";
import Footer from "../Components/Home/Footer/Footer";
import Header from "../Components/Home/Header/Header";
import Services from "../Components/Home/Services/Services";
import ServicesPack from "../Components/Home/ServicesPack/ServicesPack";
import Testimonials from "../Components/Home/Testimonials/Testimonials";

const Home = () => {
  return (
    <main>
      <Header />
      <About />
      <Services />
      <ServicesPack />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
