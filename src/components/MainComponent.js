import React from "react";
import Header from "./pages/header/Header";
import About from "./pages/about/About";
import Counter from "./pages/counter/Counter";
import Services from "./pages/services/Services";
import Design from "./pages/design/Design";
import ServicesDesc from "./pages/services-des/ServicesDesc";
import Team from "./pages/team/Team";
import MyClients from "./pages/myclients/MyClients";
import Story from "./pages/story/Story";
import Testimonials from "./pages/testimonials/Testimonials";
import HappyClients from "./pages/happyclients/HappyClients";
import Blog from "./pages/blog/Blog";
import Map from "./pages/map/Map";
import Footer from "./pages/footer/Footer";

export default function MainComponent() {
  return (
    <div>
      <Header />
      <About />
      <Counter />
      <Services />
      <Design />
      <ServicesDesc />
      <Team />
      <MyClients />
      <Story />
      <Testimonials />
      <HappyClients />
      <Blog />
      <Map />
      <Footer />
    </div>
  );
}
