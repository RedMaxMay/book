import React from "react";
import s from "./style.module.css";

export default function OrderBtn({ modalToggle }) {
  return (
    <button onClick={modalToggle} className={s.btn}>
      Order Today
    </button>
  );
}
