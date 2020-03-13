import React from "react";
import { Layout, Content } from "react-mdl";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Landing from "./components/pages/Landing";
import Projects from "./components/pages/Projects";
import Resume from "./components/pages/Resume";

export default function App() {
  return (
    <>
      <div className="demo-big-content">
        <Layout>
          <Router>
            <NavBar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/Projects" component={Projects} />
            <Route exact path="/Resume" component={Resume} />
          </Router>
          <Content>
            <div className="page-content" />
          </Content>
        </Layout>
      </div>
    </>
  );
}
