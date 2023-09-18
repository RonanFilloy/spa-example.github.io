import React from "react";
import "../styles/History.css";
import Carousel from "./Carousel";

function History() {
  return (
    <section id="history" className="history">
      <div className="title">
        <h1>
          01.<span>History</span>
        </h1>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, nam hic
        dolorum ut non maiores est at reprehenderit quibusdam veritatis repellat
        laborum, quis corrupti consequatur perferendis tempore sed ipsam
        dolores!
      </p>
      <Carousel />
    </section>
  );
}

export default History;
