import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="  flex flex-col lg:flex-row">
      {/* PRODUCTS CONTAINER */}
      <div className="h-1/2 p-4 flex flex-col tlg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/roasted-ponmo.jpg" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">Roasted ponmo</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/pounded-yam.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">Pounded yam</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/spag2.jpeg" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">Spaghetti</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
      </div>
      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 p-4 bg-red-100 flex flex-col gap-4  lg:h-full lg:w-1/3 lg:px-20  2xl:text-xl 2xl:gap-6 border border-red-800 shadow-2xl">
        <div className="flex justify-between">
          <span className="">Subtotal (3 items)</span>
          <span className="">$81.70</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL(INCL. VAT)</span>
          <span className="font-bold">$81.70</span>
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded-xl w-full self-end">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;
