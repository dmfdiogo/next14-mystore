const useFormatters = () => {
  const formatPrice = (price: number) => {
    return price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    })
  }
  return {
    formatPrice,
  }
}

export default useFormatters
