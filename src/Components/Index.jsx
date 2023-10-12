import React from "react";
import Navigation from "./Navigation";
import Home from "./Home";
import Description from "./Description";
import Process from "./Process";
import Portfolio from "./Portfolio";
import Work from "./Work";
import Blog from "./Blog";
import Experience from "./Experience";
import Client from "./Client";
import Testimonial from "./Testimonial";
import Discuss from "./Discuss";
import Footer from "./Footer";

function Index() {
  return (
    <div>
      <Navigation />
      <Home />
      <Process />
      <Portfolio />
      <Work />
      <Blog />
      <Experience />
      <Client />
      <Testimonial />
      <Discuss />
      <Footer />
    </div>
  );
}

export default Index;
