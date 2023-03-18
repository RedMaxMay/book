import React from "react";
import { Link } from "react-router-dom";
import s from "./style.module.css";

export default function ArticleItem({ id, img, title, text, data }) {
  return (
    <Link className={s.article_item} to={`/articles/${id}`}>
      <div className={s.article_img_wrap}>
        <img src={img} alt={title} />
      </div>
      <div className={s.article_text}>
        <p className={s.article_data}>{data}</p>
        <h5 className={s.article_title}>{title}</h5>
        <p className={s.article_description}>{text}</p>
      </div>
    </Link>
  );
}
