import React from "react";
import IntegratedNewsLayout, { ArticleHome } from "./ArticleHome";
// import EVPopup from "../popup/page";
const Article = ({ data }) => {
  return (
    <div>
      <IntegratedNewsLayout data={data} />
      {/* <EVPopup data={data} /> */}
    </div>
  );
};

export default Article;
