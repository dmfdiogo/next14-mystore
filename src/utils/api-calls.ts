import { env } from '@/env'
import { Product } from '@/types/product'

const api = (path: string, init?: RequestInit) => {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
  const apiPrefix = '/api'
  const url = new URL(apiPrefix.concat(path), baseUrl)
  return fetch(url, init)
}

const useApiCalls = () => {
  const getFeaturedProdutcs = async (): Promise<Product[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const response = await api('/products/featured', {
      next: {
        revalidate: 60 * 60,
      },
    })
    const products = await response.json()
    return products
  }

  const getProduct = async (slug: string): Promise<Product> => {
    const response = await api(`/products/${slug}`, {
      next: {
        revalidate: 60 * 60,
      },
    })
    const product = await response.json()
    return product
  }

  const searchProducts = async (query: string): Promise<Product[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const response = await api(`/products/search?q=${query}`)
    const products = await response.json()
    return products
  }

  return {
    getFeaturedProdutcs,
    getProduct,
    searchProducts,
  }
}

export default useApiCalls
