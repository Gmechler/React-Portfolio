import React from "react";
import { Header, Navigation, Drawer } from "react-mdl";

export default function NavBar() {
  return (
    <>
      <Header title="Grayson Mechler" scroll>
        <Navigation>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/resume">Resume</a>
          <a href="/contact">Contact Me</a>
        </Navigation>
      </Header>
      <Drawer title="Title">
        <Navigation>
          <a href="/">Link</a>
          <a href="/">Link</a>
          <a href="/">Link</a>
          <a href="/">Link</a>
        </Navigation>
      </Drawer>
    </>
  );
}
