import styles from "./AddProductPage.module.scss"
import { useState } from "react";
import ErrorModal from "../../components/ErrorModal/ErrorModal.tsx";
import { useNavigate } from "react-router-dom";

function AddProductPage() {
  const [shafaLink, setShafaLink] = useState("")
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleShafaAdd = async () => {
    if (!shafaLink) {
      setError('будь-ласка введіть ссилку')
      return
    }

    try {
      setError(null)
      const rawBase = import.meta.env.VITE_API_BASE_URL || 'https://3db.romankyk.workers.dev'
      const base = String(rawBase).replace(/\/$/, '')
      const url = `${base}/products/add`

      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'abypass-tunnel-reminder': 'true'
        },
        body: JSON.stringify({ link: shafaLink })
      })

      if (!res.ok) {
        let msg = `Помилка додавання: ${res.status}`
        try {
          const errData = await res.json()
          if (errData && (errData.message || errData.error)) {
            msg = String(errData.message || errData.error)
          }
        } catch (_) {
          try {
            const t = await res.text()
            if (t) msg = t
          } catch (_) {}
        }
        setError(msg)
        return
      }

      const data = await res.json()
      const id = data?.productId
      if (!id) {
        setError('Сервер не повернув id продукту')
        return
      }

      navigate(`/products/${id}`)
    } catch (e: any) {
      setError(e?.message || 'Невідома помилка')
    }
  }

  return (
    <div className={styles.addProduct}>
      {(error !== null) && <ErrorModal msg={error} onClose={() => setError(null)} />}
      <div className={styles.section}>
        <div className={styles.title}>
          добавить виріб через посилання із shafa
        </div>

        <div className={styles.block}>
          <input type="text"
                 className={styles.input}
                 placeholder="посилання на shafa"
                 value={shafaLink}
                 onChange={(e) => setShafaLink(e.target.value)}
          />

          <button className={styles.button} onClick={handleShafaAdd}>добавить</button>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.title}>
          добавить виріб вручну
        </div>

        <div className={styles.block}>
          <input type="text" className={styles.input}
                 placeholder="" />

          <button className={styles.button}>добавить</button>
        </div>

        <div className={styles.block}>
          <input type="text" className={styles.input}
                 placeholder="" />

          <button className={styles.button}>добавить</button>
        </div>

        <div className={styles.block}>
          <input type="text" className={styles.input}
                 placeholder="" />

          <button className={styles.button}>добавить</button>
        </div>

        <div className={styles.block}>
          <input type="text" className={styles.input}
                 placeholder="" />

          <button className={styles.button}>добавить</button>
        </div>

        <div className={styles.block}>
          <input type="text" className={styles.input}
                 placeholder="" />

          <button className={styles.button}>добавить</button>
        </div>

        <div className={styles.block}>
          <input type="text" className={styles.input}
                 placeholder="" />

          <button className={styles.button}>добавить</button>
        </div>

        <div className={styles.block}>
          <input type="text" className={styles.input}
                 placeholder="" />

          <button className={styles.button}>добавить</button>
        </div>

        <div className={styles.block}>
          <input type="text" className={styles.input}
                 placeholder="" />

          <button className={styles.button}>добавить</button>
        </div>

      </div>
    </div>
  )
}

export default AddProductPage;
