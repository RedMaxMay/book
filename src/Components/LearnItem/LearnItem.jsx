import React from "react";
import s from "./style.module.css";

export default function LearnItem({ num, text }) {
  return (
    <div className={s.learn_item}>
      <div className={s.learn_item_num}>
        <span>{num}</span>
      </div>
      <p className={s.learn_item_text}>{text}</p>
    </div>
  );
}
