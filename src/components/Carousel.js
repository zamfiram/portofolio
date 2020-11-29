import React from "react";
import Card from "../components/Card";

import picneat from "../assets/images/picneat.png";
import foodivore from "../assets/images/foodivore.png";
import songzilla from "../assets/images/songzilla.png";
import Container from "react-bootstrap/Container";
import noteboard from "../assets/images/Noteboard.png";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Pic'nEat",
          subTitle: "Team Project Wild Code School",
          imgSrc: picneat,
          link: "https://picneat.netlify.app/",
          selected: false,
        },
        {
          id: 1,
          title: "Foodivore",
          subTitle:
            "Personal project that allows searching for restaurants using the Yelp API",
          imgSrc: foodivore,
          link: "https://foodivore.netlify.app/",
          selected: false,
        },
        {
          id: 2,
          title: "Songzilla",
          subTitle:
            "Personal project that allows searching for songs using the Spotify API",
          imgSrc: songzilla,
          link: "https://songzilla.netlify.app/",
          selected: false,
        },
        {
          id: 3,
          title: "Small noteboard",
          subTitle: "A simple website to write small notes that will be saved to localStorage",
          imgSrc: noteboard,
          link: "https://small-noteboard.netlify.app/",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({ items });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
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
