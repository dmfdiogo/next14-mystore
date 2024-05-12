import Skeleton from '@/components/skeleton'
import React from 'react'

const StoreLoading = () => {
  return (
    <div className="grid max-h-[860px] grid-rows-9 gap-6 sm:grid-cols-9 sm:grid-rows-6">
      <Skeleton className="col-span-6 row-span-6 h-[310px] sm:h-[680px]" />
      <Skeleton className="col-span-3 row-span-3" />
      <Skeleton className="col-span-3 row-span-3" />
    </div>
  )
}

export default StoreLoading
