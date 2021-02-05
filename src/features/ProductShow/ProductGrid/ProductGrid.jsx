import "./ProductGrid.scss";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import Product from "components/Product/Product";

const ProductGrid = ({ products }) => {
  const mapProducts = products.map((e, i) => (
    <Col xs="4">
      <Product
        key={i}
        title={e.name}
        link={e.link}
        price={e.price}
        original={e.original}
        tag={e.tag}
      />
    </Col>
  ));

  return (
    <Container>
      <Row>{mapProducts}</Row>
    </Container>
  );
};

export default ProductGrid;
