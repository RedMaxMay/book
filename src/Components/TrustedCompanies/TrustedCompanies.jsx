import React from "react";
import Heading from "../Heading/Heading";
import TrustedCompanyItem from "../TrustedCompanyItem/TrustedCompanyItem";
import amazen from "./amazen.png";
import megan_books from "./megan_books.png";
import megank from "./megank.png";
import urban_store from "./urban_store.png";
import s from "./style.module.css";

export default function TrustedCompanies() {
  const companies = [
    {
      img: amazen,
      title: "Amazen Corp.",
      text: "They has been helping readers, music lovers, and videophiles find quality material.",
    },
    {
      img: megan_books,
      title: "Megan Books",
      text: "We help physical bookstores manage their overstock to the book inventory.",
    },
    {
      img: megank,
      title: "Megank",
      text: "Bookstore serving up the full spectrum of Black literature and wine black books.",
    },
    {
      img: urban_store,
      title: "Urban Store",
      text: "We also carry the latest records, issues of all of your favorite comic books.",
    },
  ];

  return (
    <section className={s.trusted_container}>
      <h1>
        <Heading title={"Trusted By The Best"} />
      </h1>

      <div className={s.trusted_companies_list}>
        {companies.map((company) => (
          <TrustedCompanyItem key={company.title} {...company} />
        ))}
      </div>
    </section>
  );
}
