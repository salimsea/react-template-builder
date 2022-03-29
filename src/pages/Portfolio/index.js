import React, { useEffect } from "react";
import Content from "./parts/Content";
import Hero from "./parts/Hero";
import "./style.css";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <Content />
    </>
  );
};

export default Portfolio;
