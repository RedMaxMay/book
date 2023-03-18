import React from "react";
import s from "./style.module.css";
import AuthorsBook from "../../Components/AuthorsBook/AuthorsBook";
import Author from "../../Components/Author/Author";

export default function AboutPage() {
  return (
    <main className={s.about}>
      <AuthorsBook />
      <Author />
    </main>
  );
}
