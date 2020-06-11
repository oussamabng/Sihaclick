import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";

import "./Blog.css";

import HeaderOnScroll from "../../components/HeaderOnScroll/HeaderOnScroll.jsx";
import NavigationBlog from "../../components/NavigationBlog/NavigationBlog.jsx";
import HeroBlog from "../../components/HeroBlog/HeroBlog.jsx";
import BlogPosts from "../../components/BlogPosts/BlogPosts.jsx";
import BlogSidebar from "../../components/BlogSidebar/BlogSidebar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Blog = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([
      {
        type: "santé",
        typeMaladie: "maladies chroniques",
        title: "nous sommes les premiers qui ont presenter cette solution.",
        desc: " Lorem Ipsum passages, and more recently with",
        date: "12 Avril 2020",
        liked: false,
      },
      {
        type: "santé",
        typeMaladie: "maladies chroniques",
        title: "nous sommes les premiers qui ont presenter cette solution.",
        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with",
        date: "12 Avril 2020",
        liked: false,
      },
      {
        type: "santé",
        typeMaladie: "maladies chroniques",
        title: "nous sommes les premiers qui ont presenter cette solution.",
        desc:
          "Lorem Ipsum is simply dummy text of  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with",
        date: "12 Avril 2020",
        liked: false,
      },
      {
        type: "santé",
        typeMaladie: "maladies chroniques",
        title: "nous sommes les premiers qui ont presenter cette solution.",
        desc:
          "Lorem Ipsum is simply Lorem Ipsum is simplyLorem Ipsum is simplyLorem Ipsum is simplyLorem Ipsum is simplyLorem Ipsum is simplyLorem Ipsum is simplyLorem Ipsum is simplyLorem Ipsum is simplyLorem Ipsum is simplyLorem Ipsum is simplyLorem Ipsum is simplyLorem Ipsum is simplyLorem Ipsum is simplyLorem Ipsum is simplyLorem Ipsum is simplyLorem Ipsum is simplyLorem Ipsum is simplyLorem Ipsum is simplyLorem Ipsum is simplyLorem Ipsum is simplyLorem Ipsum is simplyLorem Ipsum is simplyLorem Ipsum is simplyLorem Ipsum is simplyLorem Ipsum is simplyLorem Ipsum is simplyLorem Ipsum is simplyLorem Ipsum is simplyLorem Ipsum is simplydummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with",
        date: "12 Avril 2020",
        liked: false,
      },
    ]);
    //* tempData
  }, []);
  return (
    <>
      <HeaderOnScroll header={false} isLogin={false} />
      <NavigationBlog />

      <Grid
        className="blog_grid"
        stackable
        columns={2}
        style={{
          margin: "0 2rem",
        }}
      >
        <Grid.Column className="hero">
          <HeroBlog />
          <div className="Title_blogs">
            <h1>Les Plus Apercus</h1>
            <div className="line"></div>
          </div>
          <BlogPosts data={data} />
        </Grid.Column>
        <Grid.Column className="sidebar">
          <BlogSidebar />
        </Grid.Column>
      </Grid>
      <Footer />
    </>
  );
};

export default Blog;
