import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="hero lg:flex-row">
      <div className="md:py-12  ">
        <h1 className="text-4xl font-semibold">
          Elevate your <br /> dining experience <br />
          with
          <span className="text-primary"> Fast meal</span>
        </h1>
        <p className="mt-4 text-gray-600">
          ensuring every bite is a moment of culinary bliss. Say goodbye to long
          waits and hello to instant satisfaction!
        </p>
        <div className="flex gap-4 mt-8">
          <button className="bg-primary uppercase gap-2 rounded-full px-4 py-2 text-white flex items-center text-sm">
            Order now <Right />
          </button>
          <button className="flex gap-2 py-2 text-grey-600 font-semibold">
            Learn more <Right />
          </button>
        </div>
      </div>
      <div className="md:flex">
        <Image
          src={"/hero-rice.jpg"}
          alt={"food"}
          width={200}
          height={200}
          className="object-cover w-full "
        />
      </div>
    </section>
  );
}
