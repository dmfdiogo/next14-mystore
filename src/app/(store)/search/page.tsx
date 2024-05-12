import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { redirect } from 'next/navigation'
import useApiCalls from '@/utils/api-calls'
import useFormatters from '@/utils/formatters'
import text from '@/constants/en'

interface SearchProps {
  searchParams: {
    q: string
  }
}

const Search = async ({ searchParams }: SearchProps) => {
  const { q: query } = searchParams

  const { formatPrice } = useFormatters()
  const { searchProducts } = useApiCalls()

  if (!query) {
    redirect('/')
  }

  const products = await searchProducts(query)

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        {text.resultsFor} <span className="font-semibold">{query}</span>
      </p>

      <div className="grid grid-rows-3 gap-6 sm:grid-cols-3">
        {products.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group relative flex justify-center overflow-hidden rounded-lg bg-zinc-900"
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
    </div>
  )
}

export default Search
