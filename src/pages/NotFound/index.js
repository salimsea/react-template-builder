import React, { useEffect } from "react";
import { ILNotFound } from "src/assets";
import { Footer, Navigation } from "src/components";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navigation />
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "70vh" }}
      >
        <div>
          <img src={ILNotFound} width={400} className="img-fluid" alt="" />
          <br />
          <div className="mt-5 text-center">
            <p>404 Not Found</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
