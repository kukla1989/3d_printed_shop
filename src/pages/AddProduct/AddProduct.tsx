import styles from "./AddProduct.module.scss"
import { useState } from "react";
import ErrorModal from "../../components/ErrorModal/ErrorModal.tsx";

function AddProduct() {
  const [shafaLink, setShafaLink] = useState("")
  const [error, setError] = useState<string | null>(null)
  const handleShafaAdd = () => {
    if (!shafaLink) {
      setError('будь-ласка введіть ссилку')
      return;
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

export default AddProduct;
