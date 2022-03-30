import React, { useState } from "react";
import { NavLink as RRNavLink, Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
import { Logo } from "src/assets";
import { AiOutlineDownload } from "react-icons/ai";
import "./style.css";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="bg-primary">
        <div className="container text-center py-3">
          <span className="text-white">
            Welcome in templatebuilder.id 🇮🇩 &nbsp;use template in your project,
            &nbsp;
            <b>you see bug ?</b> contact me :)
          </span>
        </div>
      </div>
      <Navbar expand="lg" light container="fluid" className="py-4 maxWidth">
        <NavbarBrand href="/">
          <img src={Logo} className="img-fluid" alt="" />
        </NavbarBrand>
        {/* <NavbarToggler onClick={() => setIsOpen(!isOpen)} className="d-none" /> */}
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar></Nav>
          <Button onClick={props.onClick} className="btn btn-primary py-2 px-3">
            <AiOutlineDownload color="white" size={20} className="me-2" />
            Download
          </Button>
        </Collapse>
      </Navbar>
      {/* <div
        style={{
          position: "fixed",
          bottom: "0px",
          width: "100%",
          height: 100,
          zIndex: 1,
        }}
        className="d-flex justify-content-center align-items-center d-md-block d-lg-none"
      >
        <div
          className="px-5 py-3 d-flex"
          style={{ borderRadius: 50, backgroundColor: "#f17c6c" }}
        >
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: 100,
              backgroundColor: "blue",
              marginLeft: 7,
              marginRight: 7,
            }}
          />
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: 100,
              backgroundColor: "blue",
              marginLeft: 7,
              marginRight: 7,
            }}
          />
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: 100,
              backgroundColor: "blue",
              marginLeft: 7,
              marginRight: 7,
            }}
          />
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: 100,
              backgroundColor: "blue",
              marginLeft: 7,
              marginRight: 7,
            }}
          />
        </div>
      </div> */}
    </>
  );
};

export default Navigation;
