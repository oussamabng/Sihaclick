import React from "react";
import { Grid } from "semantic-ui-react";

import HeaderOnScroll from "../../components/HeaderOnScroll/HeaderOnScroll.jsx";
import NavigationBlog from "../../components/NavigationBlog/NavigationBlog.jsx";
import HeroBlog from "../../components/HeroBlog/HeroBlog.jsx";
import BlogPosts from "../../components/BlogPosts/BlogPosts.jsx";
import BlogSidebar from "../../components/BlogSidebar/BlogSidebar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Blog = () => {
  return (
    <>
      <HeaderOnScroll header={false} isLogin={false} />
      <NavigationBlog />
      <Grid
        stackable
        columns={2}
        style={{
          margin: "0 2rem",
        }}
      >
        <Grid.Column width={12}>
          {/* HERO SECTION AND BLOG POSTS */}
          <HeroBlog />
          <BlogPosts />
        </Grid.Column>
        <Grid.Column width={4}>
          <BlogSidebar />
          {/* SIDEBAR BLOG */}
        </Grid.Column>
      </Grid>
      <Footer />
    </>
  );
};

export default Blog;
