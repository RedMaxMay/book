import React, { useState } from "react";
import Heading from "../Heading/Heading";
import s from "./style.module.css";

export default function OrderModal({ modalToggle }) {
  const [successModal, setSuccessModal] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSuccessModal((prev) => !prev);
  };
  return (
    <div className={s.modal_wrap}>
      <div onClick={modalToggle} className={s.modal_backdrop}></div>

      {successModal ? (
        <div className={s.modal_form}>
          <p className={s.modal_thank}>Thank you for your order!</p>
          <p className={s.modal_message}>We will send all the information on your email!</p>
          <span onClick={modalToggle} className={s.modal_close}>
            ╳
          </span>
        </div>
      ) : (
        <form onSubmit={onSubmit} className={s.modal_form}>
          <h2>
            <Heading title={"Order detail"} />
          </h2>
          <label htmlFor="name">Full name:</label>
          <input
            required
            autoFocus
            type="text"
            placeholder="Full name..."
            id="name"
          />
          <label htmlFor="email">Email:</label>
          <input
            required
            type="email"
            name=""
            id="email"
            placeholder="Email..."
          />
          <button className={s.btn}>Order</button>
          <span onClick={modalToggle} className={s.modal_close}>
            ╳
          </span>
        </form>
      )}
    </div>
  );
}
