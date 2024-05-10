import Image from "next/image";
import { featuredProducts } from "../../data";
import Link from "next/link";

export default function MenuItem() {
  return (
    <div className="grid sm:grid-cols-3 gap-4 mt-24  ">
      {featuredProducts.map((item) => (
        <Link href={`/menu/${item.id}`}>
          <div
            key={item.id}
            className="text-center bg-white
             p-4 rounded-lg hover:bg-white transition-all hover:border-primary hover:shadow-md  border shadow-md gap-4  "
          >
            <Image
              src={item.img}
              alt={item.title}
              className="max-h-40 block mx-auto relative object-contain hover:rotate-[180deg] transition-all top-2 duration-500"
              width={400}
              height={400}
            />

            <div className="flex flex-col items-center">
              <h4 className="font-bold my-4 text-xl">{item.title}</h4>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </div>
            <button className="bg-primary text-white rounded-full py-2 px-6 mt-4 mb-4">
              Add to cart ${item.price}
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}
