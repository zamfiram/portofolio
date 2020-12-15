import React from "react";
import Card from "../components/Card";
import { Row, Container } from "react-bootstrap";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/projects")
      .then(response => response.json())
      .then(data => this.setState({ items: data }));
  }

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around col-md-auto">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
