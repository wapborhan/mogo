import React from "react";
import Header from "./pages/header/Header";
import About from "./pages/about/About";
import Counter from "./pages/counter/Counter";
import Services from "./pages/services/Services";
import Design from "./pages/design/Design";

export default function MainComponent() {
  return (
    <div>
      <Header />
      <About />
      <Counter />
      <Services />
      <Design />
    </div>
  );
}
