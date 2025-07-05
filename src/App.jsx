// src/App.jsx
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { CartProvider } from './contexts/CartContext.jsx';

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => {
    const rootElement = document.getElementById('rootElement');
    rootElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <div
      id="rootElement"
      className={`min-h-screen ${
        isDark ? 'dark:bg-black' : 'bg-gray-300'
      } text-black dark:text-white`}
    >
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">Mi Carrito de Compras</h1>
      </header>
      <main className="container mx-auto p-4">
        <CartProvider>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProductList />
            <Cart />
          </div>
          <button
            onClick={toggleDark}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {isDark ? 'Cambiar a Tema Oscuro' : 'Cambiar a Tema Claro'}
          </button>
        </CartProvider>
      </main>
    </div>
  );
}

export default App;
