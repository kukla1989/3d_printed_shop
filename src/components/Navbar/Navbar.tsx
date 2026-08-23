import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className={styles.navbar}>
        <Link to="/products" className={styles.link}>Products</Link>

        <Link to="/add-product" className={styles.link}>Add Product</Link>

        <Link to="/contacts" className={styles.link}>Contacts</Link>
      </nav>
    </header>
  );
}

export default Navbar;