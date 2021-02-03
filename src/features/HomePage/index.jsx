import React from "react";
import { Col, Container, Row } from "reactstrap";
import BigProduct from "./BigProduct/BigProduct";
import Customer from "./Customer/Customer";
import Gallery from "./Gallery/Gallery";
import "./HomePage.scss";
import Introduction from "./Introduction/Introduction";
import NewsAndBlog from "./NewsAndBlog/NewsAndBlog";
import SlideProduct from "./SlideProduct/SlideProduct";
import Title from "components/Title/Title";

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
        <Col>
          <Title title="SẢN PHẨM MỚI" />
        </Col>
      </Row>
      <Row>
        <SlideProduct />
      </Row>
      <Row>
        <Gallery />
      </Row>
      <Row>
        <Col>
          <Title title="SẢN PHẨM BÁN CHẠY" />
        </Col>
      </Row>
      <Row>
        <SlideProduct />
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
