import React from "react";
import { useParams } from "react-router-dom";
import Heading from "../../Components/Heading/Heading";
import { articlesPrev } from "../../services/articles";
import s from "./style.module.css";

export default function SingleArticlePage() {
  const { id } = useParams();

  const img = articlesPrev[id - 1].img;
  const title = articlesPrev[id - 1].title;
  const data = articlesPrev[id - 1].data;
  const mainText = articlesPrev[id - 1].text;
  const text2 = articlesPrev[id - 1].text2;
  const text3 = articlesPrev[id - 1].text3;

  return (
    <main className={s.container}>
      <h1>
        <Heading title={title} />
      </h1>
      <p className={s.data}>{data}</p>
      <p className={s.main_text}>{mainText}</p>
      <div className={s.img_wrap}>
        <img src={img} alt={title} />
      </div>
      <p>{text2}</p>
      <p>{text3}</p>
    </main>
  );
}
