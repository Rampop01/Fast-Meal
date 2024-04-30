export default function MenuItem() {
  return (
    <div className="bg-gray-300 p-4 rounded-lg text-center hover:bg-white transition-all hover:shadow-md hover:shadow-black/50">
      <div className="text-center ">
        <img
          src="jollof-rice.jpeg"
          alt="food"
          className="max-h-auto max-h-24 block mx-auto"
        />
      </div>
      <h4 className="font-bold my-4 text-xl">Jollof rice</h4>
      <p className="text-gray-500 text-sm">
        Garnished jollof rice with plantain combined with roasted chicken
      </p>
      <button className="bg-primary  text-white rounded-full py-2 px-6 mt-4 mb-4">
        Add to cart $10
      </button>
    </div>
  );
}
