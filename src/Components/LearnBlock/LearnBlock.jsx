import React from "react";
import Heading from "../Heading/Heading";
import s from "./style.module.css";
import learn from "./learn.png";
import LearnItem from "../LearnItem/LearnItem";

export default function LearnBlock() {
  const learnItems = [
    {
      id: 1,
      num: "01",
      text: "Use HDFS & Map Reduce for storing & analyzing data at scale.",
    },
    {
      id: 2,
      num: "02",
      text: "Consume streaming data using Spark Streaming, Flink, and Storm.",
    },
    {
      id: 3,
      num: "03",
      text: "Choose an appropriate data storage technology for your application",
    },
    {
      id: 4,
      num: "04",
      text: "Analyze non-relational data using HBase, Cassandra, and MongoDB.",
    },
  ];

  return (
    <section className={s.learn_container}>
      <h2>
        <Heading title={"What Will You Learn?"} />
      </h2>

      <div className={s.learn_wrap}>
        <div className={s.learn_left}>
          {learnItems.map((item) => (
            <LearnItem className={s.learn_item} key={item.id} {...item} />
          ))}
        </div>

        <div className={s.learn_right}>
          <img src={learn} alt="Learning process" />
        </div>
      </div>
    </section>
  );
}
