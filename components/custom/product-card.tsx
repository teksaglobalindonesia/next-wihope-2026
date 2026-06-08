'use client'
import { useState } from 'react'
import { useCartStore } from '@/stores/use-cart-store'
import Swal from 'sweetalert2'

export default function ProductCard({
  product,
}: {
  product: any
}) {
  const [quantity, setQuantity] = useState(1)

  const carts = useCartStore(
    (state: any) => state.carts
  )

  const setCarts = useCartStore(
    (state: any) => state.setCarts
  )

  const handleAddToCart = () => {
    setCarts([
      ...carts,
      {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity,
      },
    ])
   Swal.fire({
  icon: 'success',
  title: 'Added to Cart',
  text: `${quantity} ${product.title} added to cart!`,
  timer: 1500,
  showConfirmButton: false,
})
  }

  return (
    <div className="flex flex-col justify-between bg-white rounded-xl shadow-xl hover:shadow-2xl p-5 border border-gray-100 hover:scale-[1.02] transition-all duration-300">
      <div className="bg-gray-50 h-80 flex items-center justify-center rounded-md p-5">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain hover:scale-105 transition-all duration-300"
        />
      </div>

      <h2 className="font-semibold text-lg text-gray-800 mt-4">
        {product.title}
      </h2>

      <p className="text-xs text-gray-400 mt-2 uppercase mb-2">
        {product.category}
      </p>

      

      <p className="text-lg font-bold text-green-500">
        ${product.price}
      </p>

      <hr className="border-t border-gray-300 my-3"/> 

      <div className="flex items-center gap-2 text-xs text-yellow-500 mt-2 font-medium">
        ★{product.rating.rate}

        <span className="text-gray-400 text-sm">
          •
        </span>

        <span className="text-gray-400 text-xs">
          {product.rating.count} reviews
        </span>
      </div>

      <p className="text-xs text-gray-700 line-clamp-3 mt-2 mb-4">
        {product.description}
      </p>

     <hr className="border-t border-gray-300 mb-3" />
      <div className="flex items-center justify-between gap-4 mb-4  ">
        <p className="text-sm text-gray-400 uppercase">
  Quantity
</p> 
       <div className="flex items-center gap-2">
        <button
          onClick={() =>
            quantity > 1 &&
            setQuantity(quantity - 1)
          }
          className="w-8 h-8 rounded-lg border border-gray-300 hover:bg-gray-300"
        >
          -
        </button>

        <span className="font-semibold">
          {quantity}
        </span>

        <button
          onClick={() =>
            setQuantity(quantity + 1)
          }
          className="w-8 h-8 rounded-lg border border-gray-300 hover:bg-gray-300"
        >
          +
        </button>
      </div>
      </div>
<hr className="border-t border-gray-300 mb-3" />

        <button
          onClick={handleAddToCart}
          className="flex justify-center items-center gap-2 text-md w-full font-bold text-green-500 hover:text-white hover:bg-green-500 border-2 border-green-200 hover:border-green-500 px-4 py-2 rounded-xl transition-all duration-200"
        >
          Add To Cart
        </button>
        </div>
  )
}