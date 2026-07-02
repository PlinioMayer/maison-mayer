import React from "react";
import { Candle } from "./candle/candle";
import { Book } from "./book/book";

export const Table = () => (
  <div
    className="h-screen w-screen flex justify-between"
    style={{backgroundImage: "url(table.png)", padding: "100px 200px"}}
  >
    <Candle flame={1} />
    <Book />
    <Candle flame={2} />
  </div>
);
