import React from "react";
import { Dashboard } from "src/pages";
import "./style.css";
const Test = () => {
  return (
    <>
      <section className="sidebar">
        <div className="content">
          <h1>menu</h1>
          <div className="menu">
            <div className="item">Dashboard</div>
            <div className="item">Manage Portfolio</div>
            <div className="item">Manage Blog</div>
            <div className="item">Settings Page</div>
            <div className="item">Logout</div>
          </div>
        </div>
      </section>
      <main className="main-wrapper">
        <div className="container-fluid">
          <Dashboard />
        </div>
      </main>
    </>
  );
};

export default Test;
