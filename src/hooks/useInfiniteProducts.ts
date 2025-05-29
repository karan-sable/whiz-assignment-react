import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import type { Product, ProductResponse } from '../types/product'

const LIMIT = 10

export function useInfiniteProducts(disabled = false) {
  const [products, setProducts] = useState<Product[]>([])
  const [skip, setSkip] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const loaderRef = useRef<HTMLDivElement | null>(null)
  const hasFetchedOnce = useRef(false)
  const isMounted = useRef(false)

  const fetchProducts = async () => {
    if (loading) return
    setLoading(true)
    setError(null)

    try {
      const response = await axios.get(`https://dummyjson.com/products`, {
        params: { limit: LIMIT, skip },
      })

      const data: ProductResponse = response.data
      setProducts((prev) => [...prev, ...data.products])
      setSkip((prev) => prev + LIMIT)
      setHasMore(data.products.length === LIMIT)
      hasFetchedOnce.current = true
    } catch (error: any) {
      setError(
        error.message ||
          'Something went wrong while fetching products. Please refresh or try again later'
      )
      console.error('Fetch Error:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true
      fetchProducts()
    }
  }, [])

  useEffect(() => {
    if (disabled || !hasFetchedOnce.current || loading) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting && hasMore && !loading) {
          fetchProducts()
        }
      },
      { threshold: 1 }
    )

    const current = loaderRef.current
    if (current) observer.observe(current)

    return () => {
      if (current) observer.unobserve(current)
    }
  }, [loading, hasMore, disabled, skip]) // Removed fetchProducts from deps

  return { products, loading, hasMore, loaderRef, error }
}
