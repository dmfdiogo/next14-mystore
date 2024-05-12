/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Image from 'next/image'
import useApiCalls from '@/utils/api-calls'
import { Metadata } from 'next'
import AddToCartButton from '@/components/add-to-cart-button'
import useFormatters from '@/utils/formatters'
import text from '@/constants/en'

interface ProductProps {
  params: {
    slug: string
  }
}

const { getProduct } = useApiCalls()

export const generateMetadata = async ({
  params,
}: ProductProps): Promise<Metadata> => {
  const { getProduct } = useApiCalls()
  const product = await getProduct(params.slug)
  return {
    title: product.title,
  }
}

export const generateStaticParams = () => {
  return [{ slug: 'product-1' }]
}

const ProductPage = async ({ params }: ProductProps) => {
  const { formatPrice } = useFormatters()
  const product = await getProduct(params.slug)

  return (
    <div className="relative grid max-h-[860px] grid-rows-3 sm:grid-cols-3">
      <div className="col-span-2 ">
        <Image
          src={product.image}
          alt={''}
          width={600}
          height={400}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
          quality={100}
        />
      </div>
      <div className="mt-24 flex flex-col justify-center px-12 sm:mt-0">
        <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>
        <p className="mt-2 leading-relaxed text-zinc-400">
          {product.description}
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="flex items-center justify-center rounded-full bg-violet-500 px-5 py-2.5">
            {formatPrice(product.price)}
          </span>
          <span className="text-sm text-zinc-400">{text.buyItNow}</span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">{text.sizes}</span>
          <div className="flex gap-2">
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              {text.size.s}
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              {text.size.m}
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              {text.size.l}
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              {text.size.xl}
            </button>
          </div>
        </div>

        <AddToCartButton productId={product.id} />
      </div>
    </div>
  )
}

export default ProductPage
