import React from "react";
import { Link } from "react-router-dom";
import img from "./404.jpg";
import s from "./style.module.css";

export default function NotFoundPage() {
  return (
    <main className={s.main}>
      <div className={s.main_container}>
        <img src={img} alt="404 error" />
        <h1>Page Not Found :( </h1>
        <Link to="/">Go Home</Link>
      </div>
    </main>
  );
}
