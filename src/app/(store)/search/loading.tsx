'use client'

import text from '@/constants/en'
import Skeleton from '@/components/skeleton'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

const QueryString = () => {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')
  return <span className="font-semibold">{query}</span>
}

const SearchLoading = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        {text.resultsFor}{' '}
        <Suspense>
          <QueryString />
        </Suspense>
      </p>

      <div className="grid grid-rows-3 gap-6 sm:grid-cols-3">
        <Skeleton className="h-[290px]" />
        <Skeleton className="h-[290px]" />
        <Skeleton className="h-[290px]" />
      </div>
    </div>
  )
}

export default SearchLoading
