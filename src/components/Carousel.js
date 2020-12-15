import React from "react";
import Card from "../components/Card";
import { Row, Container } from "react-bootstrap";
// import picneat from "../assets/images/picneat.png";
// import foodivore from "../assets/images/foodivore.png";
// import songzilla from "../assets/images/songzilla.png";
// import noteboard from "../assets/images/Noteboard.png";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

    // items[id].selected = items[id].selected ? false : true;

    // items.forEach((item) => {
    //   if (item.id !== id) {
    //     item.selected = false;
    //   }
    // });

    // this.setState({ items });
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
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
