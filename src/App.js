import React from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

function App() {
  return (
    <>
      <div className="demo-big-content">
        <Layout>
          <Header title="Title" scroll>
            <Navigation>
              <a href="/">Link</a>
              <a href="/">Link</a>
              <a href="/">Link</a>
              <a href="/">Link</a>
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
          <Content>
            <h1>Hello World</h1>
            <div className="page-content" />
          </Content>
        </Layout>
      </div>
    </>
  );
}

export default App;
