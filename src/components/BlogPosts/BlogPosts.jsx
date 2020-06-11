import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";

import CardBlog from "../../components/CardBlog/CardBlog.jsx";

//? import css
import "./BlogPosts.css";

const BlogPosts = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(props.data);
  }, [props]);
  return (
    <Grid columns={2} className="grid_cars_blg">
      <Grid.Column>
        {data &&
          data
            .slice(0, data.length / 2)
            .map((elm, index) => <CardBlog data={elm} key={index} />)}
      </Grid.Column>
      <Grid.Column>
        {data &&
          data
            .slice(data.length / 2)
            .map((elm, index) => <CardBlog data={elm} key={index} />)}
      </Grid.Column>
    </Grid>
  );
};

export default BlogPosts;
