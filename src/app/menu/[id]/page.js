"use client";
import { featuredProducts } from "../../../data";
import Image from "next/image";
import React from "react";
import Price from "../../../components/Price";
function SingleProductPage({ params }) {
  const id = params.id;
  const currentProduct = featuredProducts.filter((food) => food.id == id)[0];
  return (
    <div className="p-4 lg:px-20 xl:px-40 h- flex flex-col justify-between md:flex-row gap-20 mt-8 md:items-center  ">
      <div className="relative w-full h-1/2 md:h-[70%]">
        <Image
          src={currentProduct.img}
          alt={currentProduct.title}
          height={400}
          width={400}
          className="object-contain "
        />
      </div>
      <div className="h-1/2 flex flex-col gap-4 -mt-28 md:mt-1">
        <h1 className="text-3xl font-bold uppercase">{currentProduct.title}</h1>
        <p>{currentProduct.description}</p>
        <Price
          price={currentProduct.price}
          id={currentProduct.id}
          options={currentProduct.options}
        />
      </div>
    </div>
  );
}

export default SingleProductPage;
