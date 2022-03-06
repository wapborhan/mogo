import React from "react";
import Banner from "./Banner";
import Navigation from "./Navigation";
import BannerFooter from "./BannerFooter";

export default function Header() {
  return (
    <section id="header">
      <div className="header"></div>
      <div className=" container dex">
        <Navigation />
        <Banner />
        <BannerFooter />
      </div>
    </section>
  );
}
