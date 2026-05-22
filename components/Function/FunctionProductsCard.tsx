
export default function ProductCard ({item,}: any){
    return (
<div
  key={item.id}
  className="flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-white p-5 shadow-md transition-all duration-500 ease-in-out hover:scale-[1.1]"
>
  <div className="flex h-full flex-col justify-between">
    <img
      src={item.image}
      alt={item.title}
      className="h-40 w-full object-contain"
    />

    <h2 className="mt-4 font-bold">{item.title}</h2>

    <p className="mt-1 border-b border-gray-200 text-sm text-gray-500 ">
      {item.category}
    </p>
  </div>

  <p className="mt-2 font-semibold text-green-600">${item.price}</p>

  <div className="flex">
    <p className="mt-2 text-yellow-500">⭐ {item.rating.rate}</p>

    <p className="ml-[5px] mt-2 text-gray-400">({item.rating.count})</p>
  </div>

  <p className="mt-2 text-sm text-gray-500">
    {item.description.slice(0, 80)}...
  </p>
</div>
    )
}
