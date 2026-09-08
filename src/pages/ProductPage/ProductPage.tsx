import styles from "./ProductPage.module.scss"
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

type Product = {
  id: number
  name: string
  price: number
  description: string
  color?: string[]
  shafa_link: string
}
const tmpImgs = [
  "https://image-thumbs.shafastatic.net/2331104929_310_430",
  "https://image-thumbs.shafastatic.net/2331104968_310_430",
  "https://image-thumbs.shafastatic.net/2331105006_310_430",
  "https://image-thumbs.shafastatic.net/2331105005_310_430",
  "https://image-thumbs.shafastatic.net/2331105004_310_430"
]

function ProductPage() {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const apiBase = import.meta.env.VITE_API_BASE_URL || ""
  const endpoint = useMemo(() => {
    if (!id) return null
    return `${apiBase}/products/${id}`
  }, [apiBase, id])

  const prev = () => setCurrentIndex((i) => (i - 1 + tmpImgs.length) % tmpImgs.length)
  const next = () => setCurrentIndex((i) => (i + 1) % tmpImgs.length)

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

        const { name, price, description, color, shafa_link } = await res.json()
        const product: Product = {
          id: Number(id!),
          name: name,
          price: Number(price),
          description: description,
          color: color,
          shafa_link: shafa_link,
        }
        if (!ignore) setProduct(product)
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
      {/* Phone slider */}
      <div className={styles.phoneSlider}>
        <div className={styles.slider}>
          <button className={`${styles.navBtn} ${styles.left}`} onClick={prev}
                  aria-label="Previous image">‹
          </button>

          <img
            src={tmpImgs[currentIndex]}
            alt={`${product.name} ${currentIndex + 1}`}
            className={styles.phoneImage}
          />

          <button className={`${styles.navBtn} ${styles.right}`} onClick={next}
                  aria-label="Next image">›
          </button>
        </div>

        <div
          className={styles.counter}>{currentIndex + 1}/{tmpImgs.length}</div>
      </div>

      {/* Desktop images */}
      <div className={styles.imgs}>
        {tmpImgs.map((imgLink, ind) => (
          <img
            src={imgLink}
            alt={product.name}
            className={styles.image}
            key={ind}
          />
        ))}
      </div>

      <div className={styles.info}>
        <h1 className={styles.name}>{product.name}</h1>
        <div className={styles.price}>{product.price}</div>
      </div>
    </div>
  )
}

export default ProductPage;
