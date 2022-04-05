import React from "react";
import "./WorldCard.css";
export default function WorldCard(props) {
  const { name } = props;
  return <div className="world-card">{name}</div>;
}
