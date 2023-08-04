import { pizzas } from "../assets/data/MenuPage.js";

import React from "react";

function MenuList() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-wrap text-red-600 ">
        {pizzas.map((item) => (
          <div
            className="w-full h-[60vh]  sm:w-1/2 lg:w-1/3 p-4 border border-red-200 "
            href={`/product/${item.id}`}
            key={item.id}
          >
            {item.img && (
              <div className="h-[80%] relative -z-10">
                <img
                  src={item.img}
                  alt=""
                  className="object-contain h-full w-full"
                ></img>
                <div className="flex items-center justify-between font-bold">
                  <h1>{item.title}</h1>
                  <h1>${item.price}</h1>
                  <button className="text-white bg-red-500 p-2 rounded-md hover:bg-red-800">
                    order
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuList;
