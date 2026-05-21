export default function Card({ product }: any) {
  return (
    <div className="flex flex-col justify-between bg-white rounded-xl shadow-xl p-5 border border-gray-100">
      
      <div className="bg-gray-50 h-80 flex items-center justify-center rounded-md p-5">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      <h2 className="font-semibold text-lg mt-3">
        {product.title}
      </h2>

      <p className="text-xs text-gray-400 uppercase">
        {product.category}
      </p>

      <p className="text-lg font-bold text-red-500 mt-2">
        ${product.price}
      </p>

      <p className="text-xs mt-2 line-clamp-3">
        {product.description}
      </p>
    </div>
  );
}