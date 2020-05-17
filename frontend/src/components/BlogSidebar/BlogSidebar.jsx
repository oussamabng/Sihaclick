import React from "react";
import { Input, Card, Icon } from "semantic-ui-react";

//? import css
import "./BlogSidebar.css";

import Img from "../../assets/new.jpg";

const BlogSidebar = () => {
  return (
    <div className="_blog_sidebar medicament_annonce">
      <Input
        action={{ icon: "search" }}
        placeholder="Chercher ton professionnelle de santé."
      />
      <div className="new_ar">
        <h1>Nouvels Articles</h1>
        <Card>
          <div
            className="img_card_blog_new"
            style={{
              backgroundImage: `url('${Img}')`,
            }}
          ></div>
          <Card.Content>
            <h3>Nous sommes les premiers qui ont presenter cette solution.</h3>
          </Card.Content>
          <Card.Meta>
            <div className="meta_new_blog">
              <h4>
                <Icon name="plus" />
                Plus
              </h4>
              <p>Mohamed Chafik</p>
              <p>1 m ago</p>
            </div>
          </Card.Meta>
        </Card>
        <Card>
          <div
            className="img_card_blog_new"
            style={{
              backgroundImage: `url('${Img}')`,
            }}
          ></div>
          <Card.Content>
            <h3>Nous sommes les premiers qui ont presenter cette solution.</h3>
          </Card.Content>
          <Card.Meta>
            <div className="meta_new_blog">
              <h4>
                <Icon name="plus" />
                Plus
              </h4>
              <p>Mohamed Chafik</p>
              <p>1 m ago</p>
            </div>
          </Card.Meta>
        </Card>
      </div>
    </div>
  );
};

export default BlogSidebar;
