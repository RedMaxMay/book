import React from "react";
import s from "./style.module.css";
import authorImg from "./author.png";
import qr from "./qr.png";
import Heading from "../Heading/Heading";

export default function Author() {
  return (
    <section className={s.about_author}>
      <div className={s.about_container}>
        <div className={s.about_img}>
          <img src={authorImg} alt="Author" />
        </div>
        <div className={s.about_text}>
          <h2>
            <Heading title={"About the Author"} />
          </h2>
          <p className={s.about_descr}>
            We believe that bookstores are essential to a healthy culture.
            They’re where authors can connect with readers, where we discover
            new writers, where children get hooked on the thrill of reading that
            can last a lifetime.
          </p>

          <div className={s.about_details}>
            <div className={s.about_detail}>
              <p>02</p>
              <p>Books Published</p>
            </div>
            <div className={s.about_detail}>
              <p>4.5</p>
              <p>Users Rating</p>
            </div>
            <div className={s.about_detail}>
              <p>4</p>
              <p>Best Seller Awards </p>
            </div>
          </div>

          <div className={s.about_contacts_wrap}>
            <img src={qr} alt="qr-code" />
            <div className={s.about_contacts_info}>
              <p>John Abraham , Ph.d</p>
              <a href="mailto:johnabraham@gmail.com">
                Mail: johnabraham@gmail.com
              </a>
              <a href="tel:+21235459000">Phone: (+2) 123 545 9000</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
