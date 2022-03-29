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
import "./style.css";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Navbar expand="lg" light container="md" className="py-4">
        <NavbarBrand href="/">
          <img src={Logo} width="50" className="img-fluid" alt="" />
        </NavbarBrand>
        {/* <NavbarToggler onClick={() => setIsOpen(!isOpen)} className="d-none" /> */}
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem active>
              <NavLink to="/" tag={RRNavLink}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/portfolio" tag={RRNavLink}>
                Portfolio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/blog"
                onClick={() =>
                  (window.location = "https://salim-tekno.blogspot.com/")
                }
                tag={RRNavLink}
              >
                Blog
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/tools" tag={RRNavLink}>
                Tools
              </NavLink>
            </NavItem>
          </Nav>
          <Button
            onClick={() =>
              window.location.replace(
                "https://wa.me/6282112235774?text=Assalamualaikum%20Warahmatullahi%20Wabarakatuh"
              )
            }
            className="btn-costum-primary-outline ms-4 px-5"
          >
            CONTACT ME
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
