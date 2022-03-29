import React from "react";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "src/pages";
import route_guest from "src/routes/route_guest";
import { Footer, Navigation } from "../index";

const LayoutGuest = () => {
  return (
    <>
      {/* <Navigation /> */}
      <Routes>
        {route_guest.map(({ path, name, Component, exact }, key) => {
          return (
            <Route
              key={key}
              exact={exact}
              path={path}
              name={name}
              element={<Component />}
            />
          );
        })}
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default LayoutGuest;
