/* eslint-disable @next/next/no-img-element */
import { env } from '@/env'
import useApiCalls from '@/utils/api-calls'
import { ImageResponse } from 'next/og'
import colors from 'tailwindcss/colors'

// Image metadata
export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export const OgImage = async ({ params }: { params: { slug: string } }) => {
  const { getProduct } = useApiCalls()
  const product = await getProduct(params.slug)

  const productImageURL = new URL(product.image, env.APP_URL).toString()

  return new ImageResponse(
    (
      <div
        style={{
          background: colors.zinc[950],
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img src={productImageURL} alt="" style={{ width: '100%' }} />
      </div>
    ),
  )
}

export default OgImage
