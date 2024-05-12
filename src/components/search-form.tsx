'use client'

import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

const SearchForm = () => {
  const router = useRouter()

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const data = Object.fromEntries(formData)

    const query = data.q

    if (!query) {
      return null
    }

    router.push(`/search?q=${query}`)
  }
  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
    >
      <Search className="flex h-5 w-5 text-zinc-500 " />
      <input
        required
        name="q"
        placeholder="Buscar"
        className="flex w-[70px] bg-transparent text-sm outline-none placeholder:text-zinc-500 sm:w-[320px]"
      />
    </form>
  )
}

export default SearchForm
