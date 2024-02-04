import React from "react"
import { Link } from "react-router-dom";
import "./article.scss";

const Article = () => {
  return (
    <article className="article">
      <h1 className="article__title">Log in to <br /> use the app</h1>
      <p className="article__description">if you don’t an account <br /> you can <Link className="article__description-link" to="/">Register here!</Link></p>
    </article>
  )
};

export default Article;
