import styles from "./AddProduct.module.scss"

function AddProduct() {
  return (
    <div className={styles.addProduct}>
      <div className={styles.section}>
        <div className={styles.title}>
          добавить виріб через посилання із shafa
        </div>

        <div className={styles.block}>
          <input type="text" className={styles.input}
                 placeholder="посилання на shafa" />

          <button className={styles.button}>добавить</button>
        </div>
      </div>

      <div className={styles.title}>
        добавить виріб вручну
      </div>
    </div>
  )
}

export default AddProduct;
