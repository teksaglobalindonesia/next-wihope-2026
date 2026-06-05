'use client'

import { useEffect, useState } from 'react'
import ProductCard from './product-card'

export default function Product() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        'https://fakestoreapi.com/products'
      )

      const data = await response.json()

      setProducts(data)
    }

    getProducts()
  }, [])

  return (
    <div>
      <div className="w-full h-[308px] px-[144px] py-[96px] bg-neutral-silver flex items-center justify-center">
        <div className="flex flex-col items-center gap-[32px]">
          <h1 className="font-inter font-semibold text-[64px] leading-[76px] text-center text-neutral-d-grey">
            Product
          </h1>

          <p className="font-inter text-[16px] leading-[24px] text-center text-neutral-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed sit amet justo ipsum.
          </p>
        </div>
      </div>

      <div className="px-[144px] py-[64px]">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {products.map((product: any) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  )
}