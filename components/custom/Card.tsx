import { Product } from "@/types/product"

type CardProps = {
    product: Product;
}

export default function Card({ product }: CardProps) {
    return (
        <>
            <div className="flex flex-col bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
                <div className="relative w-full aspect-[4/3] bg-slate-50 flex items-center justify-center p-3 overflow-hidden">
                    <img 
                    className="max-h-[85%] max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-300" 
                    src={product.image} 
                    alt={product.title}/>
                </div>

                <div className="flex flex-col flex-1 p-4 gap-2.5">
                    <span className="text-[11px] font-bold tracking-wider uppercase text-slate-400 block mb-0.5">{product.category}</span>
                    <h3 className="text-base font-semibold text-slate-800 line-clamp-3 min-h-[48px] leading-tight">{product.title}</h3>
                    
                    <div className="flex items-center gap-1.5 text-sm text-slate-500 font-medium">
                        <span className="text-amber-500 flex items-center">
                            ★ <span className="ml-1 text-slate-700 font-semibold">{product.rating.rate}</span>
                        </span>

                        <span className="text-slate-300">•</span>
                        <span>{product.rating.count} Reviews</span>
                    </div>

                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{product.description}</p>

                    <div className="mt-auto pt-3 flex items-center justify-between gap-2">
                        <span className="text-lg font-bold text-slate-900">
                            ${product.price}
                        </span>
                        
                        <button className="flex gap-2 text-sm font-bold text-blue-600 hover:text-white hover:bg-blue-600 border border-blue-200 hover:border-blue-600 px-4 py-2 rounded-xl transition-all duration-200 whitespace-nowrap">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                            Add to Cart
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
    
}