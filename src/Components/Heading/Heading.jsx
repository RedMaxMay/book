import React from "react";
import s from "./style.module.css";

export default function Heading({ title }) {
  return <span className={s.heading}>{title}</span>;
}
