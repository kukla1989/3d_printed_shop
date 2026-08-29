import styles from "./ProductPage.module.scss"
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

type Product = {
  id: string | number
  name: string
  price: number
  imageUrl: string
}

function ProductPage() {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const apiBase = import.meta.env.VITE_API_BASE_URL || ""
  const endpoint = useMemo(() => {
    if (!id) return null
    const base = apiBase ? apiBase.replace(/\/$/, "") : ""
    const path = `/products/${id}`
    return base ? `${base}${path}` : `/api${path}`
  }, [apiBase, id])

  useEffect(() => {
    let ignore = false

    async function load() {
      if (!endpoint) return
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(endpoint, {
          headers: {
            "Accept": "application/json",
            'abypass-tunnel-reminder': 'true'
          }
        })
        if (!res.ok) throw new Error(`Failed to load product: ${res.status}`)

        const data = await res.json()
        const mapped: Product = {
          id: data.id ?? id!,
          name: data.title ?? "",
          price: Number(data.price),
          imageUrl: data.imageUrl ?? "",
        }
        if (!ignore) setProduct(mapped)
      } catch (e: any) {
        if (!ignore) setError(e.message || "Unknown error")
      } finally {
        if (!ignore) setLoading(false)
      }
    }

    load()
    return () => {
      ignore = true
    }
  }, [endpoint, id])

  if (!id) {
    return <div className={styles.productPage}>No product id provided</div>
  }

  if (loading) {
    return <div className={styles.productPage}>Loading…</div>
  }

  if (error) {
    return <div className={styles.productPage}>Error: {error}</div>
  }

  if (!product) {
    return <div className={styles.productPage}>Product not found</div>
  }

  return (
    <div className={styles.productPage}>
      <div className={styles.media}>
        {product.imageUrl ? (
          <img src={product.imageUrl} alt={product.name}
               className={styles.image} />
        ) : (
          <div className={styles.imagePlaceholder}>No image</div>
        )}
      </div>
      <div className={styles.info}>
        <h1 className={styles.name}>{product.name}</h1>
        <div className={styles.price}>{product.price}</div>
      </div>
    </div>
  )
}

export default ProductPage;
