import React from "react";
import ArticleItem from "../ArticleItem/ArticleItem";
import Heading from "../Heading/Heading";
import article_1 from "./article_1.png";
import article_2 from "./article_2.png";
import article_3 from "./article_3.png";
import s from "./style.module.css";

export default function ArticlesBlock() {
  const articleItems = [
    {
      id: 1,
      img: article_1,
      title: "Significant reading has more info number",
      text: "Override the digital divide with additional clickthroughs from DevOps for real-time schemas.",
      data: "May 12, 2023",
    },
    {
      id: 2,
      img: article_2,
      title: "Many variations of pass majority have suffered",
      text: "Capitalize on low-hanging fruit to identify a ballpark value-added activity to beta test.",
      data: "April 23, 2023",
    },
    {
      id: 3,
      img: article_3,
      title: "Words which don’t look even slightly believable",
      text: "Podcasting operational change management inside of workflows to establish a framework.",
      data: "April 11, 2023",
    },
  ];
  return (
    <section className={s.articles_container}>
      <div className={s.articles_block_wrap}>
        <h2>
          <Heading title={"Articles & Resources"} />
        </h2>
        <div className={s.articles_wrap}>
          {articleItems.map((article) => (
            <ArticleItem key={article.id} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}
