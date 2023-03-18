import React from "react";
import Heading from "../Heading/Heading";
import OrderBtn from "../OrderBtn/OrderBtn";
import book from "./book.png";
import s from "./style.module.css";

export default function GetTodayBlock() {
  return (
    <div className={s.wrapper}>
      <section className={s.container}>
        <div className={s.left}>
          <h2>
            <Heading title={"Get Book Copy Today!"} />
          </h2>
          <p>
            We believe that bookstores are essential to a healthy culture.
            They’re where authors can connect with readers.
          </p>
          <OrderBtn />
        </div>
        <div className={s.right}>
          <img src={book} alt="book" />
        </div>
      </section>
    </div>
  );
}
