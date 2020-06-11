import React, { useEffect, useState } from "react";
import { Card, Icon } from "semantic-ui-react";

//? import css
import "./CardBlog.css";

import Img from "../../assets/new.jpg";

const CardBlog = (props) => {
  const { data } = props;
  const [element, setElement] = useState({});
  useEffect(() => {
    setElement(data);
  }, [data]);
  return (
    <Card className="card_blog_">
      <div
        className="img_card_blog"
        style={{
          backgroundImage: `url('${Img}')`,
        }}
      ></div>
      <Card.Content>
        <div className="card_flex">
          <span>{element.type}</span>
          <p>{element.typeMaladie}</p>
        </div>
        <h1>{element.title}</h1>
        <p>{element.desc}</p>
        <div className="date_card_blog">
          <div className="line"></div>
          <span>{element.date}</span>
        </div>
        <div className="card_flex">
          <p>
            <Icon name="plus" />
            Plus
          </p>
          <Icon name="heart outline" />
        </div>
      </Card.Content>
    </Card>
  );
};

export default CardBlog;
