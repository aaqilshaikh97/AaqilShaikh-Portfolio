import React from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import Home from "../layout/home";
import About from "../layout/about";
import Contact from "../layout/contact";
import Portfolio from "../layout/Portfolio";
function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </RouterRoutes>
  );
}

export default Routes;
