import React from "react";
import OrderBtn from "../../Components/OrderBtn/OrderBtn";
import s from "./style.module.css";
import bookCover from "./the_dark_light_book_cover.png";

export default function HomePage() {
  return (
    <main className={s.main}>
      <div className={s.main_container}>
        <div className={s.main_left}>
          <h1>Welcome To Pages!</h1>

          <p className={s.main_slogan}>
            Your Books From <br /> The Best Writer.
          </p>
          
          <p className={s.main_left_text}>
            We believe that reading books are essential to a healthy culture.
            They’re where authors can connect with readers.
          </p>

          <div className={s.main_btns}>
            <OrderBtn />
            <a className={s.main_demo_link} href="#">Read Free Demo</a>
          </div>

          <div className={s.main_features}>
            <div className={s.main_feature_item}>
              <p>Pages:</p>
              <p>250 pages</p>
            </div>
            <div className={s.main_feature_item}>
              <p>Length:</p>
              <p>10 hours</p>
            </div>
            <div className={s.main_feature_item}>
              <p>Rating:</p>
              <p>4.5/5 (305 ratings)</p>
            </div>
          </div>
        </div>

        <div className={s.main_right}>
          <img
            className={s.main_img}
            src={bookCover}
            alt="'The Dark light' Book cover "
          />
        </div>

      </div>
    </main>
  );
}
