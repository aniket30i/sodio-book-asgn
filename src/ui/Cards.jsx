import React from "react";
import { useBookData } from "../hooks/useBookData";

const Cards = ({ title, info }) => {
  return (
    <div className="cards">
      <h2 className="card-txt">{title}</h2>
      <p className="data-txt">{info}</p>
    </div>
  );
};

export default Cards;
