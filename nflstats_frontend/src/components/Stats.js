import React, { useState, useEffect } from "react";

export default function Stats(props) {
  return (
    <>
      {props.stats.map((stat) => {
        return (
          <div key={stat.id} className="stat">
            <h2>{stat.name}</h2>
            <img src={stat.img} />
            <h2>{stat.yards}</h2>
            <h3>{stat.team}</h3>
          </div>
        );
      })}
    </>
  );
}
