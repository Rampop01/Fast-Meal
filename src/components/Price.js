"use client";
import React, { useEffect, useState } from "react";

function Price({ price, id, options }) {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price]);
  return (
    <div className="flex flex-col gap-4 ">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
      <div className="flex gap-4 min-w-[6rem]">
        {options.map((option, index) => (
          <button
            key={option.id}
            className=" border border-gray-300 rounded-xl px-6 py-2"
            style={{
              background: selected === index ? "rgb(248 113 113)" : "white",
              color: selected === index ? "white" : "black",
            }}
            onClick={() => setSelected(index)}
          >
            {option.name}
          </button>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-between w-full p-3 border border-gray-300 ">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              -
            </button>
            <span className="text-primary font-bold">{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              +
            </button>
          </div>
        </div>
        <button
          className="uppercase bg-primary    text-white font-bold;
   border border-gray-300 "
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Price;
