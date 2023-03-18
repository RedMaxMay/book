import React from "react";
import BookItem from "../BookItem/BookItem";
import atomicOne from "./atomic_one.png";
import darkLight from "./the_dark_light.png";
import s from "./style.module.css";
import Heading from "../Heading/Heading";

export default function AuthorsBook() {
  const books = [
    {
      id: 1,
      title: "Atomic One’s",
      price: 13.84,
      descr:
        "As the book contains theoretical content as well as solved questions.",
      img: atomicOne,
    },
    {
      id: 2,
      title: "The Dark Light",
      price: 86.11,
      descr:
        "As the book contains theoretical content as well as solved questions.",
      img: darkLight,
    },
  ];

  return (
    <section className={s.about_container}>
      <h2>
        <Heading title={"The Author’s Book"} />
      </h2>

      <div className={s.about_books}>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </div>
    </section>
  );
}
