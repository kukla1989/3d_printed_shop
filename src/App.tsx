import styles from './App.module.scss'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage/ProductsPage.tsx'
import ProductPage from './pages/ProductPage/ProductPage.tsx'
import AddProduct from './pages/AddProduct/AddProduct.tsx'
import Contacts from './pages/Contacts/Contacts.tsx'

function App() {
  return (
    <div className={styles.app}>
      <header>
        <nav className={styles.header}>
          <Link to="/products">Products</Link>
          <Link to="/add-product">Add Product</Link>
          <Link to="/contacts">Contacts</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<div>404 — Page Not Found</div>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
