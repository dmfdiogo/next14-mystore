import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import CartWidget from './cart-widget'
import SearchForm from './search-form'
import text from '@/constants/en'

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href={'/'} className="text-2xl font-extrabold text-white">
          {text.beart}
        </Link>
        <SearchForm />
      </div>

      <div className="flex items-center gap-4">
        <CartWidget />

        <div className="h-4 w-px bg-zinc-700" />

        <Link className="flex items-center gap-2 hover:underline" href={'/'}>
          <span>{text.account}</span>
          <Image
            src="https://github.com/dmfdiogo.png"
            className="h-6 w-6 rounded-full"
            width={24}
            height={24}
            alt=""
          />
        </Link>
      </div>
    </div>
  )
}

export default Header
