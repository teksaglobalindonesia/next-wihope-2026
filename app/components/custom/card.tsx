export default function Card({ product }: any) {
  return (
          <div className="flex flex-col justify-between bg-white rounded-xl shadow-xl hover:shadow-2xl p-5 border border-gray-100 hover:scale-[1.02] transition-all duration-300">

            <div className="bg-gray-50 h-80 flex items-center justify-center rounded-md p-5">
              <img
                src={product.image}
                alt={product.title}
                className="h-full object-contain hover:scale-105 transition-all duration-300"
              />
            </div>

            <h2 className="font-semibold text-lg text-gray-800">
              {product.title}
            </h2>

            <p className="text-xs text-gray-400 mt-2 uppercase mb-2">
              {product.category}
            </p>
            <hr className="border-t border-gray-300 my-3" />

            <p className="text-lg font-bold text-red-500 ">
              ${product.price}
            </p>

            <div className="flex items-center gap-2 text-xs text-yellow-500 mt-2 font-medium ">
              ★{product.rating.rate}
              <span className="text-gray-400 text-sm">•
              </span>
              <span className="text-gray-400 text-xs">
                {product.rating.count} reviews
              </span>
            </div>

            <p className="text-xs text-gray-700 line-clamp-3 mt-2 mb-2">
              {product.description}
            </p>

            <div className="flex flex-col md:flex-row gap-4 ">
              <button className="flex justify-center items-center gap-2 text-md w-full font-bold text-yellow-500 hover:text-white hover:bg-yellow-500 border-2 border-yellow-200 hover:border-yellow-500 px-4 py-2 rounded-xl transition-all duration-200 "> <svg xmlns="http://www.w3.org/2000/svg" className="size-6" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="square" strokeWidth={2} d="M1 2h3l3 11m0 0h12l3-9M7 13l-1 4h15M7 21a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm14 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0ZM13 3v3m0 0v3m0-3h3m-3 0h-3"></path>
              </svg>Add to Cart
              </button>

              <button className=" flex justify-center items-center w-full flex gap-2 text-md font-bold text-green-600 hover:text-white hover:bg-green-600 border-2 border-green-200 hover:border-green-600 px-4 py-2 rounded-xl transition-all duration-200 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg> Buy
              </button>
            </div>
          </div>
        );
      }