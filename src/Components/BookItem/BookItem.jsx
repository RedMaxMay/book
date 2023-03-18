import React from "react";
import s from "./style.module.css";

export default function BookItem({ title, price, descr, img, alt }) {
  return (
    <div className={s.book}>
      <div className={s.book_img_wrap}>
        <img className={s.book_img} src={img} alt={alt} />
      </div>
      <div className={s.book_info}>
        <h5 className={s.book_title}>{title}</h5>
        <p className={s.book_price}> $ {price} USD</p>
        <p className={s.book_descr}>{descr}</p>
        <p className={s.book_type}>Printed Book</p>
      </div>
    </div>
  );
}
