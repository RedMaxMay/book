import React from "react";
import s from "./style.module.css";

export default function TrustedCompanyItem({ img, title, text }) {
  return (
    <div className={s.company_item}>
      <div className={s.company_logo_wrap}>
        <img
          src={img}
          alt="Trusted company's logo"
          className={s.company_logo}
        />
      </div>
      <p className={s.company_title}>{title}</p>
      <p className={s.company_text}>{text}</p>
    </div>
  );
}
