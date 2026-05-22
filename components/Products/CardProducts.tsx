export default function CardProducts({ item }: any) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-4 flex flex-col gap-2 hover:bg-gray-50 hover:scale-[1.02] transition-all">

      <div className="bg-gray-50 rounded-xl flex items-center justify-center h-40">
        <img
          src={item.image}
          alt={item.title}
          className="max-h-32 max-w-full object-contain"
        />
      </div>

      <span className="text-xs bg-blue-50 text-blue-500 px-2 py-0.5 rounded-full w-fit capitalize">
        {item.category}
      </span>

      <p className="text-sm font-medium text-gray-800 line-clamp-2 leading-snug">
        {item.title}
      </p>

      <p className="text-lg font-semibold text-gray-900">
        ${item.price}
      </p>

      <div className="flex items-center gap-1 text-xs text-gray-400">
        <span className="text-yellow-400">★</span>
        <span>
          {item.rating.rate} ({item.rating.count})
        </span>
      </div>

      <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}