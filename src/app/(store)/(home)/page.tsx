import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import useApiCalls from '@/utils/api-calls'
import useFormatters from '@/utils/formatters'

const Store = async () => {
  const { formatPrice } = useFormatters()
  const { getFeaturedProdutcs } = useApiCalls()
  const [highlightedProduct, ...otherProducts] = await getFeaturedProdutcs()
  return (
    <div className="grid max-h-[860px] grid-rows-9 gap-6 overflow-hidden sm:grid-cols-9 sm:grid-rows-6">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="group relative col-span-6   row-span-6 flex justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          className="transition-transform duration-500 group-hover:scale-105"
          src={highlightedProduct.image}
          width={600}
          height={400}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
          quality={100}
          alt={''}
        />

        <div className="absolute bottom-10 right-10 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="truncate text-sm">{highlightedProduct.title}</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            {formatPrice(highlightedProduct.price)}
          </span>
        </div>
      </Link>

      {otherProducts.map((product) => {
        return (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group relative col-span-3 row-span-3 flex justify-center overflow-hidden rounded-lg bg-zinc-900"
          >
            <Image
              className="transition-transform duration-500 group-hover:scale-105"
              src={product.image}
              width={600}
              height={400}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
              quality={100}
              alt={''}
            />

            <div className="absolute bottom-1 right-1 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5 sm:bottom-10 sm:right-10">
              <span className="truncate text-xs sm:text-sm">
                {product.title}
              </span>
              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 text-xs font-semibold sm:text-sm">
                {formatPrice(product.price)}
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Store
