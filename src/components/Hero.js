import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";

function Hero(props) {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
      <Container fluid={true}>
        <Row className="justify-content-center py-5">
          <Col md={6} sm={10}>
            {props.title && (
              <h1 className="display-1 font-weight-bolder">{props.title}</h1>
            )}
            {props.subTitle && (
              <h3 className="display-4 font-weight-light">{props.subTitle}</h3>
            )}
            {props.date && (
              <h3 className="display-3 font-weight-light">{props.date}</h3>
            )}
            {props.text && (
              <h3 className="lead font-weight-light">{props.text}</h3>
            )}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Hero;
