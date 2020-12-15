import React, {useState} from "react";
import CardInfo from "../components/CardInfo";

function Card(props) {
  const [isHover, setIsHover] = useState(false)
  function handleMouseOver() {
    setIsHover(true);
  }
  function handleMouseLeave() {
    setIsHover(false);
  }
  return (
    <div
      className="d-inline-block g-card"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className="g-card-image"
        src={props.item.url_image}
        alt={props.item.url_image}
      />
      {isHover ? <CardInfo
          title={props.item.title}
          subTitle={props.item.description}
          date={props.item.date_publication}
          link={props.item.lien}
        />
      :
      <></>
      }
    </div>
  );
}

export default Card;
