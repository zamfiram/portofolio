import React from "react";
import { useSpring, animated } from "react-spring";
import { Badge } from "react-bootstrap";

function CardInfo(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div className="g-card-info" style={style}>
      <p className="g-card-title">{props.title}</p>
      <p className="g-card-sub-title">{props.subTitle}</p>
      <p>
        <Badge pill variant="dark">
          {props.date}
        </Badge>
      </p>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        View project
      </a>
    </animated.div>
  );
}

export default CardInfo;
