import React from "react";
import { Col, Container, Row } from "reactstrap";
import BigProduct from "./BigProduct/BigProduct";
import Customer from "./Customer/Customer";
import Gallery from "./Gallery/Gallery";
import "./HomePage.scss";
import Introduction from "./Introduction/Introduction";
import NewsAndBlog from "./NewsAndBlog/NewsAndBlog";

function HomePage() {
  return (
    <Container className="home-page" fluid={true}>
      <Row>
        <Introduction />
      </Row>
      <Row>
        <BigProduct />
      </Row>
      <Row>
        <Gallery />
      </Row>
      <Row>
        <Container>
          <Row>
            <Col xs="8">
              <NewsAndBlog />
            </Col>
            <Col xs="4">
              <Customer />
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
}

export default HomePage;
