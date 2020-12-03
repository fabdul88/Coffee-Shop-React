import React from "react";
import Hero from "../Hero/Hero";
import Products from "../Products/Products";
import Process from "../Process/Process";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";

export default function Index() {
  return (
    <div>
      <Hero />
      <Products />
      <Process />
      <Banner />
      <Footer />
    </div>
  );
}
