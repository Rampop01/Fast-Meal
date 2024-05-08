import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

function SingleProductPage() {
  return (
    <div className="p-4 lg:px20 xl:px-40 h-screen flex flex-col  justify-around  md:flex-row">
      <div className="relative">
        <Image src="" alt="" fill className="object-contain" />
      </div>
    </div>
  );
}

export default SingleProductPage;
