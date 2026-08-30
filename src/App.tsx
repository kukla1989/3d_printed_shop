import styles from './App.module.scss'
import { Navigate, Route, Routes } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage/ProductsPage.tsx'
import ProductPage from './pages/ProductPage/ProductPage.tsx'
import AddProductPage from './pages/AddProduct/AddProductPage.tsx'
import ContactsPage from './pages/Contacts/ContactsPage.tsx'
import Navbar from "./components/Navbar/Navbar.tsx";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/add-product" element={<AddProductPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<div>404 — Page Not Found</div>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
