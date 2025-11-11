import React from "react";
import IntegratedNewsLayout, { ArticleHome } from "./ArticleHome";
import Footer from "../footer/Footer";
import Nav from "../header/Nav";
// import EVPopup from "../popup/page";
const Article = ({ data }) => {
  return (
    <div>
      <Nav/>
      <IntegratedNewsLayout data={data} />
      <Footer/>
      {/* <EVPopup data={data} /> */}
    </div>
  );
};

export default Article;
