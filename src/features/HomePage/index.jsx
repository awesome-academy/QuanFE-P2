import React from "react";
import { Container, Row } from "reactstrap";
import BigProduct from "./BigProduct/BigProduct";
import "./HomePage.scss";
import Introduction from "./Introduction/Introduction";

function HomePage() {
  return (
    <Container className="home-page" fluid={true}>
      <Row>
        <Introduction />
      </Row>
      <Row>
        <BigProduct />
      </Row>
    </Container>
  );
}

export default HomePage;
