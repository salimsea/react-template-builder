import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Navigation, Footer, LayoutAdm, LayoutGuest } from "src/components";
import route_guest from "src/routes/route_guest";
import { NotFound } from "src/pages";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import "./App.css";
import route_admin from "./routes/route_admin";

const App = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" name="Home Guest" element={<LayoutGuest />}>
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
        </Route>

        {localStorage.getItem("TOKEN") != null && (
          <Route
            path="/admin-console"
            name="Admin Console"
            element={<LayoutAdm />}
          >
            {route_admin.map(({ path, name, Component, exact }, key) => {
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
          </Route>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
