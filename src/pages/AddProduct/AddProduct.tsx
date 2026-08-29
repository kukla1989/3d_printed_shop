import styles from "./AddProduct.module.scss"
import { useState } from "react";

function AddProduct() {
  const [shafaLink, setShafaLink] = useState("")

  return (
    <div className={styles.addProduct}>
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

          <button className={styles.button}>добавить</button>
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
